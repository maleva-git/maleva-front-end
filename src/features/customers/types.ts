export type CustomerStatus = "active" | "inactive";

export interface CustomerQueryParams {
  companyId: number;
  startIndex?: number;
  pageCount?: number;
  keyword?: string;
  column?: string;
}

export interface ApiCustomer {
  id: number | string;
  accountCode?: string;
  customerName?: string;
  companyCode?: string;
  mobileNo?: string;
  city?: string;
  sName?: string;
  termsName?: string;
  active?: number | boolean;
}

export interface CustomerRecord {
  id: number | string;
  accountCode: string;
  customerName: string;
  companyCode: string;
  mobileNo: string;
  city: string;
  currency: string;
  paymentTerms: string;
  status: CustomerStatus;
}

export interface CustomerFormValues {
  customerName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentTerm: string;
  notes: string;
  isActive: boolean;
}

export interface CustomerCreatePayload {
  customerName: string;
  picName: string;
  emailId: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentTerm: string;
  remarks: string;
  active: number;
}

export type CustomerFormErrors = Partial<
  Record<keyof CustomerFormValues, string>
>;
