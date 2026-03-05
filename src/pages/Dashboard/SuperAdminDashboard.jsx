import { Users, Activity, TrendingUp, AlertCircle, BarChart3, Clock } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import { AlertsNotifications } from '../../components/dashboard/AlertsNotifications';
import { Charts } from '../../components/dashboard/Charts';
import Card from '../../components/common/Card';

const SUPER_ADMIN_ALERT_BASE_TIME = Date.now();
const SUPER_ADMIN_ALERTS = [
  {
    id: 1,
    type: 'critical',
    title: 'Database Backup Failure',
    message: 'Automated backup failed at 2:30 AM - manual intervention required',
    timestamp: new Date(SUPER_ADMIN_ALERT_BASE_TIME - 30 * 60000),
    action: 'View Details',
  },
  {
    id: 2,
    type: 'warning',
    title: 'High Server Load',
    message: 'CPU usage at 85% on Server-03, consider scaling resources',
    timestamp: new Date(SUPER_ADMIN_ALERT_BASE_TIME - 15 * 60000),
    action: 'Scale Resources',
  },
  {
    id: 3,
    type: 'warning',
    title: 'SSL Certificate Expiring',
    message: 'SSL certificate for api.maleva.com expires in 7 days',
    timestamp: new Date(SUPER_ADMIN_ALERT_BASE_TIME - 2 * 3600000),
    action: 'Renew Certificate',
  },
  {
    id: 4,
    type: 'info',
    title: 'System Maintenance Completed',
    message: 'Monthly maintenance schedule completed successfully',
    timestamp: new Date(SUPER_ADMIN_ALERT_BASE_TIME - 4 * 3600000),
  },
];

/**
 * SuperAdminDashboard - System-wide administration and oversight
 * Displays overall system health, user management, revenue, and alerts
 */
export function SuperAdminDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
              System Administration
            </h1>
            <p className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--color-text-tertiary)' }}>
              <Activity className="w-4 h-4" />
              Complete system overview and administrative controls
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl border flex items-center gap-2 shadow-sm"
            style={{
              backgroundColor: '#fef3c7',
              borderColor: '#fcd34d',
              color: '#92400e',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b', animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="text-xs font-semibold">Admin Mode • Full Access</span>
          </div>
        </div>
      </div>

      {/* System Health KPIs */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>System Health</h2>
        <KPIOverview
          metrics={[
            {
              title: 'Total Users Online',
              value: '1,247',
              change: 23,
              percentage: true,
              subtitle: 'Across all systems',
              color: 'blue',
              icon: Users,
              trendData: [800, 950, 1100, 1050, 1180, 1240, 1247]
            },
            {
              title: 'System Uptime',
              value: '99.98%',
              change: 0.02,
              percentage: false,
              subtitle: 'This month',
              color: 'green',
              icon: TrendingUp,
              trendData: [99.85, 99.90, 99.92, 99.95, 99.97, 99.98, 99.98]
            },
            {
              title: 'Revenue (All)',
              value: '$847,392',
              change: 34,
              percentage: true,
              subtitle: 'This month',
              color: 'purple',
              icon: BarChart3,
              trendData: [450000, 550000, 620000, 710000, 780000, 820000, 847392]
            },
            {
              title: 'Active Operations',
              value: '324',
              change: 12,
              percentage: true,
              subtitle: 'In progress',
              color: 'orange',
              icon: Clock,
              trendData: [200, 250, 280, 295, 310, 318, 324]
            }
          ]}
        />
      </div>

      {/* Alerts & System Issues */}
      <div>
        <AlertsNotifications
          alerts={SUPER_ADMIN_ALERTS}
        />
      </div>

      {/* User Activity & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Statistics */}
        <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
          <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>User Statistics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-xs font-semibold text-gray-600">Total Registered Users</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2,847</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-xs font-semibold text-gray-600">Active This Month</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2,156</p>
              </div>
              <Activity className="w-8 h-8 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="text-xs font-semibold text-gray-600">New Users (This Week)</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">148</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="text-xs font-semibold text-gray-600">Inactive (30+ days)</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">691</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </Card>

        {/* Role Distribution */}
        <Card className="border-t-4" style={{ borderTopColor: 'var(--color-success-500)' }}>
          <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>Users by Role</h3>
          <div className="space-y-3">
            {[
              { role: 'SuperAdmin', count: 3, percentage: 0.1 },
              { role: 'Admin', count: 24, percentage: 0.8 },
              { role: 'Operation Admin', count: 156, percentage: 5.5 },
              { role: 'Warehouse Staff', count: 412, percentage: 14.5 },
              { role: 'Drivers', count: 1203, percentage: 42.3 },
              { role: 'Customer Service', count: 523, percentage: 18.4 },
              { role: 'HR / Finance', count: 526, percentage: 18.5 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-gray-700">{item.role}</p>
                  <span className="text-sm font-bold text-gray-900">{item.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <Charts
        weeklySales={[
          { day: 'Mon', amount: 120000 },
          { day: 'Tue', amount: 145000 },
          { day: 'Wed', amount: 132000 },
          { day: 'Thu', amount: 168000 },
          { day: 'Fri', amount: 175000 },
          { day: 'Sat', amount: 142000 },
          { day: 'Sun', amount: 98000 }
        ]}
        monthlySales={[
          { month: 'Jan', amount: 650000 },
          { month: 'Feb', amount: 710000 },
          { month: 'Mar', amount: 745000 },
          { month: 'Apr', amount: 820000 },
          { month: 'May', amount: 890000 },
          { month: 'Jun', amount: 847000 }
        ]}
      />

      {/* Admin Actions */}
      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-warning-500)' }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Admin Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Manage Users', icon: '👥' },
            { label: 'View Reports', icon: '📊' },
            { label: 'System Config', icon: '⚙️' },
            { label: 'Audit Logs', icon: '📋' }
          ].map((action, idx) => (
            <button
              key={idx}
              className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-center"
            >
              <p className="text-2xl mb-2">{action.icon}</p>
              <p className="text-sm font-semibold text-gray-700">{action.label}</p>
            </button>
          ))}
        </div>
      </Card>

      {/* Custom CSS for animations */}
      <style>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default SuperAdminDashboard;
