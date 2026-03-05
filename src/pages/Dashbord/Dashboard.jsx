import { useCallback } from 'react';
import { Truck, Package, DollarSign, TrendingUp, MapPin, Zap } from 'lucide-react';
import QuickActionBar from '../../components/layout/QuickActionBar';
import PickupList from '../../components/dashboard/PickupList';
import FleetStatus from '../../components/dashboard/FleetStatus';
import EmployeePerformance from '../../components/dashboard/EmployeePerformance';
import PendingJobs from '../../components/dashboard/PendingJobs';
import Charts from '../../components/dashboard/Charts';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import useDashboardData from '../../hooks/useDashboardData';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import { StatusDashboard } from '../../components/dashboard/StatusDashboard';
import { AlertsNotifications } from '../../components/dashboard/AlertsNotifications';

const MAIN_DASHBOARD_ALERT_BASE_TIME = Date.now();
const MAIN_DASHBOARD_ALERTS = [
  {
    id: 1,
    type: 'critical',
    title: 'Vehicle Maintenance Alert',
    message: 'Truck TRK-001 requires urgent maintenance - fuel filter change overdue',
    timestamp: new Date(MAIN_DASHBOARD_ALERT_BASE_TIME - 5 * 60000),
    action: 'Schedule',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Driver Availability',
    message: 'Driver John Smith going off-shift in 30 minutes, reassign pending deliveries',
    timestamp: new Date(MAIN_DASHBOARD_ALERT_BASE_TIME - 15 * 60000),
    action: 'Reassign',
  },
  {
    id: 3,
    type: 'info',
    title: 'Daily Goal Achieved',
    message: '85% of daily deliveries completed successfully',
    timestamp: new Date(MAIN_DASHBOARD_ALERT_BASE_TIME - 2 * 3600000),
  },
];

export default function Dashboard() {
  const { data, loading, error } = useDashboardData();

  const handleQuickAction = useCallback((action) => {
    console.log('Quick action clicked:', action.label);
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    console.error(error);
    return (
      <div 
        className="text-center py-16 rounded-2xl border"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-danger-light)' }}
          >
            <svg 
              className="w-8 h-8" 
              style={{ color: 'var(--color-danger)' }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          <div>
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Failed to load dashboard data
            </h3>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Please refresh the page or try again later
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      {/* Enhanced Page Header with Transport Theme */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight mb-2"
              style={{ color: 'var(--color-text-primary)', lineHeight: 'var(--line-height-tight)' }}
            >
              Transport Dashboard
            </h1>
            <p
              className="text-sm font-medium flex items-center gap-2"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              <MapPin className="w-4 h-4" />
              Real-time insights into your logistics & truck dispatch operations
            </p>
          </div>
          <div
            className="px-4 py-2 rounded-xl border flex items-center gap-2 shadow-sm"
            style={{
              backgroundColor: '#dcfce7',
              borderColor: '#bbf7d0',
              color: '#15803d',
              animation: 'pulse 3s ease-in-out infinite'
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22c55e', animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="text-xs font-semibold">System Online • Live Tracking</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="transition-transform duration-300 hover:scale-102">
        <QuickActionBar actions={data.quickActions} onActionClick={handleQuickAction} />
      </div>

      {/* Enhanced KPI Overview with Sparklines */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Key Performance Indicators</h2>
        <KPIOverview
          metrics={[
            {
              title: 'Total Pickups',
              value: formatNumber(data.todayStats.totalPickups),
              change: 12,
              percentage: true,
              subtitle: 'Today',
              color: 'blue',
              icon: Package,
              trendData: [42, 52, 48, 61, 55, 67, 62]
            },
            {
              title: 'Completed Jobs',
              value: formatNumber(data.todayStats.completedPickups),
              change: 8,
              percentage: true,
              subtitle: 'Today',
              color: 'green',
              icon: TrendingUp,
              trendData: [35, 41, 39, 48, 52, 58, 64]
            },
            {
              title: 'Revenue',
              value: formatCurrency(data.todayStats.totalRevenue),
              change: 15,
              percentage: true,
              subtitle: 'Today',
              color: 'purple',
              icon: DollarSign,
              trendData: [2400, 2900, 2700, 3200, 3500, 4200, 4800]
            },
            {
              title: 'Active Vehicles',
              value: `${data.todayStats.activeVehicles}/${data.todayStats.totalVehicles}`,
              change: -2,
              percentage: true,
              subtitle: 'Fleet Status',
              color: 'orange',
              icon: Truck,
              trendData: [18, 17, 19, 16, 18, 17, 15]
            }
          ]}
        />
      </div>

      {/* Status Overview Dashboard */}
      <div className="space-y-6">
        <StatusDashboard
          statuses={[
            {
              type: 'active',
              label: 'Active',
              icon: Zap,
              count: data.todayStats.activeVehicles,
              color: 'green'
            },
            {
              type: 'completed',
              label: 'Completed',
              icon: TrendingUp,
              count: data.todayStats.completedPickups,
              color: 'blue'
            },
            {
              type: 'pending',
              label: 'Pending',
              count: (data.todayStats.totalPickups - data.todayStats.completedPickups),
              color: 'yellow'
            },
            {
              type: 'delayed',
              label: 'Delayed',
              count: 3,
              color: 'red',
              items: [
                { name: 'Delivery #5421', priority: 'high', description: 'Delayed by 45 mins' },
                { name: 'Delivery #5422', priority: 'high', description: 'Delayed by 30 mins' },
                { name: 'Delivery #5423', priority: 'medium', description: 'Slightly delayed' }
              ]
            }
          ]}
        />
      </div>

      {/* Alerts & Notifications */}
      <div>
        <AlertsNotifications
          alerts={MAIN_DASHBOARD_ALERTS}
          onActionClick={(alert) => console.log('Alert action:', alert)}
        />
      </div>

      {/* Charts & Analytics */}
      <Charts weeklySales={data.weeklySales || []} monthlySales={data.monthlySales || []} />

      {/* Operational Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PickupList title="Today's Pickups" pickups={data.todayPickups || []} />
        <PickupList title="Tomorrow's Pickups" pickups={data.tomorrowPickups || []} />
      </div>

      {/* Fleet & Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FleetStatus vehicles={data.fleetStatus || []} />
        <PendingJobs jobs={data.pendingJobs || []} />
      </div>

      {/* Performance Analytics */}
      <EmployeePerformance employees={data.employeePerformance || []} />

      {/* Real-Time Alerts Section */}
      {data.todayStats.activeVehicles > 0 && (
        <div
          className="rounded-lg border-l-4 p-4 transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-warning-50)',
            borderColor: 'var(--color-warning-500)'
          }}
        >
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 animate-pulse" style={{ color: 'var(--color-warning-600)' }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--color-warning-900)' }}>
                {data.todayStats.activeVehicles} trucks actively dispatched
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-warning-700)' }}>
                All vehicles are operating on schedule • Estimated completion: {data.todayStats.completedPickups + Math.ceil((data.todayStats.totalPickups || 0) * 0.3)} pickups today
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
        <div
          className="p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundColor: 'var(--color-primary-50)' }}
        >
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>Total Distance</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-primary-700)' }}>
            {formatNumber(data.todayStats?.totalDistance || 0)} km
          </p>
        </div>
        <div
          className="p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundColor: 'var(--color-success-50)' }}
        >
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>On-Time Delivery</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-success-700)' }}>
            {data.todayStats?.onTimePercentage || 98}%
          </p>
        </div>
        <div
          className="p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundColor: 'var(--color-purple-50)' }}
        >
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>Avg Delivery Time</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-purple-700)' }}>
            {data.todayStats?.avgDeliveryTime || '2.5'} hrs
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

     
