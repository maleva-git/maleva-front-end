import * as yup from 'yup';

export const saleOrderValidationSchema = yup.object().shape({
  jobDate: yup.string().required('Job date is required'),
  country: yup.string().required('Country is required'),
  status: yup.string().required('Status is required'),
  customerName: yup.string().required('Customer name is required'),
  jobType: yup.string().required('Job type is required'),
  doDescription: yup.string().required('DO description is required'),
  referenceNo: yup.string().required('Reference number is required'),
  awbNo: yup.string().required('AWB number is required'),
  blCopy: yup.string().required('BL copy is required'),
  cargoType: yup.string().required('Cargo type is required'),
  commodity: yup.string().required('Commodity is required'),
  weight: yup.number().positive('Weight must be positive').required('Weight is required'),
  quantity: yup.number().positive('Quantity must be positive').required('Quantity is required'),
  loadingPort: yup.string().required('Loading port is required'),
  originPort: yup.string().required('Origin port is required'),
  vesselName: yup.string().required('Vessel name is required'),
  type: yup.string().required('Type is required'),
  shippingAgent: yup.string().required('Shipping agent is required'),
  officer1: yup.string().required('Officer 1 is required'),
});
