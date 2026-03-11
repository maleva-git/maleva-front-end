import Card from '../common/Card';

export function QuickActionCard({
  title,
  actions = []
}) {
  return (
    <Card padding="default">
      <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="p-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-md transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              backgroundColor: action.color || 'var(--color-primary-500)',
              color: 'white'
            }}
            onClick={action.onClick}
          >
            {action.icon && <action.icon className="w-4 h-4" />}
            {action.label}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default QuickActionCard;
