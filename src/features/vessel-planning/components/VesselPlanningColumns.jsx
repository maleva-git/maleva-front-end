import { vesselPlanningService } from '../services/vesselPlanningService';

export const vesselPlanningColumns = [
  {
    accessorKey: 'SortBy',
    header: 'Sort',
    size: 80,
    cell: ({ getValue }) => getValue() || 0,
  },
  {
    accessorKey: 'JobNo',
    header: 'Job No',
    size: 120,
  },
  {
    accessorKey: 'JobDate',
    header: 'Job Date',
    size: 100,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue()),
  },
  {
    accessorKey: 'CustomerName',
    header: 'Customer',
    size: 150,
  },
  {
    accessorKey: 'Origin',
    header: 'Origin',
    size: 120,
  },
  {
    accessorKey: 'Destination',
    header: 'Destination',
    size: 120,
  },
  {
    accessorKey: 'Vessel',
    header: 'Vessel',
    size: 150,
  },
  {
    accessorKey: 'ETA',
    header: 'ETA',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'ETB',
    header: 'ETB',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'ETD',
    header: 'ETD',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'OETA',
    header: 'L.ETA',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'OETB',
    header: 'L.ETB',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'OETD',
    header: 'L.ETD',
    size: 130,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue(), 'dd/MM/yyyy HH:mm'),
  },
  {
    accessorKey: 'JobStatus',
    header: 'Status',
    size: 100,
  },
  {
    accessorKey: 'Commodity',
    header: 'Commodity',
    size: 120,
  },
  {
    accessorKey: 'pkg',
    header: 'PKG',
    size: 80,
  },
  {
    accessorKey: 'Cargo',
    header: 'Cargo',
    size: 120,
  },
  {
    accessorKey: 'PTW',
    header: 'PTW',
    size: 80,
  },
  {
    accessorKey: 'BoardingOfficerName',
    header: 'B.Officer 1',
    size: 150,
  },
  {
    accessorKey: 'BoardingOfficerName1',
    header: 'B.Officer 2',
    size: 150,
  },
  {
    accessorKey: 'AgentName',
    header: 'Agent',
    size: 150,
  },
  {
    accessorKey: 'AgentPhone',
    header: 'Agent Phone',
    size: 120,
  },
  {
    accessorKey: 'Remarks',
    header: 'Remarks',
    size: 200,
  },
];

export const listViewColumns = [
  {
    accessorKey: 'PlaningNo',
    header: 'Planning No',
    size: 150,
  },
  {
    accessorKey: 'PlaningDate',
    header: 'Date',
    size: 120,
    cell: ({ getValue }) => vesselPlanningService.formatDate(getValue()),
  },
  {
    accessorKey: 'EmployeeName',
    header: 'Employee',
    size: 200,
  },
  {
    accessorKey: 'Remarks',
    header: 'Remarks',
    size: 300,
  },
  {
    accessorKey: 'TotalJobs',
    header: 'Total Jobs',
    size: 120,
  },
];
