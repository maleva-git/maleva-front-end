import { createElement } from 'react';
import Card from '../common/Card';

export function ActionCard({ 
  label, 
  icon: Icon, 
  color = 'bg-blue-500',
  onClick,
  className = ''
}) {
  return (
    <Card 
      className={`cursor-pointer hover:shadow-md transition-all duration-200 p-4 ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`p-3 rounded-full ${color}`}>
          {createElement(Icon, { className: 'w-6 h-6 text-white' })}
        </div>
        <span className="text-sm font-medium text-gray-900">{label}</span>
      </div>
    </Card>
  );
}

export default ActionCard;
