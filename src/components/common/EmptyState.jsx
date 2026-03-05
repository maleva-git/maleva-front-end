import { createElement } from 'react';
import { Package } from 'lucide-react';

export function EmptyState({ 
  icon: Icon = Package,
  title = 'No data available',
  description = 'There is no data to display at the moment.',
  action = null,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        {createElement(Icon, { className: 'w-6 h-6 text-gray-400' })}
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4 max-w-sm">{description}</p>
      {action && action}
    </div>
  );
}

export default EmptyState;
