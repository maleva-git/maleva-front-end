import { useRouteError, useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '../components/common/Button';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="text-center px-6 max-w-2xl">
        <div 
          className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-danger-light)' }}
        >
          <AlertTriangle 
            className="w-12 h-12" 
            style={{ color: 'var(--color-danger-600)' }}
          />
        </div>

        <h1 
          className="text-3xl font-bold mb-3"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Oops! Something went wrong
        </h1>

        <p 
          className="text-lg mb-2"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          We encountered an unexpected error. Please try again.
        </p>

        {error?.message && (
          <p 
            className="text-sm mb-8 px-4 py-2 rounded-lg"
            style={{ 
              backgroundColor: 'var(--color-danger-light)',
              color: 'var(--color-danger-700)'
            }}
          >
            {error.message}
          </p>
        )}

        <div className="flex items-center justify-center gap-3 mt-8">
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Reload Page
          </Button>
          <Button 
            variant="primary" 
            onClick={() => navigate('/dashboard')}
            leftIcon={<Home className="w-4 h-4" />}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
