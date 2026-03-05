import { MessageSquare, Star, Clock, AlertCircle } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import { AlertsNotifications } from '../../components/dashboard/AlertsNotifications';
import Card from '../../components/common/Card';

const CUSTOMER_SERVICE_ALERT_BASE_TIME = Date.now();
const CUSTOMER_SERVICE_ALERTS = [
  {
    id: 1,
    type: 'critical',
    title: 'High Priority Case',
    message: 'VIP customer complaint requires immediate attention',
    timestamp: new Date(CUSTOMER_SERVICE_ALERT_BASE_TIME - 5 * 60000),
    action: 'Address',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Response Time Alert',
    message: 'Current queue exceeding SLA targets',
    timestamp: new Date(CUSTOMER_SERVICE_ALERT_BASE_TIME - 15 * 60000),
    action: 'Manage Queue',
  },
];

/**
 * CustomerServiceDashboard - Customer interactions and support
 */
export function CustomerServiceDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Customer Service
        </h1>
        <p className="text-sm font-medium text-gray-600">
          Customer support and satisfaction Overview
        </p>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Active Inquiries', value: '48', change: 5, subtitle: 'Pending response', color: 'blue', icon: MessageSquare, trendData: [35, 38, 42, 45, 44, 46, 48] },
          { title: 'Avg Response Time', value: '2.3m', change: -15, subtitle: 'Minutes', color: 'green', icon: Clock, trendData: [4.2, 3.8, 3.5, 3.1, 2.8, 2.5, 2.3] },
          { title: 'Satisfaction Score', value: '4.6/5', change: 8, subtitle: 'Customer rating', color: 'purple', icon: Star, trendData: [4.2, 4.3, 4.4, 4.45, 4.5, 4.55, 4.6] },
          { title: 'Unresolved Cases', value: '12', change: -20, subtitle: 'Escalated', color: 'orange', icon: AlertCircle, trendData: [18, 16, 15, 14, 13, 12.5, 12] }
        ]}
      />

      <AlertsNotifications alerts={CUSTOMER_SERVICE_ALERTS} />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-4">Recent Tickets</h3>
        <div className="space-y-2">
          {['Delivery delay inquiry', 'Billing question', 'Tracking assistance', 'General inquiry', 'Complaint'].map((ticket, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">{ticket}</p>
              <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded">Open</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default CustomerServiceDashboard;
