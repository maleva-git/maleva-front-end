import { Eye, Edit, Trash2 } from 'lucide-react';
import Badge from '../../../components/common/Badge';

export const customerColumns = (handleView, handleEdit, handleDelete) => [
  {
    key: 'accountCode',
    header: 'Code',
    maxWidth: '120px',
  },
  {
    key: 'customerName',
    header: 'Customer Name',
    maxWidth: '300px',
  },
  {
    key: 'companyCode',
    header: 'Company Code',
    maxWidth: '120px',
  },
  {
    key: 'mobileNo',
    header: 'Phone',
    maxWidth: '150px',
  },
  {
    key: 'city',
    header: 'City',
    maxWidth: '150px',
  },
  {
    key: 'sName',
    header: 'Currency',
    maxWidth: '80px',
  },
  {
    key: 'termsName',
    header: 'Payment Terms',
    maxWidth: '120px',
  },
  {
    key: 'active',
    header: 'Status',
    render: (row) => (
      <Badge variant={row.active === 1 ? 'success' : 'error'} size="sm">
        {row.active === 1 ? 'Active' : 'Inactive'}
      </Badge>
    ),
  },
  {
    key: 'actions',
    header: 'Actions',
    render: (row) => (
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleView(row)}
          className="p-1.5 rounded-md transition-colors"
          style={{ color: 'var(--color-text-tertiary)' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-primary-light)';
            e.target.style.color = 'var(--color-primary-600)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-text-tertiary)';
          }}
          title="View"
        >
          <Eye className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleEdit(row)}
          className="p-1.5 rounded-md transition-colors"
          style={{ color: 'var(--color-text-tertiary)' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-warning-light)';
            e.target.style.color = 'var(--color-warning-600)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-text-tertiary)';
          }}
          title="Edit"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleDelete(row)}
          className="p-1.5 rounded-md transition-colors"
          style={{ color: 'var(--color-text-tertiary)' }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-danger-light)';
            e.target.style.color = 'var(--color-danger-600)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--color-text-tertiary)';
          }}
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];
