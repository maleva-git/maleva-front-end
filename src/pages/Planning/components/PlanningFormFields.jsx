import { Calendar, FileText } from 'lucide-react';
import SearchableSelect from '../../../components/common/SearchableSelect';
import TextInput from '../../../components/ui/TextInput';

const PlanningFormFields = ({ 
  formData, 
  onFieldChange, 
  employeeOptions, 
  portOptions 
}) => {
  return (
    <div className="grid grid-cols-12 gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="col-span-2">
        <TextInput
          label="Planning No"
          value={formData.planningNo}
          onChange={(e) => onFieldChange('planningNo', e.target.value)}
          disabled
          size="sm"
          className="font-bold"
        />
      </div>

      <div className="col-span-2">
        <TextInput
          label="Planning Date"
          type="date"
          value={formData.planningDate}
          onChange={(e) => onFieldChange('planningDate', e.target.value)}
          icon={<Calendar className="w-4 h-4" />}
          size="sm"
        />
      </div>

      <div className="col-span-2">
        <TextInput
          label="From Date"
          type="date"
          value={formData.pickupFromDate}
          onChange={(e) => onFieldChange('pickupFromDate', e.target.value)}
          icon={<Calendar className="w-4 h-4" />}
          size="sm"
        />
      </div>

      <div className="col-span-2">
        <TextInput
          label="To Date"
          type="date"
          value={formData.pickupToDate}
          onChange={(e) => onFieldChange('pickupToDate', e.target.value)}
          icon={<Calendar className="w-4 h-4" />}
          size="sm"
        />
      </div>

      <SearchableSelect
        label="Port"
        value={formData.port}
        onChange={(e) => onFieldChange('port', e.target.value)}
        options={portOptions}
        containerClassName="col-span-2"
        placeholder="Select Port"
      />

      <SearchableSelect
        label="Employee"
        value={formData.employee}
        onChange={(e) => onFieldChange('employee', e.target.value)}
        options={employeeOptions}
        containerClassName="col-span-2"
        placeholder="Select Employee"
      />

      <div className="col-span-6">
        <TextInput
          label="Remarks"
          value={formData.remarks}
          onChange={(e) => onFieldChange('remarks', e.target.value)}
          placeholder="Enter remarks..."
          icon={<FileText className="w-4 h-4" />}
          size="sm"
        />
      </div>

      <div className="col-span-6">
        <TextInput
          label="Search"
          value={formData.searchText}
          onChange={(e) => onFieldChange('searchText', e.target.value)}
          placeholder="Search planning..."
          size="sm"
        />
      </div>
    </div>
  );
};

export default PlanningFormFields;
