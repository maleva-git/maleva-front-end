import { createElement } from 'react';
import { clsx } from 'clsx';

export function IconButton({ 
  icon: Icon, 
  variant = 'ghost', 
  size = 'md',
  className = '',
  ...props 
}) {
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const variantClasses = {
    ghost: 'hover:bg-gray-100 text-gray-600 hover:text-gray-900',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white'
  };

  return (
    <button 
      className={clsx(
        'inline-flex items-center justify-center rounded-md transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {createElement(Icon, { className: iconSizes[size] })}
    </button>
  );
}

export default IconButton;
