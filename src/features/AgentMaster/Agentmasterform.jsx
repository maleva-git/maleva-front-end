// AgentMasterForm.jsx - Premium SaaS ERP Design
import TextInput from '../../components/ui/TextInput';
import CompactSelect from '../../components/ui/CompactSelect';
import CompactCheckbox from '../../components/ui/CompactCheckbox';
import { FormSection, FormGrid, ActionBar, PageHeader, FormDivider } from '../../components/ui/FormLayout';
import { Button } from '../../components/common/Button';
import { Save, RefreshCw, X, Eye, User, Building2, CreditCard, Phone, Mail, Settings } from 'lucide-react';
import { symbolOptions } from '../../constants/formOptions';

export default function AgentMasterForm({
  formData,
  errors = {},
  onChange,
  onToggleActive,
  onSave,
  onUpdate,
  onCancel
}) {
  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Premium Page Header */}
      <PageHeader
        title="Agent Master"
        subtitle="Create and manage agent profiles with complete business information"
     
      />

      <div className="space-y-8">
        {/* Agent Information Section */}
        <FormSection 
          title="Agent Information" 
          description="Basic agent details and contact information"
          icon={<User className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Agent Name"
              name="agentName"
              value={formData.agentName}
              onChange={onChange}
              error={errors.agentName}
              placeholder="Enter full agent name"
              required
              size="md"
              icon={<User className="w-4 h-4" />}
              helpText="Full name of the agent"
            />
            <CompactSelect
              label="Company"
              name="companyId"
              value={formData.companyId}
              onChange={onChange}
              error={errors.companyId}
              options={symbolOptions}
              placeholder="Select company"
              required
              size="md"
              helpText="Associated company"
            />
          </FormGrid>

          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={onChange}
              error={errors.email}
              type="email"
              placeholder="agent@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              helpText="Primary email address"
            />
            <TextInput
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              error={errors.phone}
              placeholder="+1 (555) 123-4567"
              size="md"
              icon={<Phone className="w-4 h-4" />}
              helpText="Primary contact number"
            />
          </FormGrid>

          <div className="mt-6">
            <CompactCheckbox
              label="Active Agent"
              name="isActive"
              checked={formData.isActive}
              onChange={onToggleActive}
              helpText="Enable this agent for operations"
            />
          </div>
        </FormSection>

        <FormDivider label="Financial Information" />

        {/* Bank Details Section */}
        <FormSection 
          title="Bank Details" 
          description="Banking information for payments and transactions"
          icon={<CreditCard className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={onChange}
              error={errors.bankName}
              placeholder="Enter bank name"
              size="md"
              icon={<Building2 className="w-4 h-4" />}
              helpText="Name of the bank"
            />
            <TextInput
              label="Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={onChange}
              error={errors.accountNumber}
              placeholder="Enter account number"
              size="md"
              helpText="Bank account number"
            />
          </FormGrid>

          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="IFSC Code"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={onChange}
              error={errors.ifscCode}
              placeholder="Enter IFSC code"
              size="md"
              helpText="Bank IFSC code"
            />
            <TextInput
              label="Branch Name"
              name="branch"
              value={formData.branch}
              onChange={onChange}
              error={errors.branch}
              placeholder="Enter branch name"
              size="md"
              helpText="Bank branch location"
            />
          </FormGrid>
        </FormSection>
      </div>

      {/* Enhanced Sticky Action Bar */}
      <ActionBar position="between" sticky={true}>
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            onClick={onCancel}
            leftIcon={<X className="w-4 h-4" />}
          >
            Cancel
          </Button>
          <Button 
            variant="outline" 
            leftIcon={<Eye className="w-4 h-4" />}
          >
            Preview
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary" 
            onClick={onUpdate}
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Update
          </Button>
          <Button 
            variant="primary" 
            onClick={onSave} 
            size="lg"
            leftIcon={<Save className="w-4 h-4" />}
          >
            Save Agent
          </Button>
        </div>
      </ActionBar>
    </div>
  );
}
