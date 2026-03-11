import React, { useState } from 'react';
import Card from '../common/Card';
import { AlertCircle, AlertTriangle, Info, Check, X } from 'lucide-react';

/**
 * AlertsNotifications Component - Displays alerts and notifications
 * Categories: Critical, Warning, Info
 *
 * @param {Array} alerts - Array of alert objects: {id, type, title, message, timestamp, action}
 * @param {function} onActionClick - Callback for action buttons
 */
export function AlertsNotifications({ alerts = [], onActionClick }) {
  const [dismissedAlerts, setDismissedAlerts] = useState(new Set());

  const alertConfig = {
    critical: {
      icon: AlertCircle,
      bg: 'bg-red-50',
      border: 'border-red-200',
      title: 'text-red-700',
      text: 'text-red-600',
      badge: 'bg-red-100 text-red-700'
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      title: 'text-yellow-700',
      text: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-700'
    },
    info: {
      icon: Info,
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      title: 'text-blue-700',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700'
    }
  };

  // Group alerts by type
  const groupedAlerts = {
    critical: alerts.filter(a => a.type === 'critical' && !dismissedAlerts.has(a.id)),
    warning: alerts.filter(a => a.type === 'warning' && !dismissedAlerts.has(a.id)),
    info: alerts.filter(a => a.type === 'info' && !dismissedAlerts.has(a.id))
  };

  const handleDismiss = (alertId) => {
    const newDismissed = new Set(dismissedAlerts);
    newDismissed.add(alertId);
    setDismissedAlerts(newDismissed);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);

    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  const totalAlerts =
    groupedAlerts.critical.length + groupedAlerts.warning.length + groupedAlerts.info.length;

  if (totalAlerts === 0) {
    return (
      <Card className="border-t-4" style={{ borderTopColor: 'var(--color-success-500)' }}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">All systems operational</p>
            <p className="text-sm text-gray-600">No active alerts or issues</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-t-4 overflow-hidden" style={{ borderTopColor: 'var(--color-warning-500)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Alerts & Notifications</h3>
        <div className="flex items-center gap-2">
          {groupedAlerts.critical.length > 0 && (
            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
              {groupedAlerts.critical.length} Critical
            </span>
          )}
          {groupedAlerts.warning.length > 0 && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
              {groupedAlerts.warning.length} Warning
            </span>
          )}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {/* Critical Alerts */}
        {groupedAlerts.critical.map((alert) => {
          const config = alertConfig.critical;
          const Icon = config.icon;

          return (
            <div key={alert.id} className={`p-3 rounded-lg border-l-4 border-red-500 ${config.bg}`}>
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.text}`} />
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${config.title}`}>{alert.title}</p>
                  <p className={`text-xs ${config.text} mt-1`}>{alert.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">{formatTime(alert.timestamp)}</p>
                    <div className="flex items-center gap-1">
                      {alert.action && (
                        <button
                          onClick={() => onActionClick?.(alert)}
                          className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${config.badge}`}
                        >
                          {alert.action}
                        </button>
                      )}
                      <button
                        onClick={() => handleDismiss(alert.id)}
                        className="p-1 hover:bg-red-100 rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Warning Alerts */}
        {groupedAlerts.warning.map((alert) => {
          const config = alertConfig.warning;
          const Icon = config.icon;

          return (
            <div key={alert.id} className={`p-3 rounded-lg border-l-4 border-yellow-500 ${config.bg}`}>
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.text}`} />
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${config.title}`}>{alert.title}</p>
                  <p className={`text-xs ${config.text} mt-1`}>{alert.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">{formatTime(alert.timestamp)}</p>
                    {alert.action && (
                      <button
                        onClick={() => onActionClick?.(alert)}
                        className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${config.badge}`}
                      >
                        {alert.action}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Info Alerts */}
        {groupedAlerts.info.map((alert) => {
          const config = alertConfig.info;
          const Icon = config.icon;

          return (
            <div key={alert.id} className={`p-3 rounded-lg border-l-4 border-blue-500 ${config.bg}`}>
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.text}`} />
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${config.title}`}>{alert.title}</p>
                  <p className={`text-xs ${config.text} mt-1`}>{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatTime(alert.timestamp)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default AlertsNotifications;
