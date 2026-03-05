// EmployeeForm.jsx - Luxury Enterprise ERP Design
import TextInput from '../../components/ui/TextInput';
import CompactSelect from '../../components/ui/CompactSelect';
import CompactTextArea from '../../components/ui/CompactTextArea';
import CompactCheckbox from '../../components/ui/CompactCheckbox';
import { FormSection, FormGrid, ActionBar, PageHeader, FormDivider } from '../../components/ui/FormLayout';
import { Button } from '../../components/common/Button';
import { Save, RefreshCw, FileText, X, User, MapPin, Phone, Building2, Briefcase, Settings, Shield, Key, Calendar, DollarSign, Users, Mail } from 'lucide-react';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

const maritalStatusOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' }
];

const departmentOptions = [
  { value: 'hr', label: 'Human Resources' },
  { value: 'finance', label: 'Finance' },
  { value: 'it', label: 'Information Technology' },
  { value: 'operations', label: 'Operations' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'legal', label: 'Legal' },
  { value: 'admin', label: 'Administration' }
];

const employmentTypeOptions = [
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
  { value: 'contract', label: 'Contract' },
  { value: 'intern', label: 'Intern' },
  { value: 'consultant', label: 'Consultant' }
];

const roleOptions = [
  { value: 'admin', label: 'Administrator' },
  { value: 'manager', label: 'Manager' },
  { value: 'employee', label: 'Employee' },
  { value: 'hr', label: 'HR Personnel' },
  { value: 'finance', label: 'Finance Officer' },
  { value: 'viewer', label: 'Viewer Only' }
];

const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  { value: 'SG', label: 'Singapore' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'IN', label: 'India' }
];

export default function EmployeeForm({ formData, errors, onChange, onToggleActive, onSave, onUpdate, onDocuments, onCancel }) {
  return (
    <div className="min-h-full bg-gray-50">
      {/* Premium Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Add New Employee</h1>
              <p className="text-gray-500 mt-1 text-sm lg:text-base">Create comprehensive employee profile with complete personal and employment information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 space-y-8">
        {/* Personal Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                <p className="text-sm text-gray-500">Basic personal details and contact information</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TextInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                error={errors.firstName}
                placeholder="Enter first name"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                error={errors.lastName}
                placeholder="Enter last name"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
              <TextInput
                label="Employee ID"
                name="employeeId"
                value={formData.employeeId}
                onChange={onChange}
                error={errors.employeeId}
                placeholder="EMP001"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                error={errors.email}
                placeholder="employee@company.com"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
              <TextInput
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                error={errors.phone}
                placeholder="+1 (555) 123-4567"
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
              <TextInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={onChange}
                error={errors.dateOfBirth}
                required
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CompactSelect
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={onChange}
                error={errors.gender}
                options={genderOptions}
                placeholder="Select gender"
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
              <CompactSelect
                label="Marital Status"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={onChange}
                error={errors.maritalStatus}
                options={maritalStatusOptions}
                placeholder="Select marital status"
                className="focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Address Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Address Information</h2>
                <p className="text-sm text-gray-500">Residential address and location details</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <CompactTextArea
              label="Street Address"
              name="address"
              value={formData.address}
              onChange={onChange}
              error={errors.address}
              placeholder="Enter complete address"
              rows={3}
              required
              className="focus:ring-emerald-500 focus:border-emerald-500"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TextInput
                label="City"
                name="city"
                value={formData.city}
                onChange={onChange}
                error={errors.city}
                placeholder="City name"
                required
                className="focus:ring-emerald-500 focus:border-emerald-500"
              />
              <TextInput
                label="State/Province"
                name="state"
                value={formData.state}
                onChange={onChange}
                error={errors.state}
                placeholder="State or province"
                required
                className="focus:ring-emerald-500 focus:border-emerald-500"
              />
              <TextInput
                label="ZIP/Postal Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={onChange}
                error={errors.zipCode}
                placeholder="ZIP code"
                required
                className="focus:ring-emerald-500 focus:border-emerald-500"
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
                className="focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Employment Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Employment Information</h2>
                <p className="text-sm text-gray-500">Job details, department, and compensation information</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CompactSelect
                label="Department"
                name="department"
                value={formData.department}
                onChange={onChange}
                error={errors.department}
                options={departmentOptions}
                placeholder="Select department"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
              <TextInput
                label="Position/Title"
                name="position"
                value={formData.position}
                onChange={onChange}
                error={errors.position}
                placeholder="Job title"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
              <CompactSelect
                label="Employment Type"
                name="employmentType"
                value={formData.employmentType}
                onChange={onChange}
                error={errors.employmentType}
                options={employmentTypeOptions}
                placeholder="Select type"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TextInput
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={onChange}
                error={errors.startDate}
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
              <TextInput
                label="Annual Salary"
                name="salary"
                value={formData.salary}
                onChange={onChange}
                error={errors.salary}
                placeholder="50000"
                required
                className="focus:ring-blue-500 focus:border-blue-500"
              />
              <TextInput
                label="Reporting Manager"
                name="manager"
                value={formData.manager}
                onChange={onChange}
                error={errors.manager}
                placeholder="Manager name"
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <TextInput
              label="Work Location"
              name="workLocation"
              value={formData.workLocation}
              onChange={onChange}
              error={errors.workLocation}
              placeholder="Office location or remote"
              className="focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Account Details Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Key className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
                <p className="text-sm text-gray-500">System access credentials and permissions</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Username"
                name="username"
                value={formData.username}
                onChange={onChange}
                error={errors.username}
                placeholder="System username"
                required
                className="focus:ring-purple-500 focus:border-purple-500"
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={onChange}
                error={errors.password}
                placeholder="Secure password"
                required
                className="focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <CompactSelect
              label="System Role"
              name="role"
              value={formData.role}
              onChange={onChange}
              error={errors.role}
              options={roleOptions}
              placeholder="Select role"
              required
              className="focus:ring-purple-500 focus:border-purple-500"
            />
            
            <div className="pt-4">
              <CompactCheckbox
                label="Active Employee"
                name="active"
                checked={formData.active}
                onChange={onToggleActive}
                className="text-purple-600"
              />
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Bank Details</h2>
                <p className="text-sm text-gray-500">Banking information for salary and payments</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={onChange}
                error={errors.bankName}
                placeholder="Enter bank name"
                className="focus:ring-green-500 focus:border-green-500"
              />
              <TextInput
                label="Account Holder Name"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={onChange}
                error={errors.accountHolderName}
                placeholder="Full name as per bank records"
                className="focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={onChange}
                error={errors.accountNumber}
                placeholder="Bank account number"
                className="focus:ring-green-500 focus:border-green-500"
              />
              <TextInput
                label="Routing Number / IFSC Code"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={onChange}
                error={errors.routingNumber}
                placeholder="Bank routing/IFSC code"
                className="focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="SWIFT Code"
                name="swiftCode"
                value={formData.swiftCode}
                onChange={onChange}
                error={errors.swiftCode}
                placeholder="International SWIFT code"
                className="focus:ring-green-500 focus:border-green-500"
              />
              <CompactSelect
                label="Account Type"
                name="accountType"
                value={formData.accountType}
                onChange={onChange}
                error={errors.accountType}
                options={[
                  { value: 'savings', label: 'Savings Account' },
                  { value: 'checking', label: 'Checking Account' },
                  { value: 'current', label: 'Current Account' }
                ]}
                placeholder="Select account type"
                className="focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <CompactTextArea
              label="Bank Address"
              name="bankAddress"
              value={formData.bankAddress}
              onChange={onChange}
              error={errors.bankAddress}
              placeholder="Complete bank branch address"
              rows={2}
              className="focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
                <p className="text-sm text-gray-500">Employee documents and attachments</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TextInput
                label="Profile Photo"
                name="profilePhoto"
                type="file"
                value={formData.profilePhoto}
                onChange={onChange}
                error={errors.profilePhoto}
                accept="image/*"
                className="focus:ring-orange-500 focus:border-orange-500"
              />
              <TextInput
                label="Resume/CV"
                name="resume"
                type="file"
                value={formData.resume}
                onChange={onChange}
                error={errors.resume}
                accept=".pdf,.doc,.docx"
                className="focus:ring-orange-500 focus:border-orange-500"
              />
              <TextInput
                label="ID Document"
                name="idDocument"
                type="file"
                value={formData.idDocument}
                onChange={onChange}
                error={errors.idDocument}
                accept=".pdf,.jpg,.jpeg,.png"
                className="focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Action Bar */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={onCancel}
              className="text-gray-600 hover:text-gray-800"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button 
              variant="outline" 
              onClick={onDocuments}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <FileText className="w-4 h-4 mr-2" />
              Documents
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="secondary" 
              onClick={onUpdate}
              className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Update
            </Button>
            <Button 
              variant="primary" 
              onClick={onSave} 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-base font-semibold shadow-lg"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Employee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}