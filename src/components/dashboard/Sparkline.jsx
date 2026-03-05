import { useMemo } from 'react';

/**
 * Sparkline Component - Reusable mini trend chart
 * Displays 7-day trend data as a simple line visualization
 *
 * @param {Array} data - Array of numeric values (7 data points)
 * @param {string} color - Color of the line (green='success', red='danger', gray='neutral')
 * @param {number} height - Height in pixels (default: 40)
 */
export function Sparkline({ data = [], color = 'gray', height = 40, className = '' }) {
  const sparklineData = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.slice(0, 7); // Ensure max 7 data points
  }, [data]);

  // Find min and max for scaling
  const min = Math.min(...sparklineData);
  const max = Math.max(...sparklineData);
  const range = max - min || 1;

  // Color mapping
  const colorMap = {
    success: '#22c55e', // Green
    danger: '#ef4444',  // Red
    gray: '#94a3b8'     // Gray
  };

  const lineColor = colorMap[color] || colorMap.gray;

  // Generate SVG path data
  const points = sparklineData.map((value, index) => {
    const x = (index / Math.max(sparklineData.length - 1, 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  });

  const pathData = points.length > 0 ? `M ${points.join(' L ')}` : '';

  if (sparklineData.length === 0) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-50 rounded ${className}`}
        style={{ height: `${height}px` }}
      >
        <p className="text-xs text-gray-400">No data</p>
      </div>
    );
  }

  return (
    <svg
      className={`inline-block ${className}`}
      style={{
        height: `${height}px`,
        width: '100%',
        minWidth: '100px'
      }}
      viewBox={`0 0 100 100`}
      preserveAspectRatio="none"
    >
      {/* Background fill area */}
      <defs>
        <linearGradient id={`sparklineGradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.2" />
          <stop offset="100%" stopColor={lineColor} stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Filled area under the line */}
      <path
        d={`${pathData} L 100,100 L 0,100 Z`}
        fill={`url(#sparklineGradient-${color})`}
      />

      {/* Line */}
      <path
        d={pathData}
        stroke={lineColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Data point dots */}
      {points.map((point, index) => {
        const [x, y] = point.split(',');
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="2"
            fill={lineColor}
            opacity={index === sparklineData.length - 1 ? 1 : 0.4}
          />
        );
      })}
    </svg>
  );
}

export default Sparkline;
