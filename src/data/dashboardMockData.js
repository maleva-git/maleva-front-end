// Dashboard Mock Data for Logistics & Operations
export const dashboardMockData = {
  // Today's Statistics
  todayStats: {
    totalPickups: 47,
    completedPickups: 32,
    pendingPickups: 15,
    totalRevenue: 125400,
    activeVehicles: 23,
    totalVehicles: 28
  },

  // Quick Actions Data
  quickActions: [
    { id: 1, label: 'New Pickup', icon: 'Plus', color: 'bg-blue-500', primary: true },
    { id: 2, label: 'Add Sale Order', icon: 'FileText', color: 'bg-green-500', primary: true },
    { id: 3, label: 'Add Invoice', icon: 'Receipt', color: 'bg-purple-500', primary: true },
    { id: 4, label: 'Schedule Truck', icon: 'Truck', color: 'bg-orange-500', primary: true },
    { id: 5, label: 'View ETA', icon: 'Clock', color: 'bg-indigo-500', primary: false },
    { id: 6, label: 'Truck Maintenance', icon: 'Wrench', color: 'bg-red-500', primary: false },
    { id: 7, label: 'Planning', icon: 'Calendar', color: 'bg-teal-500', primary: false },
    { id: 8, label: 'Quotation', icon: 'DollarSign', color: 'bg-yellow-500', primary: false },
    { id: 9, label: 'Reports', icon: 'BarChart3', color: 'bg-gray-500', primary: false },
    { id: 10, label: 'Excel Export', icon: 'Download', color: 'bg-emerald-500', primary: false },
    { id: 11, label: 'Manage Staff', icon: 'Users', color: 'bg-pink-500', primary: false },
    { id: 12, label: 'Inventory', icon: 'Package', color: 'bg-cyan-500', primary: false }
  ],

  // Today's Pickups - Extended to 25 items
  todayPickups: [
    { id: 'PU001', customer: 'ABC Logistics Sdn Bhd', location: 'Port Klang, Selangor', time: '09:00 AM', status: 'completed', driver: 'Ahmad Rahman', vehicle: 'TRK-001' },
    { id: 'PU002', customer: 'XYZ Transport Co.', location: 'KLIA Cargo, Sepang', time: '11:30 AM', status: 'in-progress', driver: 'Lim Wei Ming', vehicle: 'TRK-003' },
    { id: 'PU003', customer: 'DEF Shipping Ltd', location: 'Johor Port, Johor', time: '02:00 PM', status: 'pending', driver: 'Raj Kumar', vehicle: 'TRK-007' },
    { id: 'PU004', customer: 'GHI Freight Services', location: 'Penang Port, Penang', time: '04:30 PM', status: 'pending', driver: 'Hassan Ali', vehicle: 'TRK-012' },
    { id: 'PU005', customer: 'JKL Maritime Sdn Bhd', location: 'Tanjung Pelepas, Johor', time: '08:15 AM', status: 'completed', driver: 'Chen Wei Lun', vehicle: 'TRK-005' },
    { id: 'PU006', customer: 'MNO Cargo Express', location: 'Kuantan Port, Pahang', time: '10:45 AM', status: 'in-progress', driver: 'Siti Aminah', vehicle: 'TRK-009' },
    { id: 'PU007', customer: 'PQR Logistics Hub', location: 'Bintulu Port, Sarawak', time: '01:15 PM', status: 'pending', driver: 'Kumar Selvam', vehicle: 'TRK-015' },
    { id: 'PU008', customer: 'STU Shipping Co.', location: 'Kemaman Port, Terengganu', time: '03:45 PM', status: 'completed', driver: 'Farid Ismail', vehicle: 'TRK-018' },
    { id: 'PU009', customer: 'VWX Transport Ltd', location: 'Sandakan Port, Sabah', time: '07:30 AM', status: 'in-progress', driver: 'Wong Ah Kow', vehicle: 'TRK-021' },
    { id: 'PU010', customer: 'YZA Freight Sdn Bhd', location: 'Miri Port, Sarawak', time: '09:20 AM', status: 'pending', driver: 'Ibrahim Yusof', vehicle: 'TRK-024' },
    { id: 'PU011', customer: 'BCD Logistics Co.', location: 'Kuching Port, Sarawak', time: '11:00 AM', status: 'completed', driver: 'Tan Siew Lan', vehicle: 'TRK-027' },
    { id: 'PU012', customer: 'EFG Maritime Services', location: 'Kota Kinabalu Port, Sabah', time: '12:30 PM', status: 'in-progress', driver: 'Mohd Azlan', vehicle: 'TRK-030' },
    { id: 'PU013', customer: 'HIJ Cargo Solutions', location: 'Labuan Port, Labuan', time: '02:45 PM', status: 'pending', driver: 'Lee Chong Wei', vehicle: 'TRK-033' },
    { id: 'PU014', customer: 'KLM Transport Hub', location: 'Sibu Port, Sarawak', time: '04:15 PM', status: 'completed', driver: 'Nurul Huda', vehicle: 'TRK-036' },
    { id: 'PU015', customer: 'NOP Shipping Express', location: 'Rajang Port, Sarawak', time: '05:30 PM', status: 'pending', driver: 'Ravi Shankar', vehicle: 'TRK-039' },
    { id: 'PU016', customer: 'QRS Logistics Network', location: 'Mukah Port, Sarawak', time: '06:00 AM', status: 'completed', driver: 'Zainab Ali', vehicle: 'TRK-042' },
    { id: 'PU017', customer: 'TUV Freight Co.', location: 'Tawau Port, Sabah', time: '08:45 AM', status: 'in-progress', driver: 'Lim Boon Heng', vehicle: 'TRK-045' },
    { id: 'PU018', customer: 'WXY Maritime Ltd', location: 'Semporna Port, Sabah', time: '10:15 AM', status: 'pending', driver: 'Ahmad Fauzi', vehicle: 'TRK-048' },
    { id: 'PU019', customer: 'ZAB Transport Services', location: 'Lahad Datu Port, Sabah', time: '01:00 PM', status: 'completed', driver: 'Siti Hajar', vehicle: 'TRK-051' },
    { id: 'PU020', customer: 'CDE Cargo Systems', location: 'Sandakan Bay, Sabah', time: '03:30 PM', status: 'in-progress', driver: 'Raj Patel', vehicle: 'TRK-054' },
    { id: 'PU021', customer: 'FGH Logistics Solutions', location: 'Kudat Port, Sabah', time: '05:00 PM', status: 'pending', driver: 'Aminah Binti Ali', vehicle: 'TRK-057' },
    { id: 'PU022', customer: 'IJK Maritime Express', location: 'Beaufort Port, Sabah', time: '06:30 PM', status: 'completed', driver: 'Chen Ming Hui', vehicle: 'TRK-060' },
    { id: 'PU023', customer: 'LMN Shipping Network', location: 'Papar Port, Sabah', time: '07:15 AM', status: 'in-progress', driver: 'Fatimah Zahra', vehicle: 'TRK-063' },
    { id: 'PU024', customer: 'OPQ Transport Hub', location: 'Tuaran Port, Sabah', time: '09:45 AM', status: 'pending', driver: 'Kumar Devi', vehicle: 'TRK-066' },
    { id: 'PU025', customer: 'RST Freight Solutions', location: 'Ranau Port, Sabah', time: '11:30 AM', status: 'completed', driver: 'Mohd Hafiz', vehicle: 'TRK-069' }
  ],

  // Tomorrow's Pickups - Extended to 30 items
  tomorrowPickups: [
    { id: 'PU026', customer: 'UVW Logistics Sdn Bhd', location: 'Tanjung Pelepas, Johor', time: '08:00 AM', status: 'scheduled', driver: 'Chen Wei Lun', vehicle: 'TRK-005' },
    { id: 'PU027', customer: 'XYZ Cargo Express', location: 'Kuantan Port, Pahang', time: '10:00 AM', status: 'scheduled', driver: 'Siti Aminah', vehicle: 'TRK-009' },
    { id: 'PU028', customer: 'ABC Logistics Hub', location: 'Bintulu Port, Sarawak', time: '01:00 PM', status: 'scheduled', driver: 'Kumar Selvam', vehicle: 'TRK-015' },
    { id: 'PU029', customer: 'DEF Maritime Co.', location: 'Port Dickson, Negeri Sembilan', time: '07:30 AM', status: 'scheduled', driver: 'Lim Siew Choo', vehicle: 'TRK-072' },
    { id: 'PU030', customer: 'GHI Transport Services', location: 'Lumut Port, Perak', time: '09:15 AM', status: 'scheduled', driver: 'Ahmad Nazri', vehicle: 'TRK-075' },
    { id: 'PU031', customer: 'JKL Shipping Express', location: 'Teluk Intan Port, Perak', time: '11:45 AM', status: 'scheduled', driver: 'Nurul Aina', vehicle: 'TRK-078' },
    { id: 'PU032', customer: 'MNO Freight Network', location: 'Kuala Kedah Port, Kedah', time: '02:30 PM', status: 'scheduled', driver: 'Ravi Kumar', vehicle: 'TRK-081' },
    { id: 'PU033', customer: 'PQR Cargo Solutions', location: 'Langkawi Port, Kedah', time: '04:00 PM', status: 'scheduled', driver: 'Siti Zaleha', vehicle: 'TRK-084' },
    { id: 'PU034', customer: 'STU Logistics Ltd', location: 'Alor Setar Port, Kedah', time: '05:45 PM', status: 'scheduled', driver: 'Tan Ah Beng', vehicle: 'TRK-087' },
    { id: 'PU035', customer: 'VWX Maritime Hub', location: 'Kangar Port, Perlis', time: '06:30 AM', status: 'scheduled', driver: 'Fatimah Noor', vehicle: 'TRK-090' },
    { id: 'PU036', customer: 'YZA Transport Co.', location: 'Kuala Perlis Port, Perlis', time: '08:15 AM', status: 'scheduled', driver: 'Mohd Rizal', vehicle: 'TRK-093' },
    { id: 'PU037', customer: 'BCD Shipping Services', location: 'Butterworth Port, Penang', time: '10:30 AM', status: 'scheduled', driver: 'Lee Mei Ling', vehicle: 'TRK-096' },
    { id: 'PU038', customer: 'EFG Freight Express', location: 'Bagan Serai Port, Perak', time: '12:00 PM', status: 'scheduled', driver: 'Ibrahim Hassan', vehicle: 'TRK-099' },
    { id: 'PU039', customer: 'HIJ Cargo Network', location: 'Taiping Port, Perak', time: '01:45 PM', status: 'scheduled', driver: 'Aminah Salleh', vehicle: 'TRK-102' },
    { id: 'PU040', customer: 'KLM Logistics Solutions', location: 'Ipoh Port, Perak', time: '03:15 PM', status: 'scheduled', driver: 'Chen Wai Kit', vehicle: 'TRK-105' },
    { id: 'PU041', customer: 'NOP Maritime Express', location: 'Kampar Port, Perak', time: '04:30 PM', status: 'scheduled', driver: 'Siti Rohani', vehicle: 'TRK-108' },
    { id: 'PU042', customer: 'QRS Transport Hub', location: 'Tapah Port, Perak', time: '06:00 PM', status: 'scheduled', driver: 'Kumar Raj', vehicle: 'TRK-111' },
    { id: 'PU043', customer: 'TUV Shipping Co.', location: 'Slim River Port, Perak', time: '07:30 AM', status: 'scheduled', driver: 'Nurul Hidayah', vehicle: 'TRK-114' },
    { id: 'PU044', customer: 'WXY Freight Services', location: 'Tanjong Malim Port, Perak', time: '09:00 AM', status: 'scheduled', driver: 'Lim Chee Keong', vehicle: 'TRK-117' },
    { id: 'PU045', customer: 'ZAB Cargo Systems', location: 'Rawang Port, Selangor', time: '10:45 AM', status: 'scheduled', driver: 'Ahmad Syafiq', vehicle: 'TRK-120' },
    { id: 'PU046', customer: 'CDE Logistics Network', location: 'Serendah Port, Selangor', time: '12:15 PM', status: 'scheduled', driver: 'Fatimah Yusof', vehicle: 'TRK-123' },
    { id: 'PU047', customer: 'FGH Maritime Solutions', location: 'Kuala Kubu Bharu Port, Selangor', time: '02:00 PM', status: 'scheduled', driver: 'Raj Mohan', vehicle: 'TRK-126' },
    { id: 'PU048', customer: 'IJK Transport Express', location: 'Fraser Hill Port, Pahang', time: '03:30 PM', status: 'scheduled', driver: 'Siti Mariam', vehicle: 'TRK-129' },
    { id: 'PU049', customer: 'LMN Shipping Hub', location: 'Bentong Port, Pahang', time: '05:00 PM', status: 'scheduled', driver: 'Chen Li Ming', vehicle: 'TRK-132' },
    { id: 'PU050', customer: 'OPQ Freight Co.', location: 'Raub Port, Pahang', time: '06:45 PM', status: 'scheduled', driver: 'Mohd Faizal', vehicle: 'TRK-135' },
    { id: 'PU051', customer: 'RST Cargo Express', location: 'Jerantut Port, Pahang', time: '08:00 AM', status: 'scheduled', driver: 'Aminah Rahman', vehicle: 'TRK-138' },
    { id: 'PU052', customer: 'UVW Logistics Services', location: 'Temerloh Port, Pahang', time: '09:30 AM', status: 'scheduled', driver: 'Lim Boon Seng', vehicle: 'TRK-141' },
    { id: 'PU053', customer: 'XYZ Maritime Network', location: 'Mentakab Port, Pahang', time: '11:00 AM', status: 'scheduled', driver: 'Siti Khadijah', vehicle: 'TRK-144' },
    { id: 'PU054', customer: 'ABC Transport Solutions', location: 'Maran Port, Pahang', time: '12:30 PM', status: 'scheduled', driver: 'Kumar Singh', vehicle: 'TRK-147' },
    { id: 'PU055', customer: 'DEF Shipping Network', location: 'Pekan Port, Pahang', time: '02:15 PM', status: 'scheduled', driver: 'Nurul Syazana', vehicle: 'TRK-150' }
  ],

  // Vessel ETA / Arrivals
  vesselArrivals: [
    {
      id: 'VSL001',
      vesselName: 'MSC MAYA',
      origin: 'Singapore',
      destination: 'Port Klang',
      eta: '2024-01-15 14:30',
      status: 'on-time',
      cargo: 'Electronics & Machinery'
    },
    {
      id: 'VSL002',
      vesselName: 'EVERGREEN STAR',
      origin: 'Shanghai',
      destination: 'Tanjung Pelepas',
      eta: '2024-01-16 08:00',
      status: 'delayed',
      cargo: 'Automotive Parts'
    },
    {
      id: 'VSL003',
      vesselName: 'COSCO HARMONY',
      origin: 'Hong Kong',
      destination: 'Penang Port',
      eta: '2024-01-16 16:45',
      status: 'early',
      cargo: 'Textiles & Garments'
    }
  ],

  // Pending Jobs
  pendingJobs: [
    {
      id: 'JOB001',
      type: 'Delivery',
      customer: 'Tech Solutions Sdn Bhd',
      priority: 'high',
      dueDate: '2024-01-15',
      assignedTo: 'Team Alpha',
      description: 'Urgent server equipment delivery'
    },
    {
      id: 'JOB002',
      type: 'Pickup',
      customer: 'Fashion Retail Co.',
      priority: 'medium',
      dueDate: '2024-01-16',
      assignedTo: 'Team Beta',
      description: 'Seasonal inventory collection'
    },
    {
      id: 'JOB003',
      type: 'Maintenance',
      customer: 'Internal',
      priority: 'low',
      dueDate: '2024-01-17',
      assignedTo: 'Maintenance Team',
      description: 'Routine vehicle inspection'
    }
  ],

  // Fleet Status
  fleetStatus: [
    {
      id: 'TRK-001',
      driver: 'Ahmad Rahman',
      status: 'active',
      location: 'Port Klang',
      lastUpdate: '10 mins ago',
      fuelLevel: 85,
      nextMaintenance: '2024-01-20'
    },
    {
      id: 'TRK-003',
      driver: 'Lim Wei Ming',
      status: 'active',
      location: 'KLIA Cargo',
      lastUpdate: '5 mins ago',
      fuelLevel: 62,
      nextMaintenance: '2024-01-18'
    },
    {
      id: 'TRK-007',
      driver: 'Raj Kumar',
      status: 'idle',
      location: 'Depot',
      lastUpdate: '1 hour ago',
      fuelLevel: 95,
      nextMaintenance: '2024-01-25'
    },
    {
      id: 'TRK-012',
      driver: 'Hassan Ali',
      status: 'maintenance',
      location: 'Service Center',
      lastUpdate: '3 hours ago',
      fuelLevel: 40,
      nextMaintenance: 'In Progress'
    }
  ],

  // Employee Performance - Extended to 35 employees
  employeePerformance: [
    { id: 'EMP001', name: 'Ahmad Rahman', role: 'Senior Driver', completedJobs: 156, rating: 4.8, onTimeDelivery: 98, monthlyTarget: 160 },
    { id: 'EMP002', name: 'Lim Wei Ming', role: 'Driver', completedJobs: 142, rating: 4.6, onTimeDelivery: 95, monthlyTarget: 150 },
    { id: 'EMP003', name: 'Siti Aminah', role: 'Operations Coordinator', completedJobs: 89, rating: 4.9, onTimeDelivery: 99, monthlyTarget: 90 },
    { id: 'EMP004', name: 'Kumar Selvam', role: 'Driver', completedJobs: 134, rating: 4.5, onTimeDelivery: 92, monthlyTarget: 140 },
    { id: 'EMP005', name: 'Chen Wei Lun', role: 'Senior Driver', completedJobs: 148, rating: 4.7, onTimeDelivery: 96, monthlyTarget: 155 },
    { id: 'EMP006', name: 'Fatimah Noor', role: 'Driver', completedJobs: 128, rating: 4.4, onTimeDelivery: 91, monthlyTarget: 135 },
    { id: 'EMP007', name: 'Raj Patel', role: 'Operations Manager', completedJobs: 95, rating: 4.9, onTimeDelivery: 99, monthlyTarget: 100 },
    { id: 'EMP008', name: 'Nurul Huda', role: 'Driver', completedJobs: 139, rating: 4.6, onTimeDelivery: 94, monthlyTarget: 145 },
    { id: 'EMP009', name: 'Tan Siew Lan', role: 'Senior Driver', completedJobs: 152, rating: 4.8, onTimeDelivery: 97, monthlyTarget: 158 },
    { id: 'EMP010', name: 'Mohd Azlan', role: 'Driver', completedJobs: 131, rating: 4.3, onTimeDelivery: 89, monthlyTarget: 138 },
    { id: 'EMP011', name: 'Lee Chong Wei', role: 'Logistics Coordinator', completedJobs: 87, rating: 4.7, onTimeDelivery: 96, monthlyTarget: 92 },
    { id: 'EMP012', name: 'Zainab Ali', role: 'Driver', completedJobs: 144, rating: 4.5, onTimeDelivery: 93, monthlyTarget: 148 },
    { id: 'EMP013', name: 'Lim Boon Heng', role: 'Senior Driver', completedJobs: 159, rating: 4.9, onTimeDelivery: 98, monthlyTarget: 162 },
    { id: 'EMP014', name: 'Ahmad Fauzi', role: 'Driver', completedJobs: 126, rating: 4.2, onTimeDelivery: 88, monthlyTarget: 132 },
    { id: 'EMP015', name: 'Siti Hajar', role: 'Operations Assistant', completedJobs: 78, rating: 4.6, onTimeDelivery: 95, monthlyTarget: 82 },
    { id: 'EMP016', name: 'Aminah Binti Ali', role: 'Driver', completedJobs: 137, rating: 4.4, onTimeDelivery: 90, monthlyTarget: 142 },
    { id: 'EMP017', name: 'Chen Ming Hui', role: 'Senior Driver', completedJobs: 154, rating: 4.8, onTimeDelivery: 97, monthlyTarget: 159 },
    { id: 'EMP018', name: 'Fatimah Zahra', role: 'Driver', completedJobs: 129, rating: 4.3, onTimeDelivery: 87, monthlyTarget: 136 },
    { id: 'EMP019', name: 'Kumar Devi', role: 'Logistics Specialist', completedJobs: 91, rating: 4.7, onTimeDelivery: 96, monthlyTarget: 95 },
    { id: 'EMP020', name: 'Mohd Hafiz', role: 'Driver', completedJobs: 141, rating: 4.5, onTimeDelivery: 92, monthlyTarget: 146 },
    { id: 'EMP021', name: 'Lim Siew Choo', role: 'Senior Driver', completedJobs: 157, rating: 4.9, onTimeDelivery: 99, monthlyTarget: 161 },
    { id: 'EMP022', name: 'Ahmad Nazri', role: 'Driver', completedJobs: 133, rating: 4.4, onTimeDelivery: 91, monthlyTarget: 139 },
    { id: 'EMP023', name: 'Nurul Aina', role: 'Operations Coordinator', completedJobs: 85, rating: 4.8, onTimeDelivery: 98, monthlyTarget: 88 },
    { id: 'EMP024', name: 'Ravi Kumar', role: 'Driver', completedJobs: 145, rating: 4.6, onTimeDelivery: 94, monthlyTarget: 149 },
    { id: 'EMP025', name: 'Siti Zaleha', role: 'Senior Driver', completedJobs: 151, rating: 4.7, onTimeDelivery: 96, monthlyTarget: 156 },
    { id: 'EMP026', name: 'Tan Ah Beng', role: 'Driver', completedJobs: 127, rating: 4.2, onTimeDelivery: 86, monthlyTarget: 134 },
    { id: 'EMP027', name: 'Mohd Rizal', role: 'Logistics Manager', completedJobs: 93, rating: 4.9, onTimeDelivery: 99, monthlyTarget: 97 },
    { id: 'EMP028', name: 'Lee Mei Ling', role: 'Driver', completedJobs: 138, rating: 4.5, onTimeDelivery: 93, monthlyTarget: 143 },
    { id: 'EMP029', name: 'Ibrahim Hassan', role: 'Senior Driver', completedJobs: 153, rating: 4.8, onTimeDelivery: 97, monthlyTarget: 158 },
    { id: 'EMP030', name: 'Aminah Salleh', role: 'Driver', completedJobs: 130, rating: 4.3, onTimeDelivery: 89, monthlyTarget: 137 },
    { id: 'EMP031', name: 'Chen Wai Kit', role: 'Operations Assistant', completedJobs: 81, rating: 4.6, onTimeDelivery: 95, monthlyTarget: 85 },
    { id: 'EMP032', name: 'Siti Rohani', role: 'Driver', completedJobs: 140, rating: 4.4, onTimeDelivery: 91, monthlyTarget: 145 },
    { id: 'EMP033', name: 'Nurul Hidayah', role: 'Senior Driver', completedJobs: 155, rating: 4.9, onTimeDelivery: 98, monthlyTarget: 160 },
    { id: 'EMP034', name: 'Lim Chee Keong', role: 'Driver', completedJobs: 132, rating: 4.3, onTimeDelivery: 88, monthlyTarget: 138 },
    { id: 'EMP035', name: 'Ahmad Syafiq', role: 'Logistics Coordinator', completedJobs: 88, rating: 4.7, onTimeDelivery: 96, monthlyTarget: 92 }
  ],

  // Sales Data
  weeklySales: [
    { day: 'Mon', amount: 18500 },
    { day: 'Tue', amount: 22300 },
    { day: 'Wed', amount: 19800 },
    { day: 'Thu', amount: 25600 },
    { day: 'Fri', amount: 21400 },
    { day: 'Sat', amount: 16200 },
    { day: 'Sun', amount: 12800 }
  ],

  monthlySales: [
    { month: 'Jan', amount: 485000 },
    { month: 'Feb', amount: 520000 },
    { month: 'Mar', amount: 478000 },
    { month: 'Apr', amount: 612000 },
    { month: 'May', amount: 595000 },
    { month: 'Jun', amount: 680000 }
  ]
};

export default dashboardMockData;