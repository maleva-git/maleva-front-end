import { Eye, Save, Trash2, Search, RefreshCw, ArrowUpDown, Send } from 'lucide-react';
import Button from '../../../components/common/Button';

const PlanningActionButtons = ({ 
  onView, 
  onSave, 
  onDelete, 
  onSearch, 
  onClear, 
  onSort, 
  onPushToRTI,
  loading 
}) => {
  return (
    <div className="flex gap-2 p-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-lg shadow-lg">
      <Button
        variant="secondary"
        size="sm"
        leftIcon={<Eye className="w-4 h-4" />}
        onClick={onView}
      >
        View
      </Button>
      
      <Button
        variant="primary"
        size="sm"
        leftIcon={<Save className="w-4 h-4" />}
        onClick={onSave}
        loading={loading}
      >
        Save
      </Button>
      
      <Button
        variant="danger"
        size="sm"
        leftIcon={<Trash2 className="w-4 h-4" />}
        onClick={onDelete}
      >
        Delete
      </Button>
      
      <Button
        variant="secondary"
        size="sm"
        leftIcon={<Search className="w-4 h-4" />}
        onClick={onSearch}
        loading={loading}
      >
        Search
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        leftIcon={<RefreshCw className="w-4 h-4" />}
        onClick={onClear}
      >
        Clear
      </Button>
      
      <Button
        variant="secondary"
        size="sm"
        leftIcon={<ArrowUpDown className="w-4 h-4" />}
        onClick={onSort}
      >
        Sort
      </Button>
      
      <Button
        variant="primary"
        size="sm"
        leftIcon={<Send className="w-4 h-4" />}
        onClick={onPushToRTI}
      >
        Push to RTI
      </Button>
    </div>
  );
};

export default PlanningActionButtons;
