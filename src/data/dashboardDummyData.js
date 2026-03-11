// Dashboard Dummy Data for all roles

export const superAdminDummyData = {
  metrics: [
    { title: 'Total Users', value: '12,456', change: '+2.5%', changeType: 'positive', icon: 'Users', color: 'blue', subtitle: '4,890 active' },
    { title: 'Total Orders', value: '5,678', change: '+12.3%', changeType: 'positive', icon: 'Package', color: 'green', subtitle: '2,345 pending' },
    { title: 'Revenue', value: '$1.23M', change: '+8.7%', changeType: 'positive', icon: 'TrendingUp', color: 'purple', subtitle: 'This month' },
    { title: 'System Health', value: '98.5%', change: '+0.2%', changeType: 'positive', icon: 'BarChart3', color: 'indigo', subtitle: 'Uptime' },
  ],
  activities: [
    { title: 'New User Registration', description: 'John Doe registered as Customer', status: 'completed', time: '2 hours ago' },
    { title: 'Large Order Placed', description: 'Order #ORD-2024-5678 worth $45,500', status: 'completed', time: '4 hours ago' },
    { title: 'Payment Processing', description: 'Processing 234 invoices', status: 'pending', time: 'In progress' },
    { title: 'System Backup', description: 'Database backup completed', status: 'completed', time: '1 hour ago' },
    { title: 'API Rate Limit Warning', description: '5 IPs approaching rate limits', status: 'warning', time: '30 mins ago' }
  ],
  topCustomers: [
    { name: 'Acme Corporation', subtitle: '342 orders', value: '$125,450', badge: 'Premium', badgeColor: 'var(--color-purple-100)', badgeTextColor: 'var(--color-purple-700)' },
    { name: 'Global Logistics Inc', subtitle: '298 orders', value: '$98,230', badge: 'Gold', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Tech Solutions Ltd', subtitle: '156 orders', value: '$67,890', badge: 'Silver', badgeColor: 'var(--color-gray-300)', badgeTextColor: 'var(--color-gray-700)' },
    { name: 'Enterprise Global', subtitle: '123 orders', value: '$45,600', badge: 'Active', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' }
  ],
  systemStatus: [
    { name: 'Server Status', count: 48, color: 'var(--color-success-500)' },
    { name: 'Maintenance', count: 2, color: 'var(--color-warning-500)' },
    { name: 'Offline', count: 0, color: 'var(--color-danger-500)' }
  ]
};

export const adminDummyData = {
  metrics: [
    { title: 'Total Customers', value: '4,567', change: '+5.2%', changeType: 'positive', icon: 'Users', color: 'blue', subtitle: '3,210 active' },
    { title: 'Pending Orders', value: '234', change: '-8.5%', changeType: 'positive', icon: 'Package', color: 'orange', subtitle: 'Urgent: 12' },
    { title: 'Monthly Revenue', value: '$456,789', change: '+15.3%', changeType: 'positive', icon: 'TrendingUp', color: 'green', subtitle: 'Target: $500k' },
    { title: 'Order Fulfillment', value: '94.2%', change: '+2.1%', changeType: 'positive', icon: 'BarChart3', color: 'purple', subtitle: 'On-time rate' },
  ],
  recentOrders: [
    { name: 'Order #ORD-2024-0001', subtitle: 'Acme Corp - 45 items', value: '$12,450', badge: 'Shipped', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Order #ORD-2024-0002', subtitle: 'Global Logistics - 78 items', value: '$23,890', badge: 'Processing', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'Order #ORD-2024-0003', subtitle: 'Tech Solutions - 12 items', value: '$8,760', badge: 'Pending', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Order #ORD-2024-0004', subtitle: 'Enterprise Global - 56 items', value: '$34,560', badge: 'Confirmed', badgeColor: 'var(--color-purple-100)', badgeTextColor: 'var(--color-purple-700)' }
  ],
  activities: [
    { title: 'Order Confirmation', description: 'Order #ORD-2024-0001 confirmed by customer', status: 'completed', time: '30 mins ago' },
    { title: 'Shipment Prepared', description: 'Warehouse prepared 234 items for shipment', status: 'completed', time: '1 hour ago' },
    { title: 'Payment Received', description: 'Invoice #INV-2024-0567 paid - $45,500', status: 'completed', time: '2 hours ago' },
    { title: 'New Customer Onboarded', description: 'TechStart Inc approved and activated', status: 'completed', time: '4 hours ago' }
  ]
};

export const customerServiceDummyData = {
  metrics: [
    { title: 'Open Tickets', value: '87', change: '-12.3%', changeType: 'positive', icon: 'MessageSquare', color: 'blue', subtitle: 'Avg resolution: 4hrs' },
    { title: 'Customer Inquiries', value: '234', change: '+3.2%', changeType: 'positive', icon: 'Users', color: 'green', subtitle: '156 resolved today' },
    { title: 'Satisfaction Rate', value: '94.5%', change: '+2.1%', changeType: 'positive', icon: 'Star', color: 'orange', subtitle: 'Last month: 92.4%' },
    { title: 'Response Time', value: '2.3 min', change: '-0.5min', changeType: 'positive', icon: 'Clock', color: 'purple', subtitle: 'Average' },
  ],
  supportTickets: [
    { name: 'Ticket #TK-0001', subtitle: 'Billing Issue - John Doe', value: 'High', badge: 'Urgent', badgeColor: 'var(--color-danger-100)', badgeTextColor: 'var(--color-danger-700)' },
    { name: 'Ticket #TK-0002', subtitle: 'Technical Support - Acme Corp', value: 'Medium', badge: 'In Progress', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'Ticket #TK-0003', subtitle: 'Return Request - Sarah Smith', value: 'Medium', badge: 'Pending', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Ticket #TK-0004', subtitle: 'General Inquiry - Mark Johnson', value: 'Low', badge: 'Resolved', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' }
  ],
  activities: [
    { title: 'Ticket Resolved', description: 'Ticket #TK-0005 marked as resolved', status: 'completed', time: '15 mins ago' },
    { title: 'Customer Escalation', description: 'Ticket #TK-0006 escalated to senior support', status: 'warning', time: '30 mins ago' },
    { title: 'Feedback Received', description: '5-star review from customer on Order #ORD-2024-0001', status: 'completed', time: '1 hour ago' }
  ]
};

export const operationAdminDummyData = {
  metrics: [
    { title: 'Active Shipments', value: '567', change: '+8.9%', changeType: 'positive', icon: 'Truck', color: 'blue', subtitle: '234 in transit' },
    { title: 'Delivery Success', value: '96.7%', change: '+1.2%', changeType: 'positive', icon: 'CheckCircle', color: 'green', subtitle: 'On-time rate' },
    { title: 'Fleet Utilization', value: '87.5%', change: '+5.3%', changeType: 'positive', icon: 'Zap', color: 'purple', subtitle: 'Capacity usage' },
    { title: 'Avg Delivery Time', value: '4.2 hrs', change: '-0.3hrs', changeType: 'positive', icon: 'Clock', color: 'orange', subtitle: 'Per shipment' },
  ],
  shipmentStatus: [
    { name: 'Delivered', count: 456, color: 'var(--color-success-500)' },
    { name: 'In Transit', count: 89, color: 'var(--color-primary-500)' },
    { name: 'Pending Pickup', count: 22, color: 'var(--color-warning-500)' }
  ],
  recentShipments: [
    { name: 'SHP-2024-0001', subtitle: 'Acme Corp → New York, NY', value: 'In Transit', badge: '4.2 hrs', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'SHP-2024-0002', subtitle: 'Global Logistics → Los Angeles, CA', value: 'Delivered', badge: '3.8 hrs', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'SHP-2024-0003', subtitle: 'Tech Solutions → Chicago, IL', value: 'In Transit', badge: '2.1 hrs', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'SHP-2024-0004', subtitle: 'Enterprise Global → Boston, MA', value: 'Pending', badge: 'Pickup', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' }
  ]
};

export const warehouseDummyData = {
  metrics: [
    { title: 'Total Inventory', value: '45,678', change: '+3.2%', changeType: 'positive', icon: 'Package', color: 'blue', subtitle: 'Units in stock' },
    { title: 'Low Stock Items', value: '234', change: '-8.5%', changeType: 'positive', icon: 'AlertTriangle', color: 'orange', subtitle: 'Requires attention' },
    { title: 'Warehouse Capacity', value: '78.5%', change: '+2.1%', changeType: 'positive', icon: 'Zap', color: 'green', subtitle: 'Space used' },
    { title: 'Processing Time', value: '12.3 min', change: '-1.2min', changeType: 'positive', icon: 'Clock', color: 'purple', subtitle: 'Per order' },
  ],
  inventoryStatus: [
    { name: 'Available', count: 45123, color: 'var(--color-success-500)' },
    { name: 'Reserved', count: 445, color: 'var(--color-primary-500)' },
    { name: 'Damaged', count: 110, color: 'var(--color-danger-500)' }
  ],
  stockAlerts: [
    { name: 'Product SKU-001', subtitle: 'Current stock: 45 units', value: 'Critical', badge: 'Order Now', badgeColor: 'var(--color-danger-100)', badgeTextColor: 'var(--color-danger-700)' },
    { name: 'Product SKU-045', subtitle: 'Current stock: 123 units', value: 'Low', badge: 'Warning', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Product SKU-089', subtitle: 'Current stock: 567 units', value: 'Medium', badge: 'Monitor', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'Product SKU-234', subtitle: 'Current stock: 2,345 units', value: 'Good', badge: 'Optimal', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' }
  ]
};

export const driverDummyData = {
  metrics: [
    { title: 'My Deliveries', value: '23', change: '+4 today', changeType: 'positive', icon: 'Truck', color: 'blue', subtitle: '18 completed' },
    { title: 'Current Route', value: '45.2 mi', change: '+15% vs avg', changeType: 'positive', icon: 'Map', color: 'green', subtitle: 'Distance' },
    { title: 'Rating', value: '4.8', change: '+0.2 pts', changeType: 'positive', icon: 'Star', color: 'orange', subtitle: 'Out of 5' },
    { title: 'Earnings', value: '$1,234', change: '+$234 vs avg', changeType: 'positive', icon: 'DollarSign', color: 'purple', subtitle: 'This week' },
  ],
  todayDeliveries: [
    { name: 'Delivery #D-0001', subtitle: '123 Main St, NY - John Doe', value: 'Completed', badge: '2.1 mi', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Delivery #D-0002', subtitle: '456 Oak Ave, NY - Acme Corp', value: 'In Progress', badge: '3.5 mi', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'Delivery #D-0003', subtitle: '789 Pine Rd, NY - Tech Solutions', value: 'Next', badge: '4.2 mi', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Delivery #D-0004', subtitle: '321 Elm St, NY - Global Logistics', value: 'Scheduled', badge: '6.8 mi', badgeColor: 'var(--color-gray-100)', badgeTextColor: 'var(--color-gray-700)' }
  ],
  activities: [
    { title: 'Delivery Completed', description: 'Delivery #D-0001 - Customer signed receipt', status: 'completed', time: '2 mins ago' },
    { title: 'Route Update', description: 'Traffic detected, rerouting to alternate route', status: 'warning', time: '15 mins ago' },
    { title: 'Delivery Completed', description: 'Delivery #D-0023 - Photo captured', status: 'completed', time: '1 hour ago' }
  ]
};

export const accountsDummyData = {
  metrics: [
    { title: 'Total Revenue', value: '$1.23M', change: '+8.5%', changeType: 'positive', icon: 'TrendingUp', color: 'green', subtitle: 'This month' },
    { title: 'Pending Invoices', value: '45', change: '-3', changeType: 'positive', icon: 'FileText', color: 'orange', subtitle: 'Worth $234K' },
    { title: 'Accounts Receivable', value: '$567,890', change: '+2.3%', changeType: 'positive', icon: 'DollarSign', color: 'blue', subtitle: 'Outstanding' },
    { title: 'Collection Rate', value: '94.2%', change: '+1.5%', changeType: 'positive', icon: 'BarChart3', color: 'purple', subtitle: 'Success rate' },
  ],
  recentInvoices: [
    { name: 'Invoice #INV-2024-001', subtitle: 'Acme Corp - Due 2024-03-20', value: '$12,450', badge: 'Paid', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Invoice #INV-2024-002', subtitle: 'Global Logistics - Due 2024-03-15', value: '$23,890', badge: 'Due Soon', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'Invoice #INV-2024-003', subtitle: 'Tech Solutions - Due 2024-04-10', value: '$8,760', badge: 'Pending', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'Invoice #INV-2024-004', subtitle: 'Enterprise Global - Overdue', value: '$34,560', badge: 'Overdue', badgeColor: 'var(--color-danger-100)', badgeTextColor: 'var(--color-danger-700)' }
  ],
  paymentStatus: [
    { name: 'Paid', count: 456, color: 'var(--color-success-500)' },
    { name: 'Pending', count: 89, color: 'var(--color-warning-500)' },
    { name: 'Overdue', count: 12, color: 'var(--color-danger-500)' }
  ]
};

export const hrDummyData = {
  metrics: [
    { title: 'Total Employees', value: '234', change: '+8', changeType: 'positive', icon: 'Users', color: 'blue', subtitle: 'Active employees' },
    { title: 'Attendance Rate', value: '96.5%', change: '+1.2%', changeType: 'positive', icon: 'CheckCircle', color: 'green', subtitle: 'This month' },
    { title: 'Open Positions', value: '12', change: '+3', changeType: 'positive', icon: 'Briefcase', color: 'orange', subtitle: 'Hiring in progress' },
    { title: 'Employee Satisfaction', value: '4.5', change: '+0.3', changeType: 'positive', icon: 'Heart', color: 'purple', subtitle: 'Out of 5' },
  ],
  employeeList: [
    { name: 'John Doe', subtitle: 'Senior Manager - Engineering', value: 'Full-time', badge: 'Active', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Sarah Smith', subtitle: 'HR Specialist - Human Resources', value: 'Full-time', badge: 'Active', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Mike Johnson', subtitle: 'Content Writer - Marketing', value: 'Part-time', badge: 'Active', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' },
    { name: 'Emily Brown', subtitle: 'Intern - Engineering', value: 'Intern', badge: 'On Leave', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' }
  ],
  activities: [
    { title: 'New Hire Onboarded', description: 'Alex Martinez joined Engineering team', status: 'completed', time: '2 days ago' },
    { title: 'Leave Approved', description: 'Sarah Smith approved for 5-day vacation', status: 'completed', time: '1 week ago' },
    { title: 'Performance Review', description: 'Quarterly review completed for 45 employees', status: 'pending', time: 'This week' }
  ]
};

export const maintenanceDummyData = {
  metrics: [
    { title: 'Work Orders', value: '56', change: '+12', changeType: 'positive', icon: 'Wrench', color: 'blue', subtitle: 'Active' },
    { title: 'Completion Rate', value: '91.2%', change: '+2.3%', changeType: 'positive', icon: 'CheckCircle', color: 'green', subtitle: 'On schedule' },
    { title: 'Equipment Status', value: '234', change: '18 issues', changeType: 'positive', icon: 'Zap', color: 'orange', subtitle: 'Total' },
    { title: 'Avg Response Time', value: '2.4 hrs', change: '-0.3 hrs', changeType: 'positive', icon: 'Clock', color: 'purple', subtitle: 'Average' },
  ],
  workOrders: [
    { name: 'WO-2024-0001', subtitle: 'Failed Pump #L-123 - Line 5', value: 'Critical', badge: 'Urgent', badgeColor: 'var(--color-danger-100)', badgeTextColor: 'var(--color-danger-700)' },
    { name: 'WO-2024-0045', subtitle: 'Conveyor Belt Maintenance - Warehouse A', value: 'High', badge: 'In Progress', badgeColor: 'var(--color-blue-100)', badgeTextColor: 'var(--color-blue-700)' },
    { name: 'WO-2024-0089', subtitle: 'Compressor Inspection - Building 2', value: 'Medium', badge: 'Scheduled', badgeColor: 'var(--color-orange-100)', badgeTextColor: 'var(--color-orange-700)' },
    { name: 'WO-2024-0234', subtitle: 'Routine Service - Machinery Center', value: 'Low', badge: 'Completed', badgeColor: 'var(--color-green-100)', badgeTextColor: 'var(--color-green-700)' }
  ]
};
