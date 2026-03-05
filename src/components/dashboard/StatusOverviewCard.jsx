import Card from '../common/Card';

export function StatusOverviewCard({
  title,
  statuses = []
}) {
  const total = statuses.reduce((sum, status) => sum + status.count, 0);

  return (
    <Card padding="default">
      <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </h3>

      <div className="space-y-3">
        {statuses.map((status, index) => {
          const percentage = total > 0 ? (status.count / total) * 100 : 0;
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  {status.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: status.color || 'var(--color-text-primary)' }}>
                    {status.count}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-text-quaternary)' }}>
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-gray-200)' }}>
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: status.color || 'var(--color-primary-500)'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="mt-5 pt-5 border-t" style={{ borderColor: 'var(--color-gray-200)' }}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            Total
          </p>
          <p className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {total}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default StatusOverviewCard;
