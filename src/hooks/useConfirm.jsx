import { useState } from "react";
import ConfirmDialog from "../components/common/ConfirmDialog";   

export const useConfirm = () => {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({});
  const [resolver, setResolver] = useState(null);

  const confirm = (action) => {
    return new Promise((resolve) => {
      const map = {
        save: {
          title: "Save Changes",
          message: "Do you want to save the changes?",
          confirmText: "Save",
          type: "save",
        },
        delete: {
          title: "Delete Record",
          message: "This action cannot be undone. Continue?",
          confirmText: "Delete",
          type: "delete",
        },
        update: {
          title: "Update Record",
          message: "Are you sure you want to update?",
          confirmText: "Update",
          type: "update",
        },
      };

      setConfig(map[action]);
      setResolver(() => resolve);
      setOpen(true);
    });
  };

  const ConfirmUI = (
    <ConfirmDialog
      open={open}
      {...config}
      onConfirm={() => {
        resolver(true);
        setOpen(false);
      }}
      onCancel={() => {
        resolver(false);
        setOpen(false);
      }}
    />
  );

  return { confirm, ConfirmUI };
};
