import React from 'react';
import { Sparkline } from './Sparkline';
import { TrendIndicator } from './TrendIndicator';

/**
 * KPIOverview Component - Enhanced KPI section with visual hierarchy
 * Displays 4 key metric cards with sparklines and comparisons
 */
export function KPIOverview({ metrics = [] }) {
  if (!metrics || metrics.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-gray-100 rounded-lg h-32 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => {
        const accentColors = {
          blue: 'var(--color-primary-500)',
          green: 'var(--color-success-500)',
          orange: 'var(--color-warning-500)',
          purple: '#a855f7'
        };

        const bgColors = {
          blue: 'var(--color-primary-50)',
          green: 'var(--color-success-50)',
          orange: 'var(--color-warning-50)',
          purple: '#faf5ff'
        };

        const accentColor = accentColors[metric.color] || accentColors.blue;
        const bgColor = bgColors[metric.color] || bgColors.blue;

        return (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300 border-t-4"
            style={{ borderTopColor: accentColor }}
          >
            {/* Header with Icon */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                  {metric.title}
                </p>
                {metric.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{metric.subtitle}</p>
                )}
              </div>
              {metric.icon && (
                <div className="p-2 rounded-lg" style={{ backgroundColor: bgColor }}>
                  <metric.icon className="w-4 h-4" style={{ color: accentColor }} />
                </div>
              )}
            </div>

            {/* Primary Value */}
            <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>

            {/* Change Indicator */}
            {metric.change !== undefined && (
              <div className="mb-3">
                <TrendIndicator
                  value={metric.change}
                  label="vs yesterday"
                  type={metric.change > 0 ? 'positive' : metric.change < 0 ? 'negative' : 'neutral'}
                  percentage={metric.percentage !== false}
                />
              </div>
            )}

            {/* Sparkline */}
            {metric.trendData && metric.trendData.length > 0 && (
              <div className="mb-0">
                <Sparkline
                  data={metric.trendData}
                  color={metric.change > 0 ? 'success' : metric.change < 0 ? 'danger' : 'gray'}
                  height={24}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default KPIOverview;
