import React, { useState } from 'react';
import Card from '../common/Card';
import { CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';
import { Sparkline } from './Sparkline';

/**
 * StatusDashboard Component - Comprehensive status overview
 * Shows active, completed, pending, and delayed status with drill-down capability
 */
export function StatusDashboard({ statuses = [] }) {
  const [expandedStatus, setExpandedStatus] = useState(null);

  // Ensure we have status categories
  const defaultStatuses = [
    { type: 'active', label: 'Active', count: 0, icon: CheckCircle, color: 'green', items: [] },
    { type: 'completed', label: 'Completed', count: 0, icon: CheckCircle, color: 'blue', items: [] },
    { type: 'pending', label: 'Pending', count: 0, icon: Clock, color: 'yellow', items: [] },
    { type: 'delayed', label: 'Delayed', count: 0, icon: AlertCircle, color: 'red', items: [] }
  ];

  const mergedStatuses = defaultStatuses.map(defaultStatus => {
    const userStatus = statuses.find(s => s.type === defaultStatus.type) || {};
    return { ...defaultStatus, ...userStatus };
  });

  const totalCount = mergedStatuses.reduce((sum, s) => sum + s.count, 0);

  const statusColorMap = {
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      badge: 'bg-green-100 text-green-800'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800'
    },
    yellow: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      badge: 'bg-yellow-100 text-yellow-800'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      badge: 'bg-red-100 text-red-800'
    }
  };

  return (
    <Card className="border-t-4" style={{ borderTopColor: 'var(--color-primary-500)' }}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Status Overview</h3>
        <p className="text-xs text-gray-600 mt-1">Task and job status distribution</p>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {mergedStatuses.map((status) => {
          const colors = statusColorMap[status.color];
          const Icon = status.icon;
          const percentage = totalCount > 0 ? ((status.count / totalCount) * 100).toFixed(1) : 0;

          return (
            <button
              key={status.type}
              onClick={() => setExpandedStatus(expandedStatus === status.type ? null : status.type)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${colors.bg} ${colors.border}`}
            >
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-1 ${colors.text}`} />
                <div className="flex-1 text-left">
                  <p className={`text-xs font-semibold uppercase ${colors.text}`}>{status.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{status.count}</p>
                  <p className="text-xs text-gray-600 mt-1">{percentage}% of total</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Status Details Breakdown */}
      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mergedStatuses.map((status) => {
            const colors = statusColorMap[status.color];
            const percentage = totalCount > 0 ? ((status.count / totalCount) * 100).toFixed(1) : 0;

            return (
              <div key={status.type} className={`p-3 rounded-lg ${colors.bg}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-xs font-semibold ${colors.text}`}>{status.label}</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${colors.badge}`}>
                    {percentage}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      status.color === 'green'
                        ? 'bg-green-500'
                        : status.color === 'blue'
                        ? 'bg-blue-500'
                        : status.color === 'yellow'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expandable Items List */}
      {expandedStatus && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            {mergedStatuses.find(s => s.type === expandedStatus)?.label} Items
          </h4>

          {mergedStatuses.find(s => s.type === expandedStatus)?.items?.length > 0 ? (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {mergedStatuses
                .find(s => s.type === expandedStatus)
                ?.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{item.name || `Item ${idx + 1}`}</p>
                        {item.description && (
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                        )}
                      </div>
                      {item.priority && (
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ml-2 ${
                            item.priority === 'high'
                              ? 'bg-red-100 text-red-800'
                              : item.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {item.priority}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600 text-center py-4">No items in this status</p>
          )}
        </div>
      )}
    </Card>
  );
}

export default StatusDashboard;
