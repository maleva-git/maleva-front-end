import { AlertCircle, Calendar, Users, Clock } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import EmptyState from '../common/EmptyState';

const priorityConfig = {
  high: { variant: 'error', label: 'High Priority', color: 'bg-red-500' },
  medium: { variant: 'warning', label: 'Medium', color: 'bg-yellow-500' },
  low: { variant: 'gray', label: 'Low', color: 'bg-gray-500' }
};

const typeConfig = {
  Delivery: { icon: Clock, color: 'text-blue-600' },
  Pickup: { icon: Calendar, color: 'text-green-600' },
  Maintenance: { icon: AlertCircle, color: 'text-orange-600' }
};

export function PendingJobs({ jobs = [] }) {
  if (jobs.length === 0) {
    return (
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Jobs</h3>
        <EmptyState 
          icon={Clock}
          title="No pending jobs"
          description="All jobs are up to date"
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Pending Jobs</h3>
        <Badge variant="warning">{jobs.length} pending</Badge>
      </div>
      
      <div className="space-y-4">
        {jobs.map((job) => {
          const priorityInfo = priorityConfig[job.priority] || priorityConfig.low;
          const typeInfo = typeConfig[job.type] || typeConfig.Delivery;
          const TypeIcon = typeInfo.icon;
          
          return (
            <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${priorityInfo.color}`}>
                    <TypeIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{job.id}</span>
                      <Badge variant={priorityInfo.variant} size="sm">
                        {priorityInfo.label}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{job.customer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(job.dueDate).toLocaleDateString()}
                  </div>
                  <span className={`text-xs font-medium ${typeInfo.color}`}>
                    {job.type}
                  </span>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-sm text-gray-600">{job.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Assigned to: {job.assignedTo}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Due: {new Date(job.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default PendingJobs;