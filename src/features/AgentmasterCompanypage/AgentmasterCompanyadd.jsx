import { useState } from 'react';
import { PageHeader } from '../../components/ui/FormLayout';
import DataTable from '../../components/table/DataTable';
import { agentCompanyColumns } from './AgentCompanyviewTable.config';
import { agentCompanyMockData } from '../../data/agentCompany-mastermockdata';
import { Button } from '../../components/common/Button';
import { useConfirm } from "../../hooks/useConfirm";
import { Save, Search, Filter, Download, Plus, Users } from 'lucide-react';

export default function AgentCompanyDashboard() {
  const [data, setData] = useState(agentCompanyMockData);
  const [dirtyIds, setDirtyIds] = useState(new Set());
  const [search, setSearch] = useState('');
  const { confirm, ConfirmUI } = useConfirm();

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    const ok = await confirm("delete");
    if (!ok) return;
    setData(prev => prev.filter(row => row.id !== id));
    setDirtyIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const updateCell = (id, field, value) => {
    setData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
    setDirtyIds(prev => new Set(prev).add(id));
  };

  const handleSave = async () => {
    const ok = await confirm("save");
    if (!ok) return;
    setDirtyIds(new Set());
  };

  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      <PageHeader
        title="Agent Company Management"
        subtitle="Manage agent company details, status, and configurations"
       
      />

      <div className="space-y-6">
        <div 
          className="rounded-xl border p-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'var(--color-text-quaternary)' }} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search agents by name, company, or status..."
                  className="pl-10 pr-4 py-2.5 w-80 text-sm border rounded-lg transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: 'var(--color-gray-50)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: 'var(--color-primary-600)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    Total: {data.length}
                  </span>
                </div>
              </div>
            </div>

            {dirtyIds.size > 0 && (
              <div className="flex items-center gap-3">
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-warning-600)' }}
                >
                  {dirtyIds.size} unsaved changes
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSave}
                  leftIcon={<Save className="w-4 h-4" />}
                >
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>

        <DataTable
          columns={agentCompanyColumns({ updateCell, onDelete: handleDelete })}
          data={filteredData}
          dirtyIds={dirtyIds}
          height="600px"
        />
      </div>
      
      {ConfirmUI}
    </div>
  );
}