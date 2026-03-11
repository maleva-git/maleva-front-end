import { Trash2 } from 'lucide-react';

export const AddressMasterColumns = ({ onDelete }) => [
  {
    key: 'id',
    header: 'S.NO',
    searchable: false,
    width: "80px"
  },
  {
    key: 'name',
    header: 'AGENT NAME',
    width: "220px"
  },
  {
    key: 'address',
    header: 'ADDRESS',
    modalEdit: true,
    width: "220px"
  },
  {
    key: 'city',
    header: 'CITY',
    width: "220px"
  },
  {
    key: 'state',
    header: 'STATE',
    width: "220px"
  },
  {
    key: 'zip',
    header: 'ZIP CODE',
    width: "220px"
  },
  {
    key: 'active',
    header: 'STATUS',
    type: 'status',
    width: "120px"
  },
  {
    key: 'actions',
    header: 'ACTIONS',
    searchable: false,
    width: "90px",
    render: (row) => (
      <div className="flex items-center justify-center">
        <button
          onClick={() => onDelete(row.id)}
          className="group relative p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
        >
          <Trash2 size={16} className="text-gray-400 group-hover:text-red-500" />
        </button>
      </div>
    ),
  },
];
