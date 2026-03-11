import { useCallback } from 'react';
import { Truck, Package, DollarSign, TrendingUp, MapPin, Zap } from 'lucide-react';
import QuickActionBar from '../../components/layout/QuickActionBar';
import { KPIOverview } from '../../components/dashboard/KPIOverview';
import { StatusDashboard } from '../../components/dashboard/StatusDashboard';
import { AlertsNotifications } from '../../components/dashboard/AlertsNotifications';
import PickupList from '../../components/dashboard/PickupList';
import FleetStatus from '../../components/dashboard/FleetStatus';
import EmployeePerformance from '../../components/dashboard/EmployeePerformance';
import PendingJobs from '../../components/dashboard/PendingJobs';
import Charts from '../../components/dashboard/Charts';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import useDashboardData from '../../hooks/useDashboardData';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import Card from '../../components/common/Card';

const OPERATION_ADMIN_ALERT_BASE_TIME = Date.now();
const OPERATION_ADMIN_ALERTS = [
  {
    id: 1,
    type: 'critical',
    title: 'Truck TRK-001 Breakdown',
    message: 'Vehicle requires immediate maintenance',
    timestamp: new Date(OPERATION_ADMIN_ALERT_BASE_TIME - 5 * 60000),
    action: 'Schedule',
  },
];

/**
 * OperationAdminDashboard - Logistics and truck dispatch operations
 */
export function OperationAdminDashboard() {
  const { data, loading, error } = useDashboardData();

  const handleQuickAction = useCallback((action) => {

  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="text-center py-16 rounded-2xl border"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)'
        }}>
        <p style={{ color: 'var(--color-text-primary)' }}>Failed to load dashboard data</p>
        <p className="text-sm mt-2" style={{ color: 'var(--color-text-tertiary)' }}>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-16">
        <p style={{ color: 'var(--color-text-primary)' }}>No dashboard data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6" style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-6)' }}>
      {/* Page Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Operations Dashboard
            </h1>
            <p className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--color-text-tertiary)' }}>
              <MapPin className="w-4 h-4" />
              Real-time logistics & truck dispatch
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl border flex items-center gap-2 shadow-sm"
            style={{
              backgroundColor: '#dcfce7',
              borderColor: '#bbf7d0',
              color: '#15803d',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22c55e', animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="text-xs font-semibold">Live Tracking</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActionBar actions={data.quickActions || []} onActionClick={handleQuickAction} />

      {/* KPI Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Key Metrics</h2>
        <KPIOverview metrics={[
          {
            title: 'Total Pickups',
            value: formatNumber(data.todayStats?.totalPickups || 0),
            change: 12,
            subtitle: 'Today',
            color: 'blue',
            icon: Package,
            trendData: [42, 52, 48, 61, 55, 67, 62]
          },
          {
            title: 'Completed Jobs',
            value: formatNumber(data.todayStats?.completedPickups || 0),
            change: 8,
            subtitle: 'Today',
            color: 'green',
            icon: TrendingUp,
            trendData: [35, 41, 39, 48, 52, 58, 64]
          },
          {
            title: 'Revenue',
            value: formatCurrency(data.todayStats?.totalRevenue || 0),
            change: 15,
            subtitle: 'Today',
            color: 'purple',
            icon: DollarSign,
            trendData: [2400, 2900, 2700, 3200, 3500, 4200, 4800]
          },
          {
            title: 'Active Vehicles',
            value: `${data.todayStats?.activeVehicles || 0}/${data.todayStats?.totalVehicles || 0}`,
            change: -2,
            subtitle: 'Fleet Status',
            color: 'orange',
            icon: Truck,
            trendData: [18, 17, 19, 16, 18, 17, 15]
          }
        ]} />
      </div>

      {/* Status Dashboard */}
      <StatusDashboard statuses={[
        { type: 'active', label: 'Active', icon: TrendingUp, count: data.todayStats?.activeVehicles || 0, color: 'green' },
        { type: 'completed', label: 'Completed', icon: TrendingUp, count: data.todayStats?.completedPickups || 0, color: 'blue' },
        { type: 'pending', label: 'Pending', count: (data.todayStats?.totalPickups || 0) - (data.todayStats?.completedPickups || 0), color: 'yellow' },
        { type: 'delayed', label: 'Delayed', count: 3, color: 'red' }
      ]} />

      {/* Alerts */}
      <AlertsNotifications alerts={OPERATION_ADMIN_ALERTS} />

      {/* Charts */}
      <Charts weeklySales={data.weeklySales || []} monthlySales={data.monthlySales || []} />

      {/* Operational Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PickupList title="Today's Pickups" pickups={data.todayPickups || []} />
        <PickupList title="Tomorrow's Pickups" pickups={data.tomorrowPickups || []} />
      </div>

      {/* Fleet & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FleetStatus vehicles={data.fleetStatus || []} />
        <PendingJobs jobs={data.pendingJobs || []} />
      </div>

      <EmployeePerformance employees={data.employeePerformance || []} />

      {/* Real-Time Alerts */}
      {(data.todayStats?.activeVehicles || 0) > 0 && (
        <div className="rounded-lg border-l-4 p-4 transition-all duration-300"
          style={{
            backgroundColor: 'var(--color-warning-50)',
            borderColor: 'var(--color-warning-500)'
          }}>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 animate-pulse" style={{ color: 'var(--color-warning-600)' }} />
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--color-warning-900)' }}>
                {data.todayStats?.activeVehicles || 0} trucks actively dispatched
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
        <Card style={{ backgroundColor: 'var(--color-primary-50)' }}>
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>Total Distance</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-primary-700)' }}>
            {formatNumber(data.todayStats?.totalDistance || 0)} km
          </p>
        </Card>
        <Card style={{ backgroundColor: 'var(--color-success-50)' }}>
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>On-Time Delivery</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-success-700)' }}>
            {data.todayStats?.onTimePercentage || 98}%
          </p>
        </Card>
        <Card style={{ backgroundColor: 'var(--color-purple-50)' }}>
          <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>Avg Delivery Time</p>
          <p className="text-2xl font-bold mt-2" style={{ color: 'var(--color-purple-700)' }}>
            {data.todayStats?.avgDeliveryTime || '2.5'} hrs
          </p>
        </Card>
      </div>

      <style>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default OperationAdminDashboard;
