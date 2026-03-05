import { Clock, MapPin, User, Truck } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import EmptyState from '../common/EmptyState';

const statusConfig = {
  completed: { variant: 'success', label: 'Completed' },
  'in-progress': { variant: 'info', label: 'In Progress' },
  pending: { variant: 'warning', label: 'Pending' },
  scheduled: { variant: 'gray', label: 'Scheduled' }
};

export function PickupList({ title, pickups = [], emptyMessage = 'No pickups scheduled' }) {
  if (pickups.length === 0) {
    return (
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <EmptyState 
          icon={Truck}
          title="No pickups"
          description={emptyMessage}
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Badge variant="gray">{pickups.length} items</Badge>
      </div>
      
      <div className="max-h-96 overflow-y-auto space-y-4">
        {pickups.map((pickup) => {
          const statusInfo = statusConfig[pickup.status] || statusConfig.pending;
          
          return (
            <div key={pickup.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{pickup.id}</span>
                    <Badge variant={statusInfo.variant} size="sm">
                      {statusInfo.label}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{pickup.customer}</p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {pickup.time}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">{pickup.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{pickup.driver}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Truck className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{pickup.vehicle}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default PickupList;