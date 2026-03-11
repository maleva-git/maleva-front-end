import EditableCell from '../../components/table/EditableCell';
import StatusToggle from '../../components/table/StatusToggle';
import { Trash } from 'lucide-react';

export const agentCompanyColumns = ({ updateCell,onDelete  }) => [
  { key: 'id', header: 'S.NO' },

  {
    key: 'name',
    header: 'AGENT NAME',
    render: (row) => (
      <EditableCell
        value={row.name}
        onChange={(v) => updateCell(row.id, 'name', v)}
      />
    ),
  },
  {
    key: 'active',
    header: 'active',
    render: (row) => (
      <StatusToggle
        checked={row.active}
        onChange={() =>
          updateCell(row.id, 'active', !row.active)
        }
      />
    ),
  },


{
    key: 'actions',
    header: 'ACTIONS',
    render: (row) => (
      <button
        onClick={() => onDelete(row.id)}
        className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
      >
        <Trash size={14} />
        Delete
      </button>
    ),
  },

];
