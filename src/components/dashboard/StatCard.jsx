import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Card from '../common/Card';
import { Sparkline } from './Sparkline';

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  color = 'blue',
  subtitle = null,
  trendData = [],
  secondaryValue = null,
  secondaryLabel = null,
  target = null
}) {
  const colorStyles = {
    blue: {
      backgroundColor: 'var(--color-primary-500)',
      gradientBg: 'var(--color-primary-50)',
      accentColor: 'var(--color-primary-600)'
    },
    green: {
      backgroundColor: 'var(--color-success-500)',
      gradientBg: 'var(--color-success-50)',
      accentColor: 'var(--color-success-600)'
    },
    purple: {
      backgroundColor: '#a855f7',
      gradientBg: '#faf5ff',
      accentColor: '#9333ea'
    },
    orange: {
      backgroundColor: 'var(--color-warning-500)',
      gradientBg: 'var(--color-warning-50)',
      accentColor: 'var(--color-warning-600)'
    },
    red: {
      backgroundColor: 'var(--color-danger-500)',
      gradientBg: 'var(--color-danger-50)',
      accentColor: 'var(--color-danger-600)'
    },
    indigo: {
      backgroundColor: '#6366f1',
      gradientBg: '#eef2ff',
      accentColor: '#4f46e5'
    }
  };

  const changeStyles = {
    positive: { color: 'var(--color-success-700)' },
    negative: { color: 'var(--color-danger-700)' },
    neutral: { color: 'var(--color-text-tertiary)' }
  };

  // Determine sparkline color based on change type
  const sparklineColor = changeType === 'positive' ? 'success' : changeType === 'negative' ? 'danger' : 'gray';

  return (
    <Card
      padding="default"
      className="relative overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-t-4"
      style={{ borderTopColor: colorStyles[color].accentColor }}
    >
      <div className="space-y-4">
        {/* Header with Title and Icon */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.05em' }}>
              {title}
            </p>
            {subtitle && (
              <p className="text-xs font-medium mt-1" style={{ color: 'var(--color-text-quaternary)' }}>
                {subtitle}
              </p>
            )}
          </div>
          {Icon && (
            <div
              className="p-3 rounded-xl shadow-sm text-white"
              style={{ backgroundColor: colorStyles[color].backgroundColor }}
            >
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Primary Value */}
        <div>
          <p className="text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {value}
          </p>
        </div>

        {/* Change Indicator Row */}
        <div className="flex items-center gap-2">
          {change && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg inline-flex" style={{ backgroundColor: changeType === 'positive' ? 'var(--color-success-50)' : changeType === 'negative' ? 'var(--color-danger-50)' : 'var(--color-gray-100)' }}>
              {changeType === 'positive' && <TrendingUp className="w-3.5 h-3.5 mr-0.5" style={changeStyles.positive} />}
              {changeType === 'negative' && <TrendingDown className="w-3.5 h-3.5 mr-0.5" style={changeStyles.negative} />}
              {changeType === 'neutral' && <Minus className="w-3.5 h-3.5 mr-0.5" style={changeStyles.neutral} />}
              <span className="text-xs font-bold" style={changeStyles[changeType]}>
                {Math.abs(change).toString().includes('%') ? change : `${change > 0 ? '+' : ''}${change}%`}
              </span>
              <span className="text-xs ml-1 font-medium" style={{ color: 'var(--color-text-quaternary)' }}>
                vs yesterday
              </span>
            </div>
          )}
          {target && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs" style={{ backgroundColor: 'var(--color-gray-100)', color: 'var(--color-text-tertiary)' }}>
              Target: {target}
            </div>
          )}
        </div>

        {/* Secondary Metrics */}
        {(secondaryValue || secondaryLabel) && (
          <div className="p-2.5 rounded-lg" style={{ backgroundColor: colorStyles[color].gradientBg }}>
            <p className="text-xs font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
              {secondaryLabel || 'Secondary'}
            </p>
            <p className="text-lg font-bold mt-1" style={{ color: colorStyles[color].accentColor }}>
              {secondaryValue}
            </p>
          </div>
        )}

        {/* Sparkline Chart */}
        {trendData && trendData.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2">7-Day Trend</p>
            <Sparkline
              data={trendData}
              color={sparklineColor}
              height={30}
              className="w-full"
            />
          </div>
        )}
      </div>
    </Card>
  );
}

export default StatCard;