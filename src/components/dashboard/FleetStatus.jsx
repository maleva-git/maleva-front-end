import { Truck, MapPin, Fuel, Wrench, Clock } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import EmptyState from '../common/EmptyState';

const statusConfig = {
  active: { variant: 'success', label: 'Active', color: 'bg-green-500' },
  idle: { variant: 'warning', label: 'Idle', color: 'bg-yellow-500' },
  maintenance: { variant: 'error', label: 'Maintenance', color: 'bg-red-500' },
  offline: { variant: 'gray', label: 'Offline', color: 'bg-gray-500' }
};

export function FleetStatus({ vehicles = [] }) {
  if (vehicles.length === 0) {
    return (
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fleet Status</h3>
        <EmptyState 
          icon={Truck}
          title="No vehicles"
          description="No vehicle data available"
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Fleet Status</h3>
        <Badge variant="gray">{vehicles.length} vehicles</Badge>
      </div>
      
      <div className="space-y-4">
        {vehicles.map((vehicle) => {
          const statusInfo = statusConfig[vehicle.status] || statusConfig.offline;
          
          return (
            <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${statusInfo.color}`}>
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{vehicle.id}</span>
                      <Badge variant={statusInfo.variant} size="sm">
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{vehicle.driver}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {vehicle.lastUpdate}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">{vehicle.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Fuel className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{vehicle.fuelLevel}% fuel</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Wrench className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">{vehicle.nextMaintenance}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default FleetStatus;