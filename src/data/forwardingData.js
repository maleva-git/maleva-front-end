// Forwarding Configuration Data
export const forwardingCodeOptions = [
  { value: 'k2', label: 'K2' },
  { value: 'k3', label: 'K3' },
  { value: 'k8', label: 'K6' }
];

export const forwardingStatusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'on_hold', label: 'On Hold' }
];

// Default forwarding row structure
export const defaultForwardingRow = {
  id: Date.now(),
  fw: '',           // Forwarding code (K1, K2, K3, K6)
  rNo: '',          // Reference Number
  smkNo: '',        // Smark Number
  sealBy: '',       // Sealed By (Employee Name)
  bSealBy: '',      // Back Sealed By (Employee Name)
  releaseNc: '',    // Release Number
  fQ: '',           // F1Q (First Quarter)
  s1: '',           // Status 1
  s2: '',           // Status 2
  createdDate: new Date().toISOString().split('T')[0],  // Date created
  status: 'pending' // Forwarding status
};

// Sample forwarding records for reference/testing
// NOTE: You can create UNLIMITED rows - these are just examples
export const sampleForwardingData = [
  {
    id: 1,
    fw: 'k1',
    rNo: 'R.No 1',
    smkNo: 'Smk No 1',
    sealBy: 'Employee 1',
    bSealBy: 'Employee 2',
    releaseNc: 'RELEASE NC',
    fQ: 'F1Q',
    s1: 'S1',
    s2: 'S2',
    createdDate: '2026-02-15',
    status: 'completed'
  },
  {
    id: 2,
    fw: 'k2',
    rNo: 'R.No 2',
    smkNo: 'Smk No 2',
    sealBy: 'Employee 3',
    bSealBy: 'Employee 4',
    releaseNc: 'RELEASE NC',
    fQ: 'F2Q',
    s1: 'S1',
    s2: 'S2',
    createdDate: '2026-02-14',
    status: 'completed'
  },
  {
    id: 3,
    fw: 'k3',
    rNo: 'R.No 3',
    smkNo: 'Smk No 3',
    sealBy: 'Employee 5',
    bSealBy: 'Employee 6',
    releaseNc: 'RELEASE NC',
    fQ: 'F3Q',
    s1: 'S1',
    s2: 'S2',
    createdDate: '2026-02-13',
    status: 'pending'
  },
  {
    id: 4,
    fw: 'k6',
    rNo: 'R.No 4',
    smkNo: 'Smk No 4',
    sealBy: 'Employee 7',
    bSealBy: 'Employee 8',
    releaseNc: 'RELEASE NC',
    fQ: 'F4Q',
    s1: 'S1',
    s2: 'S2',
    createdDate: '2026-02-12',
    status: 'pending'
  },
  {
    id: 5,
    fw: 'k1',
    rNo: 'R.No 5',
    smkNo: 'Smk No 5',
    sealBy: 'Employee 9',
    bSealBy: 'Employee 10',
    releaseNc: 'RELEASE NC',
    fQ: 'F5Q',
    s1: 'S1',
    s2: 'S2',
    createdDate: '2026-02-11',
    status: 'on_hold'
  }
];

// Forwarding columns configuration
export const forwardingTableColumns = [
{ field: 'createdDate', label: 'Date', type: 'date', width: '120px' },
  { field: 'fw', label: 'Fw', type: 'select', options: forwardingCodeOptions, width: '100px' },
  { field: 'rNo', label: 'R.No', type: 'text', width: '120px' },
  { field: 'smkNo', label: 'Smk No', type: 'text', width: '120px' },
  { field: 'sealBy', label: 'SealBy', type: 'text', width: '150px' },
  { field: 'bSealBy', label: 'B.SealBy', type: 'text', width: '150px' },
  { field: 'releaseNc', label: 'RELEASE NC', type: 'text', width: '120px' },
  { field: 'fQ', label: 'F1Q', type: 'text', width: '100px' },
  { field: 's1', label: 'S1', type: 'text', width: '80px' },
  { field: 's2', label: 'S2', type: 'text', width: '80px' },
  { field: 'createdDate', label: 'Date', type: 'date', width: '120px' },
  { field: 'status', label: 'Status', type: 'select', options: forwardingStatusOptions, width: '120px' }
];
