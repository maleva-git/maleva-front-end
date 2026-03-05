import { Construction, ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';

export default function UnderDevelopment() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="text-center px-6 max-w-2xl">
        {/* Icon */}
        <div 
          className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-warning-light)' }}
        >
          <Construction 
            className="w-12 h-12" 
            style={{ color: 'var(--color-warning-600)' }}
          />
        </div>

        {/* Title */}
        <h1 
          className="text-3xl font-bold mb-3"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Page Under Development
        </h1>

        {/* Description */}
        <p 
          className="text-lg mb-8"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          This feature is currently being developed and will be available soon.
          <br />
          Thank you for your patience.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Go Back
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
