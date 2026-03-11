export const saleOrderViewColumns = [
  {
    accessorKey: 'SNo',
    header: 'S.No',
    size: 50,
    enableSorting: false,
    cell: ({ row }) => row.index + 1
  },
  {
    accessorKey: 'JobStatus',
    header: 'Status',
    size: 180
  },
  {
    accessorKey: 'BillTime',
    header: 'Bill Time',
    size: 180
  },
  {
    accessorKey: 'CustomerName',
    header: 'Customer Name',
    size: 180
  },
  {
    accessorKey: 'BillNoDisplay',
    header: 'Order No',
    size: 100
  },
  {
    accessorKey: 'EmployeeName',
    header: 'Employee Name',
    size: 180
  },
  {
    accessorKey: 'Loadingvesselname',
    header: 'Loading Vessel',
    size: 180
  },
  {
    accessorKey: 'SETA',
    header: 'L ETA',
    size: 160
  },
  {
    accessorKey: 'SETB',
    header: 'L ETB',
    size: 160
  },
  {
    accessorKey: 'Offvesselname',
    header: 'Off Vessel',
    size: 180
  },
  {
    accessorKey: 'SOETA',
    header: 'O ETA',
    size: 160
  },
  {
    accessorKey: 'SOETB',
    header: 'O ETB',
    size: 160
  },
  {
    accessorKey: 'SPort',
    header: 'PORT',
    size: 120
  },
  {
    accessorKey: 'BillDate',
    header: 'Order Date',
    size: 90,
    cell: ({ getValue }) => {
      const date = getValue();
      return date ? new Date(date).toLocaleDateString('en-GB') : '';
    }
  },
  {
    accessorKey: 'InvoiceNo',
    header: 'Invoice No',
    size: 130
  },
  {
    accessorKey: 'JobType',
    header: 'Job Type',
    size: 130
  },
  {
    accessorKey: 'QNECode',
    header: 'QNE NO',
    size: 120
  },
  {
    accessorKey: 'QNEId',
    header: 'QNE ID',
    size: 120
  },
  {
    accessorKey: 'Remarks',
    header: 'Remarks',
    size: 200
  },
  {
    accessorKey: 'Origin',
    header: 'Origin',
    size: 90
  },
  {
    accessorKey: 'Destination',
    header: 'Destination',
    size: 90
  },
  {
    accessorKey: 'NetAmt',
    header: 'Amount',
    size: 100,
    cell: ({ getValue }) => {
      const amount = getValue();
      return amount ? parseFloat(amount).toFixed(2) : '0.00';
    }
  },
  {
    accessorKey: 'PoF',
    header: 'PO',
    size: 50,
    hidden: true
  },
  {
    accessorKey: 'DoF',
    header: 'DO',
    size: 50
  },
  {
    accessorKey: 'INV',
    header: 'INVOICE',
    size: 50
  },
  {
    accessorKey: 'Preview',
    header: 'Preview',
    size: 80
  },
  {
    accessorKey: 'Attach',
    header: 'Attach',
    size: 80
  },
  {
    accessorKey: 'Imageuplaod',
    header: 'Image Upload',
    size: 80
  },
  {
    accessorKey: 'SPickupDate',
    header: 'Pickup Date',
    size: 80,
    hidden: true
  },
  {
    accessorKey: 'Id',
    header: 'Id',
    size: 50,
    hidden: true
  },
  {
    accessorKey: 'InvoiceId',
    header: 'Invoice Id',
    size: 50,
    hidden: true
  },
  {
    accessorKey: 'JobMasterRefId',
    header: 'Job Master Ref Id',
    size: 50,
    hidden: true
  }
];
