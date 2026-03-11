import { clsx } from 'clsx';

export function Card({ 
  children, 
  className = '', 
  padding = 'default',
  elevation = 'sm',
  hover = false,
  interactive = false,
  ...props 
}) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)',
    borderRadius: 'var(--radius-xl)',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: {
      none: 'none',
      sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
      md: '0 8px 16px rgba(15, 23, 42, 0.08)',
      lg: '0 16px 24px rgba(15, 23, 42, 0.10)',
    }[elevation] || '0 1px 3px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.2s ease'
  };

  return (
    <div 
      className={clsx(
        paddingStyles[padding],
        (hover || interactive) && 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        className
      )}
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
