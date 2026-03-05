import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';

const alertVariants = {
  success: {
    container: 'bg-green-50 border-green-200 text-green-800',
    icon: CheckCircle,
    iconColor: 'text-green-500',
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-800',
    icon: XCircle,
    iconColor: 'text-red-500',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    icon: AlertCircle,
    iconColor: 'text-yellow-500',
  },
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: Info,
    iconColor: 'text-blue-500',
  },
};

export function Alert({ 
  variant = 'info', 
  title, 
  message, 
  dismissible = false, 
  onDismiss,
  className = '' 
}) {
  const config = alertVariants[variant];
  const Icon = config.icon;

  return (
    <div className={`border rounded-lg p-4 ${config.container} ${className}`}>
      <div className="flex items-start">
        <Icon className={`w-5 h-5 ${config.iconColor} mt-0.5 mr-3 flex-shrink-0`} />
        <div className="flex-1">
          {title && (
            <h4 className="font-medium mb-1">{title}</h4>
          )}
          {message && (
            <p className="text-sm">{message}</p>
          )}
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export function AlertList({ alerts, onDismiss }) {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <Alert
          key={alert.id || index}
          variant={alert.variant}
          title={alert.title}
          message={alert.message}
          dismissible={alert.dismissible}
          onDismiss={() => onDismiss && onDismiss(alert.id || index)}
        />
      ))}
    </div>
  );
}