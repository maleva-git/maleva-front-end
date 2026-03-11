import { User, Star, Target, TrendingUp } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import EmptyState from '../common/EmptyState';

export function EmployeePerformance({ employees = [] }) {
  if (employees.length === 0) {
    return (
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Performance</h3>
        <EmptyState 
          icon={User}
          title="No employee data"
          description="No performance data available"
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Employee Performance</h3>
        <Badge variant="gray">{employees.length} employees</Badge>
      </div>
      
      <div className="max-h-96 overflow-y-auto space-y-4">
        {employees.map((employee) => {
          const completionRate = (employee.completedJobs / employee.monthlyTarget) * 100;
          const isOnTarget = completionRate >= 90;
          
          return (
            <div key={employee.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{employee.name}</span>
                      {isOnTarget && (
                        <Badge variant="success" size="sm">On Target</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    {employee.rating}/5.0
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-400 mb-1">
                    <Target className="w-3 h-3 mr-1" />
                    <span className="text-xs">Completed</span>
                  </div>
                  <p className="font-medium text-gray-900">{employee.completedJobs}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-400 mb-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span className="text-xs">Target</span>
                  </div>
                  <p className="font-medium text-gray-900">{employee.monthlyTarget}</p>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">On-Time %</div>
                  <p className="font-medium text-gray-900">{employee.onTimeDelivery}%</p>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Progress</div>
                  <p className="font-medium text-gray-900">{Math.round(completionRate)}%</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${isOnTarget ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${Math.min(completionRate, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default EmployeePerformance;