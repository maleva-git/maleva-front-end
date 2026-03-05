import React from 'react';
import { MapPin, CheckCircle, DollarSign, Navigation } from 'lucide-react';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import Card from '../../components/common/Card';

/**
 * DriverDashboard - Driver operations (mobile-optimized)
 */
export function DriverDashboard() {
  return (
    <div className="space-y-4" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-4)' }}>
      <div className="mb-4">
        <h1 className="text-2xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          My Deliveries
        </h1>
      </div>

      <KPIOverview
        metrics={[
          { title: 'Completed Today', value: '12', change: 3, subtitle: 'Deliveries', color: 'green', icon: CheckCircle, trendData: [4, 6, 7, 8, 10, 11, 12] },
          { title: 'Earnings', value: '$248', change: 8, subtitle: 'Base + bonus', color: 'green', icon: DollarSign, trendData: [120, 140, 160, 180, 200, 225, 248] },
          { title: 'Distance', value: '142 km', change: 5, subtitle: 'Driven today', color: 'blue', icon: Navigation, trendData: [80, 95, 105, 120, 130, 138, 142] },
          { title: 'Rating', value: '4.8/5', change: 2, subtitle: 'Customer score', color: 'orange', icon: MapPin, trendData: [4.5, 4.6, 4.65, 4.7, 4.75, 4.77, 4.8] }
        ]}
      />

      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
        <h3 className="text-lg font-semibold mb-3">Next Deliveries</h3>
        <div className="space-y-2">
          {[
            { addr: '123 Main St, Downtown', time: '2:15 PM', status: 'Priority' },
            { addr: '456 Oak Ave, North', time: '3:00 PM', status: 'Regular' },
            { addr: '789 Pine Rd, East', time: '3:45 PM', status: 'Regular' }
          ].map((d, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-lg">
              <p className="font-semibold text-sm text-gray-900">{d.addr}</p>
              <p className="text-xs text-gray-600 mt-1">{d.time} • {d.status}</p>
            </div>
          ))}
        </div>
      </Card>

      <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold" style={{ backgroundColor: 'var(--color-primary-500)' }}>
        Start Navigation
      </button>
    </div>
  );
}

export default DriverDashboard;
