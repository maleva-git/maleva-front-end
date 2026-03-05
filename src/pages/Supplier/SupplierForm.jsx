// SupplierForm.jsx - Premium SaaS ERP Design
import TextInput from '../../components/ui/TextInput';
import CompactSelect from '../../components/ui/CompactSelect';
import CompactTextArea from '../../components/ui/CompactTextArea';
import CompactCheckbox from '../../components/ui/CompactCheckbox';
import { FormSection, FormGrid, ActionBar, PageHeader, FormDivider } from '../../components/ui/FormLayout';
import { Button } from '../../components/common/Button';
import { Save, RefreshCw, CreditCard, X, User, MapPin, Phone, Building2, FileText, Settings, Shield, Globe, Mail, Key, Package } from 'lucide-react';
import { symbolOptions, paymentTermOptions, countryOptions, tinTypeOptions, SuppliertypeOptions } from '../../constants/formOptions';

export default function SupplierForm({ formData, errors, onChange, onToggleActive, onSave, onUpdate, onBank, onCancel }) {
  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Premium Page Header */}
      <PageHeader
        title="Add New Supplier"
        subtitle="Create a comprehensive supplier profile with complete business information and system access"
        actions={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" leftIcon={<FileText className="w-4 h-4" />}>
              Import Data
            </Button>
            <Button variant="outline" size="sm" leftIcon={<Settings className="w-4 h-4" />}>
              Templates
            </Button>
          </div>
        }
      />

      <div className="space-y-8">
        {/* Basic Information Section */}
        <FormSection 
          title="Basic Information" 
          description="Essential supplier details and primary business information"
          icon={<Building2 className="w-5 h-5" />}
        >
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="Supplier Name"
              name="suppliername"
              value={formData.suppliername}
              onChange={onChange}
              error={errors.suppliername}
              placeholder="Enter full supplier name"
              required
              size="md"
              helpText="Legal business name as registered"
            />
            <TextInput
              label="Supplier ID"
              name="supplierid"
              value={formData.supplierid}
              onChange={onChange}
              error={errors.supplierid}
              placeholder="Unique supplier identifier"
              size="md"
              helpText="Internal supplier reference"
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
            <CompactSelect
              label="Supplier Type"
              name="suppliertype"
              value={formData.suppliertype}
              onChange={onChange}
              error={errors.suppliertype}
              options={SuppliertypeOptions}
              placeholder="Select supplier type"
              size="md"
              helpText="Business classification"
            />
          </FormGrid>

          <FormGrid cols={2} gap="gap-6">
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
            <div></div>
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
              placeholder="primary@supplier.com"
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

        <FormDivider label="Financial & Tax Information" />

        {/* Tax & Compliance Section */}
        <FormSection 
          title="Tax & Compliance" 
          description="Tax registration and regulatory compliance information"
          icon={<Shield className="w-5 h-5" />}
        >
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="TIN Number"
              name="tinno"
              value={formData.tinno}
              onChange={onChange}
              error={errors.tinno}
              placeholder="Enter TIN number"
              required
              size="md"
              helpText="Tax identification number"
            />
            <CompactSelect
              label="TIN Type"
              name="tintype"
              value={formData.tintype}
              onChange={onChange}
              error={errors.tintype}
              options={tinTypeOptions}
              placeholder="Select TIN type"
              size="md"
              helpText="Tax identification type"
            />
            <TextInput
              label="Supplier TIN"
              name="suppliertinNo"
              value={formData.suppliertinNo}
              onChange={onChange}
              error={errors.suppliertinNo}
              placeholder="Supplier TIN number"
              required
              size="md"
            />
          </FormGrid>
          
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="SST Registration No"
              name="sstregistrationno"
              value={formData.sstregistrationno}
              onChange={onChange}
              error={errors.sstregistrationno}
              placeholder="SST registration number"
              required
              size="md"
            />
            <TextInput
              label="Service Tax Type"
              name="servicetaxtype"
              value={formData.servicetaxtype}
              onChange={onChange}
              error={errors.servicetaxtype}
              placeholder="Service tax classification"
              size="md"
            />
            <TextInput
              label="Registration Number"
              name="registrationno"
              value={formData.registrationno}
              onChange={onChange}
              error={errors.registrationno}
              placeholder="Business registration ID"
              required
              size="md"
            />
          </FormGrid>

          <div className="mt-6">
            <CompactCheckbox
              label="Active Supplier"
              name="active"
              checked={formData.active}
              onChange={onToggleActive}
              helpText="Enable this supplier for transactions"
            />
          </div>
        </FormSection>

        {/* Business Classification Section */}
        <FormSection 
          title="Business Classification" 
          description="Industry classification and business codes"
          icon={<Package className="w-5 h-5" />}
        >
          <FormGrid cols={2} gap="gap-6">
            <TextInput
              label="MSIC Code"
              name="msiccode"
              value={formData.msiccode}
              onChange={onChange}
              error={errors.msiccode}
              placeholder="Enter MSIC code"
              size="md"
              helpText="Malaysian Standard Industrial Classification"
            />
            <CompactSelect
              label="MSIC Code Type"
              name="msiccodetype"
              value={formData.msiccodetype}
              onChange={onChange}
              error={errors.msiccodetype}
              options={SuppliertypeOptions}
              placeholder="Select MSIC type"
              size="md"
            />
          </FormGrid>
        </FormSection>

        {/* Tax Exemption Section */}
        <FormSection 
          title="Tax Exemption Information" 
          description="Tax exemption details and special conditions"
          icon={<FileText className="w-5 h-5" />}
        >
          <FormGrid cols={3} gap="gap-6">
            <TextInput
              label="Tax Exemption Number"
              name="taxexemptionno"
              value={formData.taxexemptionno}
              onChange={onChange}
              error={errors.taxexemptionno}
              placeholder="Exemption certificate number"
              size="md"
            />
            <TextInput
              label="Exemption Expiry Date"
              name="taxexemptionexpirydate"
              value={formData.taxexemptionexpirydate}
              onChange={onChange}
              error={errors.taxexemptionexpirydate}
              type="date"
              size="md"
            />
            <CompactSelect
              label="Self Billed Type"
              name="selfbilledtype"
              value={formData.selfbilledtype}
              onChange={onChange}
              error={errors.selfbilledtype}
              options={SuppliertypeOptions}
              placeholder="Select billing type"
              size="md"
            />
          </FormGrid>

          <div className="mt-6">
            <CompactTextArea
              label="Tax Exemption Details"
              name="taxexemptiondetails"
              value={formData.taxexemptiondetails}
              onChange={onChange}
              error={errors.taxexemptiondetails}
              placeholder="Describe tax exemption conditions and applicable scenarios"
              rows={3}
              helpText="Detailed exemption terms and conditions"
            />
          </div>
        </FormSection>

        <FormDivider label="System Access" />

        {/* System Access Section */}
        <FormSection 
          title="System Access" 
          description="Login credentials and account information"
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
              label="Accounts Email"
              name="accountsEmail"
              value={formData.accountsEmail}
              onChange={onChange}
              error={errors.accountsEmail}
              type="email"
              placeholder="accounts@supplier.com"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            />
            <TextInput
              label="Accounts Phone"
              name="accountsPhone"
              value={formData.accountsPhone}
              onChange={onChange}
              error={errors.accountsPhone}
              placeholder="Direct accounts line"
              size="md"
              icon={<Phone className="w-4 h-4" />}
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
            Save Supplier
          </Button>
        </div>
      </ActionBar>
    </div>
  );
}
