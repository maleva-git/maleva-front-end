import { useState } from "react";
import { PageHeader } from "../../../components/ui/FormLayout";
import { agentMasterViewColumns } from "./AgenmasterViewColumns";
import SearchableDatatable from "../../../components/common/SearchableDatatable";
import { agentCompanyMockData } from "../../../data/Agent-masterviewmockdata";
import { useConfirm } from "../../../hooks/useConfirm";
import { Button } from "../../../components/common/Button";
import { RefreshCw, Plus, Download, Filter } from 'lucide-react';

export default function AgentMasterView() {
  const [data, setData] = useState(agentCompanyMockData);
  const [loading, setLoading] = useState(false);
  const { confirm, ConfirmUI } = useConfirm();

  const fetchData = async () => {
    setLoading(true);
    try {
      setData(agentCompanyMockData);
    } finally {
      setLoading(false);
    }
  };

  const updateCell = (id, field, value) => {
    setData(prev =>
      prev.map(row =>
        row.Id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleDelete = async (id) => {
    const ok = await confirm("delete");
    if (!ok) return;
    setData(prev => prev.filter(row => row.id !== id));
  };

  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      <PageHeader
        title="Agent Master View"
        subtitle="View and manage all agent records with advanced filtering and search capabilities"
        actions={
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              leftIcon={<Download className="w-4 h-4" />}
            >
              Export
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchData}
              loading={loading}
              leftIcon={<RefreshCw className="w-4 h-4" />}
            >
              Refresh
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Add Agent
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        <SearchableDatatable
          title="Agent Master Records"
          columns={agentMasterViewColumns({ updateCell, onDelete: handleDelete })}
          data={data}
          loading={loading}
          height="650px"
        />
      </div>
      
      {ConfirmUI}
    </div>
  );
}
