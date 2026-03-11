import { Loader2 } from 'lucide-react';

export function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
}

export function LoadingPage({ message = 'Loading...' }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <LoadingSpinner size="xl" className="text-blue-600 mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

export function LoadingCard({ message = 'Loading...' }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex flex-col items-center justify-center">
        <LoadingSpinner size="lg" className="text-blue-600 mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}