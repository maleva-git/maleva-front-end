import React from 'react';
import { Users, TrendingUp, Award, Calendar } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import Card from '../../components/common/Card';

/**
 * HRDashboard - Human resources and team management
 */
export function HRDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Human Resources
        </h1>
        <p className="text-sm font-medium text-gray-600">Team performance and attendance</p>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Total Employees', value: '526', change: 4, subtitle: 'Active staff', color: 'blue', icon: Users, trendData: [480, 490, 500, 510, 515, 520, 526] },
          { title: 'Attendance', value: '94.2%', change: 2.3, subtitle: 'This month', color: 'green', icon: Calendar, trendData: [90, 91.5, 92.3, 93, 93.6, 93.9, 94.2] },
          { title: 'Performance', value: '8.7/10', change: 0.5, subtitle: 'Team average', color: 'purple', icon: Award, trendData: [8.2, 8.3, 8.4, 8.5, 8.6, 8.65, 8.7] },
          { title: 'Training Prog.', value: '87%', change: 12, subtitle: 'Completion', color: 'orange', icon: TrendingUp, trendData: [65, 68, 72, 78, 82, 85, 87] }
        ]}
      />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
        <div className="space-y-2">
          {['Ahmed Hassan - 9.8/10', 'Maria Garcia - 9.6/10', 'John Smith - 9.5/10', 'Sarah Johnson - 9.4/10', 'Mike Chen - 9.3/10'].map((p, i) => (
            <div key={i} className="p-3 bg-yellow-50 rounded-lg flex justify-between">
              <p className="text-sm font-medium text-gray-900">{p.split(' - ')[0]}</p>
              <span className="text-sm font-bold text-yellow-700">{p.split(' - ')[1]}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default HRDashboard;
