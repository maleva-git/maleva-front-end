import { useState } from 'react';
import { MoreHorizontal, Plus, FileText, Receipt, Truck, Clock, Wrench, Calendar, DollarSign, BarChart3, Download, Users, Package } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import IconButton from '../common/IconButton';

const iconMap = {
  Plus, FileText, Receipt, Truck, Clock, Wrench, Calendar, DollarSign, BarChart3, Download, Users, Package
};

export function QuickActionBar({ actions = [], onActionClick }) {
  const [showMore, setShowMore] = useState(false);
  
  // Split actions into primary (first 6) and secondary (rest)
  const primaryActions = actions.filter(action => action.primary).slice(0, 4);
  const secondaryActions = actions.filter(action => !action.primary);

  const handleActionClick = (action) => {
    onActionClick?.(action);
    setShowMore(false);
  };

  return (
    <Card className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Primary Actions - Always Visible */}
        {primaryActions.map((action) => {
          const Icon = iconMap[action.icon] || Plus;
          return (
            <Button
              key={action.id}
              onClick={() => handleActionClick(action)}
              className="flex items-center space-x-2"
            >
              <Icon className="w-4 h-4" />
              <span>{action.label}</span>
            </Button>
          );
        })}

        {/* More Actions Button */}
        {secondaryActions.length > 0 && (
          <div className="relative">
            <IconButton
              icon={MoreHorizontal}
              variant="ghost"
              onClick={() => setShowMore(!showMore)}
              className="border border-gray-300"
            />
            
            {/* Dropdown Menu */}
            {showMore && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  {secondaryActions.map((action) => {
                    const Icon = iconMap[action.icon] || Plus;
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleActionClick(action)}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <div className={`p-1.5 rounded ${action.color} mr-3`}>
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {showMore && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowMore(false)}
        />
      )}
    </Card>
  );
}

export default QuickActionBar;