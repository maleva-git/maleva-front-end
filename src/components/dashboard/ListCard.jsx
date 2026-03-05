import Card from '../common/Card';
import { ChevronRight } from 'lucide-react';

export function ListCard({
  title,
  items = [],
  onItemClick = null,
  showViewMore = true
}) {
  return (
    <Card padding="default">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>
        {showViewMore && (
          <button className="text-xs font-semibold px-3 py-1 rounded-lg transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--color-primary-50)',
              color: 'var(--color-primary-700)'
            }}
          >
            View All
          </button>
        )}
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg transition-colors hover:opacity-80 cursor-pointer"
            onClick={() => onItemClick && onItemClick(item)}
            style={{
              backgroundColor: 'var(--color-gray-50)',
            }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {item.name}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-quaternary)' }}>
                {item.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-3 ml-4">
              {item.value && (
                <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {item.value}
                </span>
              )}
              {item.badge && (
                <span
                  className="text-xs px-2 py-1 rounded font-semibold"
                  style={{
                    backgroundColor: item.badgeColor || 'var(--color-primary-100)',
                    color: item.badgeTextColor || 'var(--color-primary-700)',
                  }}
                >
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-4 h-4" style={{ color: 'var(--color-text-quaternary)' }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ListCard;
