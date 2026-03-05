import { clsx } from 'clsx';

const badgeVariants = {
  success: {
    backgroundColor: '#dcfce7',
    color: '#15803d',
    borderColor: '#bbf7d0'
  },
  warning: {
    backgroundColor: '#fef3c7',
    color: '#b45309',
    borderColor: '#fde68a'
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    borderColor: '#fecaca'
  },
  info: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderColor: '#bfdbfe'
  },
  gray: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    borderColor: '#e2e8f0'
  },
  purple: {
    backgroundColor: '#f3e8ff',
    color: '#7e22ce',
    borderColor: '#e9d5ff'
  }
};

const badgeSizes = {
  sm: { padding: '0.375rem 0.625rem', fontSize: '0.75rem' },
  md: { padding: '0.5rem 0.875rem', fontSize: '0.875rem' },
  lg: { padding: '0.625rem 1rem', fontSize: '1rem' }
};

export function Badge({ 
  children, 
  variant = 'gray', 
  size = 'sm',
  className = '',
  ...props 
}) {
  const variantStyle = badgeVariants[variant];
  const sizeStyle = badgeSizes[size];

  return (
    <span 
      className={clsx(
        'inline-flex items-center font-semibold rounded-full border shadow-sm',
        className
      )}
      style={{
        ...variantStyle,
        ...sizeStyle,
        borderRadius: '9999px',
        borderWidth: '1px',
        borderStyle: 'solid',
        fontWeight: '600',
        letterSpacing: '0.01em'
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;