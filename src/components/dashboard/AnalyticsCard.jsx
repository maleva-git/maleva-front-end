import React from 'react';
import Card from '../common/Card';
import { Sparkline } from './Sparkline';
import { TrendIndicator } from './TrendIndicator';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

/**
 * AnalyticsCard Component - Generic analytics breakdown card
 * Displays primary value + secondary metrics + sparkline
 *
 * @param {string} title - Card title
 * @param {number} value - Primary metric value
 * @param {string} unit - Unit for display (e.g., "$", "%")
 * @param {number} change - Change percentage
 * @param {Array} trendData - 7-day trend data for sparkline
 * @param {Array} metrics - Secondary metrics array: [{label, value, color}]
 * @param {string} status - Status: 'positive', 'negative', 'neutral', 'warning'
 * @param {function} onViewDetails - Callback for view details action
 * @param {string} icon - Icon name or component
 */
export function AnalyticsCard({
  title,
  value,
  unit = '',
  change = 0,
  trendData = [],
  metrics = [],
  status = 'neutral',
  onViewDetails,
  icon: Icon,
  className = ''
}) {
  // Color mapping for status
  const statusColors = {
    positive: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      accent: 'var(--color-success-500)'
    },
    negative: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
      accent: 'var(--color-danger-500)'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-700',
      accent: 'var(--color-warning-500)'
    },
    neutral: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      accent: 'var(--color-primary-500)'
    }
  };

  const colors = statusColors[status];

  // Determine trend color
  const trendColor = status === 'positive' ? 'success' : status === 'negative' ? 'danger' : 'gray';

  return (
    <Card className={`border-t-4 transition-all duration-300 hover:shadow-md ${className}`} style={{ borderTopColor: colors.accent }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          {Icon && (
            <div className={`p-2 rounded-lg ${colors.bg}`}>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">{title}</p>
          </div>
        </div>
      </div>

      {/* Main Value */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {value}
            <span className="text-lg text-gray-500 font-normal">{unit}</span>
          </p>
        </div>
        {change !== 0 && (
          <div className="mt-2">
            <TrendIndicator
              value={change}
              label="vs yesterday"
              type={change > 0 ? 'positive' : 'negative'}
              percentage={true}
            />
          </div>
        )}
      </div>

      {/* Sparkline Trend */}
      {trendData.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 mb-2">7-Day Trend</p>
          <Sparkline data={trendData} color={trendColor} height={40} />
        </div>
      )}

      {/* Secondary Metrics Grid */}
      {metrics.length > 0 && (
        <div className="mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {metrics.map((metric, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 mb-1">{metric.label}</p>
                <p className="text-base font-bold" style={{ color: metric.color || 'var(--color-text-primary)' }}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
            style={{ color: 'var(--color-primary-600)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-700)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary-600)')}
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
        <button
          className="flex items-center gap-1 text-xs font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-700"
        >
          Export
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </Card>
  );
}

export default AnalyticsCard;
