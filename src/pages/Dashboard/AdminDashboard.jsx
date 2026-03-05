import React from 'react';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import { StatusDashboard } from '../../components/dashboard/StatusDashboard';
import { Charts } from '../../components/dashboard/Charts';
import Card from '../../components/common/Card';

/**
 * AdminDashboard - Company operations and team management
 */
export function AdminDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Company Operations
        </h1>
        <p className="text-sm font-medium text-gray-600">
          Company performance overview and team management
        </p>
      </div>

      {/* Key Metrics */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Performance Metrics</h2>
        <KPIOverview
          metrics={[
            {
              title: 'Company Revenue',
              value: '$847,392',
              change: 28,
              subtitle: 'This month',
              color: 'green',
              Icon: TrendingUp,
              trendData: [620000, 680000, 740000, 780000, 810000, 830000, 847392]
            },
            {
              title: 'Active Operations',
              value: '324',
              change: 15,
              subtitle: 'In progress',
              color: 'blue',
              icon: CheckCircle,
              trendData: [250, 270, 285, 300, 315, 320, 324]
            },
            {
              title: 'Team Efficiency',
              value: '94.2%',
              change: 3.5,
              subtitle: 'Target vs actual',
              color: 'purple',
              icon: Users,
              trendData: [88, 89.5, 91, 92.5, 93.2, 93.8, 94.2]
            },
            {
              title: 'Pending Approvals',
              value: '23',
              change: -5,
              subtitle: 'Awaiting action',
              color: 'orange',
              icon: Clock,
              trendData: [45, 42, 38, 32, 28, 25, 23]
            }
          ]}
        />
      </div>

      {/* Operations Status */}
      <StatusDashboard
        statuses={[
          { type: 'active', label: 'Running', icon: CheckCircle, count: 156, color: 'green' },
          { type: 'completed', label: 'Completed', icon: CheckCircle, count: 2847, color: 'blue' },
          { type: 'pending', label: 'Pending', icon: Clock, count: 124, color: 'yellow' },
          { type: 'delayed', label: 'Delayed', icon: TrendingUp, count: 12, color: 'red' }
        ]}
      />

      {/* Team Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Team Performance</h3>
          <div className="space-y-3">
            {[
              { dept: 'Operations', score: 96, staff: 78 },
              { dept: 'Warehouse', score: 92, staff: 42 },
              { dept: 'Drivers', score: 94, staff: 156 },
              { dept: 'Customer Service', score: 88, staff: 32 },
              { dept: 'Maintenance', score: 90, staff: 18 }
            ].map((dept, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-gray-700">{dept.dept} ({dept.staff} staff)</p>
                  <span className="text-sm font-bold text-gray-900">{dept.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dept.score >= 95 ? 'bg-green-500' :
                      dept.score >= 90 ? 'bg-blue-500' :
                      dept.score >= 85 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${dept.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-t-4" style={{ borderTopColor: 'var(--color-success-500)' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Approval Queue</h3>
          <div className="space-y-2">
            {[
              { item: 'New route approval', priority: 'high', time: '2 hrs' },
              { item: 'Equipment purchase request', priority: 'high', time: '4 hrs' },
              { item: 'Driver bonus adjustment', priority: 'medium', time: '1 day' },
              { item: 'Maintenance schedule', priority: 'medium', time: '2 days' },
              { item: 'Employee training program', priority: 'low', time: '3 days' }
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded-lg flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">{item.item}</p>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  item.priority === 'high' ? 'bg-red-100 text-red-800' :
                  item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.time}
                </span>
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

      <style>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
