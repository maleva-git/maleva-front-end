// CustomerForm.jsx - Premium SaaS ERP Design
import TextInput from '../../components/ui/TextInput';
import CompactSelect from '../../components/ui/CompactSelect';
import CompactTextArea from '../../components/ui/CompactTextArea';
import CompactCheckbox from '../../components/ui/CompactCheckbox';
import { FormSection, FormGrid, ActionBar, PageHeader, FormDivider } from '../../components/ui/FormLayout';
import { Button } from '../../components/common/Button';
import { Save, RefreshCw, CreditCard, X, User, MapPin, Phone, Building2, FileText, Settings, Shield, Globe, Mail, Key, Users } from 'lucide-react';
import { symbolOptions, paymentTermOptions, countryOptions, tinTypeOptions, eInvoiceOptions } from '../../constants/formOptions';

export default function CustomerForm({ formData, errors, onChange, onToggleActive, onSave, onUpdate, onBank, onCancel, onViewAllCustomers }) {
  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Premium Page Header */}
      <PageHeader
        title="Add New Customer"
        subtitle="Create a comprehensive customer profile with complete business information and system access"
        
      />

      <div className="space-y-8">
        {/* Basic Information Section */}
        <FormSection 
          title="Basic Information" 
          description="Essential customer details and primary business information"
          icon={<Building2 className="w-5 h-5" />}
        >
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={onChange}
              error={errors.customerName}
              placeholder="Enter full customer name"
              required
              size="md"
              helpText="Legal business name as registered"
            />
            <TextInput
              label="ROC Number"
              name="rocNo"
              value={formData.rocNo}
              onChange={onChange}
              error={errors.rocNo}
              placeholder="Registration number"
              size="md"
              helpText="Company registration number"
            />
            <TextInput
              label="Person in Charge"
              name="picName"
              value={formData.picName}
              onChange={onChange}
              error={errors.picName}
              placeholder="Primary contact person"
              size="md"
              icon={<User className="w-4 h-4" />}
              helpText="Main point of contact"
            />
          </FormGrid>
          
          <FormGrid cols={3} gap="gap-6">
            <CompactSelect
              label="Currency Symbol"
              name="symbolName"
              value={formData.symbolName}
              onChange={onChange}
              error={errors.symbolName}
              options={symbolOptions}
              placeholder="Select currency"
              size="md"
              helpText="Primary transaction currency"
            />
            <CompactSelect
              label="Payment Terms"
              name="paymentTerm"
              value={formData.paymentTerm}
              onChange={onChange}
              error={errors.paymentTerm}
              options={paymentTermOptions}
              placeholder="Select payment terms"
              size="md"
              helpText="Default payment conditions"
            />
            <TextInput
              label="GST/GTS Number"
              name="gtsNo"
              value={formData.gtsNo}
              onChange={onChange}
              error={errors.gtsNo}
              placeholder="Tax registration number"
              size="md"
              helpText="Government tax ID"
            />
          </FormGrid>

          <div className="mt-6">
            <CompactTextArea
              label="Business Address"
              name="address"
              value={formData.address}
              onChange={onChange}
              error={errors.address}
              placeholder="Enter complete business address with street, building details"
              rows={3}
              required
              helpText="Full registered business address"
            />
          </div>
        </FormSection>

        {/* Location Information Section */}
        <FormSection 
          title="Location Information" 
          description="Geographic details and shipping information"
          icon={<MapPin className="w-5 h-5" />}
        >
          <FormGrid cols={4} gap="gap-6">
            <TextInput
              label="City"
              name="city"
              value={formData.city}
              onChange={onChange}
              error={errors.city}
              placeholder="City name"
              required
              size="md"
              icon={<MapPin className="w-4 h-4" />}
            />
            <CompactSelect
              label="Country"
              name="country"
              value={formData.country}
              onChange={onChange}
              error={errors.country}
              options={countryOptions}
              placeholder="Select country"
              required
              size="md"
            />
            <TextInput
              label="State/Province"
              name="state"
              value={formData.state}
              onChange={onChange}
              error={errors.state}
              placeholder="State or province"
              required
              size="md"
            />
            <TextInput
              label="Postal Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={onChange}
              error={errors.zipCode}
              placeholder="ZIP/Postal code"
              required
              size="md"
            />
          </FormGrid>
        </FormSection>

        {/* Contact Information Section */}
        <FormSection 
          title="Contact Information" 
          description="Primary communication channels and contact details"
          icon={<Phone className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Primary Email"
              name="emailId"
              value={formData.emailId}
              onChange={onChange}
              error={errors.emailId}
              type="email"
              placeholder="primary@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              helpText="Main business email address"
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
        </FormSection>

        <FormDivider label="Department Contacts" />

        {/* Accounts Department Section */}
        <FormSection 
          title="Accounts Department" 
          description="Financial contacts and billing information"
          icon={<CreditCard className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Accounts Email"
              name="accountsEmail"
              value={formData.accountsEmail}
              onChange={onChange}
              error={errors.accountsEmail}
              type="email"
              placeholder="accounts@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            />
            <TextInput
              label="Secondary Accounts Email"
              name="accountsEmail1"
              value={formData.accountsEmail1}
              onChange={onChange}
              error={errors.accountsEmail1}
              type="email"
              placeholder="billing@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            />
            <TextInput
              label="Accounts Contact Name"
              name="accountsContactName"
              value={formData.accountsContactName}
              onChange={onChange}
              error={errors.accountsContactName}
              placeholder="Finance manager name"
              size="md"
              icon={<User className="w-4 h-4" />}
            />
            <TextInput
              label="Accounts Phone"
              name="accountsPhone"
              value={formData.accountsPhone}
              onChange={onChange}
              error={errors.accountsPhone}
              placeholder="Direct finance line"
              size="md"
              icon={<Phone className="w-4 h-4" />}
            />
          </FormGrid>
        </FormSection>

        {/* Operations Department Section */}
        <FormSection 
          title="Operations Department" 
          description="Operational contacts and logistics coordination"
          icon={<Settings className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Operations Email"
              name="operationsEmail"
              value={formData.operationsEmail}
              onChange={onChange}
              error={errors.operationsEmail}
              type="email"
              placeholder="operations@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            />
            <TextInput
              label="Secondary Operations Email"
              name="operationsEmail1"
              value={formData.operationsEmail1}
              onChange={onChange}
              error={errors.operationsEmail1}
              type="email"
              placeholder="logistics@company.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            />
            <TextInput
              label="Operations Contact Name"
              name="operationsContactName"
              value={formData.operationsContactName}
              onChange={onChange}
              error={errors.operationsContactName}
              placeholder="Operations manager name"
              size="md"
              icon={<User className="w-4 h-4" />}
            />
            <TextInput
              label="Operations Phone"
              name="operationsPhone"
              value={formData.operationsPhone}
              onChange={onChange}
              error={errors.operationsPhone}
              placeholder="Direct operations line"
              required
              size="md"
              icon={<Phone className="w-4 h-4" />}
            />
          </FormGrid>
        </FormSection>

        <FormDivider label="Compliance & Legal" />

        {/* Tax & Compliance Section */}
        <FormSection 
          title="Tax & Compliance" 
          description="Tax registration and regulatory compliance information"
          icon={<Shield className="w-5 h-5" />}
        >
          <FormGrid cols={3} gap="gap-6">
            <CompactSelect
              label="TIN Type"
              name="tinType"
              value={formData.tinType}
              onChange={onChange}
              error={errors.tinType}
              options={tinTypeOptions}
              placeholder="Select TIN type"
              size="md"
              helpText="Tax identification type"
            />
            <TextInput
              label="Tax Identification Number"
              name="tinNo"
              value={formData.tinNo}
              onChange={onChange}
              error={errors.tinNo}
              placeholder="Enter TIN number"
              required
              size="md"
              helpText="Government tax ID"
            />
            <CompactSelect
              label="E-Invoice Validation"
              name="eInvoice"
              value={formData.eInvoice}
              onChange={onChange}
              error={errors.eInvoice}
              options={eInvoiceOptions}
              placeholder="Select validation type"
              size="md"
              helpText="Electronic invoice compliance"
            />
          </FormGrid>
          
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="Tax Exemption Number"
              name="taxExemptionNo"
              value={formData.taxExemptionNo}
              onChange={onChange}
              error={errors.taxExemptionNo}
              placeholder="Exemption certificate number"
              size="md"
            />
            <TextInput
              label="Exemption Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={onChange}
              error={errors.expiryDate}
              type="date"
              size="md"
            />
            <TextInput
              label="Business Registration Number"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={onChange}
              error={errors.registrationNo}
              placeholder="Business registration ID"
              required
              size="md"
            />
          </FormGrid>

          <div className="mt-6">
            <CompactTextArea
              label="Tax Exemption Details"
              name="taxExemptionDetails"
              value={formData.taxExemptionDetails}
              onChange={onChange}
              error={errors.taxExemptionDetails}
              placeholder="Describe tax exemption conditions and applicable scenarios"
              rows={3}
              helpText="Detailed exemption terms and conditions"
            />
          </div>

          <div className="mt-6">
            <CompactCheckbox
              label="Active Customer"
              name="active"
              checked={formData.active}
              onChange={onToggleActive}
            />
          </div>
        </FormSection>

        {/* System Access Section */}
        <FormSection 
          title="System Access" 
          description="Login credentials and system configuration"
          icon={<Key className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={onChange}
              error={errors.username}
              placeholder="System username"
              size="md"
              helpText="Unique system identifier"
            />
            <TextInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={onChange}
              error={errors.password}
              type="password"
              placeholder="Secure password"
              size="md"
              helpText="Minimum 8 characters required"
            />
            <TextInput
              label="Company Code"
              name="companyCode"
              value={formData.companyCode}
              onChange={onChange}
              error={errors.companyCode}
              placeholder="Internal company identifier"
              size="md"
              helpText="Internal reference code"
            />
            <TextInput
              label="Update ID"
              name="updateId"
              value={formData.updateId}
              onChange={onChange}
              error={errors.updateId}
              placeholder="Last update reference"
              size="md"
              helpText="System tracking reference"
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
            onClick={onBank}
            leftIcon={<CreditCard className="w-4 h-4" />}
          >
            Bank Details
          </Button>
        </div>
       <div className="flex items-center gap-3">
        
          <Button 
            variant="outline" 
            onClick={onViewAllCustomers}
            leftIcon={<Users className="w-4 h-4" />}
          >
           View All Customer 
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
            Save Customer
          </Button>
        </div>
      </ActionBar>
    </div>
  );
}
     