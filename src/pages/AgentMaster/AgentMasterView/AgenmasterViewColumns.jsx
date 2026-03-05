import StatusToggle from "../../../components/table/StatusToggle";
import { Trash } from "lucide-react";

export const agentMasterViewColumns = ({ updateCell, onDelete }) => [
  {
    key: "Id",
    header: "S.NO",
    width: 80,
    pinned: true,
    pinOrder: 1,
    render: row => <span>{row.Id}</span>,
  },
  {
    key: "name",
    header: "Company Name",
    searchable: true,
    pinned: true,
    pinOrder: 2,
    width: 220,
    render: row => (
      <input
        value={row.name || ""}
        onChange={e => updateCell(row.Id, "name", e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300"
      />
    ),
  },
  {
    key: "phone",
    header: "Phone",
    searchable: true,
    pinned: true,
    pinOrder: 3,
    width: 160,
    render: row => (
      <input
        value={row.phone || ""}
        onChange={e => updateCell(row.Id, "phone", e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-300"
      />
    ),
  },
  {
    key: "department",
    header: "Department",
    searchable: true,
    width: 180,
  },
  {
    key: "address",
    header: "Address",
    searchable: true,
    width: 200,
  },
  {
    key: "remarks",
    header: "Remarks",
    searchable: true,
    pinned: true,
    pinOrder: 4,
    width: 180,
  },
  {
    key: "experience",
    header: "Experience",
    searchable: true,
    pinned: true,
    pinOrder: 5,
    width: 120,
  },
  {
    key: "salary",
    header: "Salary",
    searchable: true,
    pinned: true,
    pinOrder: 6,
    width: 140,
  },
  {
    key: "active",
    header: "Active",
    width: 120,
    render: row => (
      <div className="flex justify-center">
        <StatusToggle
          checked={row.active}
          onChange={() => updateCell(row.Id, "active", !row.active)}
        />
      </div>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    width: 100,
    render: row => (
      <button
        onClick={() => onDelete(row.Id)}
        className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <Trash size={16} />
      </button>
    ),
  },
];
