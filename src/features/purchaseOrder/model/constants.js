// Purchase Order Constants

export const BILL_STATUS = [
  'ASSIGNED',
  'RECEIPT RECEIVED',
  'RECEIPT UPLOADED',
  'INVOICE MADE',
  'PAYMENT COMPLETED',
  'Cancel'
];

export const BILL_DESCRIPTIONS = [
  'BREAKDOWN',
  'REPAIR',
  'SERVICE',
  'SPARE PARTS'
];

export const SALE_TYPES = [
  'CREDIT',
  'CASH'
];

export const billStatusOptions = BILL_STATUS.map(status => ({
  value: status,
  label: status
}));

export const billDescriptionOptions = BILL_DESCRIPTIONS.map(desc => ({
  value: desc,
  label: desc
}));

export const saleTypeOptions = SALE_TYPES.map(type => ({
  value: type,
  label: type
}));
