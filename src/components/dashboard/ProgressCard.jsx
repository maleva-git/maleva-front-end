import Card from '../common/Card';
import { CheckCircle2, Circle } from 'lucide-react';

export function ProgressCard({
  title,
  items = [],
  showPercentage = true
}) {
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>
        {showPercentage && (
          <span className="text-2xl font-bold" style={{ color: 'var(--color-success-600)' }}>
            {percentage}%
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-gray-200)' }}>
            <div
              className="h-full transition-all duration-300 rounded-full"
              style={{
                width: `${percentage}%`,
                backgroundColor: percentage >= 80 ? 'var(--color-success-500)' :
                                  percentage >= 50 ? 'var(--color-primary-500)' :
                                  'var(--color-warning-500)'
              }}
            ></div>
          </div>
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text-quaternary)' }}>
            {completedItems}/{totalItems}
          </span>
        </div>
      </div>

      {/* Items list */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-2 rounded hover:opacity-80 transition-opacity">
            {item.completed ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success-600)' }} />
            ) : (
              <Circle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-quaternary)' }} />
            )}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-medium"
                style={{
                  color: 'var(--color-text-primary)',
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}
              >
                {item.name}
              </p>
              {item.subtitle && (
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-quaternary)' }}>
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ProgressCard;
