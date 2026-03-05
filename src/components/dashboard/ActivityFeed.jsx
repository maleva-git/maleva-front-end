import Card from '../common/Card';
import { Check, Clock, AlertCircle, Zap } from 'lucide-react';

export function ActivityFeed({ activities = [] }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5" style={{ color: 'var(--color-success-600)' }} />;
      case 'pending':
        return <Clock className="w-5 h-5" style={{ color: 'var(--color-warning-600)' }} />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" style={{ color: 'var(--color-danger-600)' }} />;
      default:
        return <Zap className="w-5 h-5" style={{ color: 'var(--color-primary-600)' }} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--color-success-50)';
      case 'pending':
        return 'var(--color-warning-50)';
      case 'warning':
        return 'var(--color-danger-50)';
      default:
        return 'var(--color-primary-50)';
    }
  };

  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Recent Activity
        </h3>
        <span className="text-xs px-3 py-1 rounded-full" style={{
          backgroundColor: 'var(--color-primary-50)',
          color: 'var(--color-primary-700)'
        }}>
          {activities.length} items
        </span>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-opacity-70"
            style={{ backgroundColor: getStatusColor(activity.status) }}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getStatusIcon(activity.status)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {activity.title}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-quaternary)' }}>
                {activity.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-xs font-medium" style={{ color: 'var(--color-text-quaternary)' }}>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ActivityFeed;
