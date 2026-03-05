import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

/**
 * TrendIndicator Component - Shows comparison metrics
 * Displays vs yesterday, vs target, or custom comparisons
 *
 * @param {number} value - The change value (positive or negative)
 * @param {string} label - Label for the comparison (e.g., "vs yesterday")
 * @param {string} type - Type: 'positive', 'negative', 'neutral'
 * @param {boolean} percentage - Show as percentage (default: true)
 * @param {boolean} large - Use larger display style
 */
export function TrendIndicator({
  value = 0,
  label = 'vs yesterday',
  type = 'neutral',
  percentage = true,
  large = false,
  className = ''
}) {
  // Determine type based on value if type is neutral
  let indicatorType = type;
  if (type === 'neutral') {
    if (value > 0) indicatorType = 'positive';
    else if (value < 0) indicatorType = 'negative';
  }

  // Color mapping
  const colorMap = {
    positive: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      icon: 'text-green-600'
    },
    negative: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      icon: 'text-red-600'
    },
    neutral: {
      bg: 'bg-gray-50',
      text: 'text-gray-700',
      icon: 'text-gray-600'
    }
  };

  const colors = colorMap[indicatorType];

  // Get icon based on value
  const Icon =
    indicatorType === 'positive' ? TrendingUp : indicatorType === 'negative' ? TrendingDown : Minus;

  const displayValue = percentage ? `${Math.abs(value)}%` : Math.abs(value);
  const sign = value > 0 ? '+' : value < 0 ? '-' : '';
  const iconSizeClass = large ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const valueTextClass = large ? 'text-sm' : 'text-xs';
  const labelTextClass = large ? 'text-sm' : 'text-xs';
  const paddingClass = large ? 'px-3 py-1.5 gap-2' : 'px-2 py-1 gap-1.5';

  return (
    <div
      className={`inline-flex items-center rounded ${paddingClass} ${colors.bg} ${className}`}
    >
      <Icon className={`${iconSizeClass} ${colors.icon}`} />
      <span className={`${valueTextClass} font-semibold ${colors.text}`}>
        {sign}{displayValue}
      </span>
      <span className={`${labelTextClass} text-gray-600`}>{label}</span>
    </div>
  );
}

export default TrendIndicator;
