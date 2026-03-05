import React from 'react';
import { Truck, Wrench, AlertCircle, Zap } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import Card from '../../components/common/Card';

/**
 * MaintenanceDashboard - Vehicle maintenance and fleet health
 */
export function MaintenanceDashboard() {
  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Fleet Maintenance
        </h1>
        <p className="text-sm font-medium text-gray-600">Vehicle health and maintenance scheduling</p>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Due For Maintenance', value: '12', change: -8, subtitle: 'Next 7 days', color: 'orange', icon: Wrench, trendData: [18, 17, 16, 15, 14, 13, 12] },
          { title: 'Completion Rate', value: '96.2%', change: 2.1, subtitle: 'On schedule', color: 'green', icon: Zap, trendData: [92, 93, 94, 94.8, 95.2, 95.7, 96.2] },
          { title: 'Active Fleet', value: '128/156', change: -2, subtitle: 'Available vehicles', color: 'blue', icon: Truck, trendData: [130, 130, 130, 129, 129, 128, 128] },
          { title: 'Avg Fuel Efficiency', value: '7.4 km/L', change: 3, subtitle: 'This month', color: 'purple', icon: AlertCircle, trendData: [7.0, 7.05, 7.1, 7.2, 7.25, 7.3, 7.4] }
        ]}
      />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-4">Maintenance Queue</h3>
        <div className="space-y-2">
          {[
            { vehicle: 'TRK-001', service: 'Oil Change', date: 'Today', priority: 'high' },
            { vehicle: 'TRK-003', service: 'Tire Rotation', date: 'Tomorrow', priority: 'high' },
            { vehicle: 'TRK-007', service: 'Brake Inspection', date: 'Thu', priority: 'medium' },
            { vehicle: 'TRK-012', service: 'Filter Replacement', date: 'Fri', priority: 'medium' },
            { vehicle: 'TRK-018', service: 'Alignment Check', date: 'Next Week', priority: 'low' }
          ].map((m, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-gray-900">{m.vehicle} - {m.service}</p>
                <p className="text-xs text-gray-600 mt-1">{m.date}</p>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                m.priority === 'high' ? 'bg-red-100 text-red-800' :
                m.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {m.priority}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default MaintenanceDashboard;
