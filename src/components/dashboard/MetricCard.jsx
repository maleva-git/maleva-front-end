import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from '../common/Card';

export function MetricCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  color = 'blue',
  subtitle = null
}) {
  const colorMap = {
    blue: { bg: 'var(--color-primary-500)', light: 'var(--color-primary-50)' },
    green: { bg: 'var(--color-success-500)', light: 'var(--color-success-50)' },
    purple: { bg: '#a855f7', light: '#f3e8ff' },
    orange: { bg: 'var(--color-warning-500)', light: 'var(--color-warning-50)' },
    red: { bg: 'var(--color-danger-500)', light: 'var(--color-danger-50)' },
    indigo: { bg: '#6366f1', light: '#e0e7ff' },
    cyan: { bg: '#06b6d4', light: '#cffafe' }
  };

  const colorStyle = colorMap[color] || colorMap.blue;
  const isTrending = changeType === 'positive' || changeType === 'negative';

  return (
    <Card padding="default" className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Gradient background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-full blur-2xl" style={{ backgroundColor: colorStyle.bg }}></div>

      <div className="relative z-10">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-tertiary)' }}>
              {title}
            </p>
          </div>
          {Icon && (
            <div
              className="p-3 rounded-xl shadow-sm group-hover:shadow-md transition-all ml-2"
              style={{ backgroundColor: colorStyle.light }}
            >
              <Icon className="w-5 h-5" style={{ color: colorStyle.bg }} />
            </div>
          )}
        </div>

        {/* Main value */}
        <div className="mb-3">
          <p className="text-3xl lg:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {value}
          </p>
          {subtitle && (
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-quaternary)' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Change indicator */}
        {change && isTrending && (
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit transition-colors"
            style={{
              backgroundColor: changeType === 'positive' ? 'var(--color-success-50)' : 'var(--color-danger-50)'
            }}
          >
            {changeType === 'positive' ? (
              <>
                <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--color-success-600)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-success-700)' }}>
                  {change}
                </span>
              </>
            ) : (
              <>
                <ArrowDownRight className="w-4 h-4" style={{ color: 'var(--color-danger-600)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-danger-700)' }}>
                  {change}
                </span>
              </>
            )}
            <span className="text-xs ml-1" style={{ color: 'var(--color-text-quaternary)' }}>
              this month
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default MetricCard;
