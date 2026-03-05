import { clsx } from 'clsx';
import { forwardRef } from 'react';

const buttonVariants = {
  primary: {
    base: 'text-white border-transparent font-medium',
    background: 'var(--color-button-primary)',
    hover: 'var(--color-button-primary-hover)',
    active: 'var(--color-button-primary-active)',
    focus: 'var(--focus-ring)',
    textColor: '#ffffff'
  },
  secondary: {
    base: 'text-white border-transparent font-medium',
    background: 'var(--color-button-secondary)',
    hover: 'var(--color-button-secondary-hover)',
    active: 'var(--color-gray-800)',
    focus: 'var(--focus-ring)'
  },
  outline: {
    base: 'border font-medium',
    background: 'var(--color-button-outline)',
    hover: 'var(--color-button-outline-hover)',
    active: 'var(--color-gray-100)',
    border: 'var(--color-button-outline-border)',
    text: 'var(--color-button-outline-text)',
    focus: 'var(--focus-ring)'
  },
  ghost: {
    base: 'border-transparent font-medium',
    background: 'var(--color-button-ghost)',
    hover: 'var(--color-button-ghost-hover)',
    active: 'var(--color-gray-200)',
    text: 'var(--color-button-ghost-text)',
    focus: 'var(--focus-ring)'
  },
  danger: {
    base: 'text-white border-transparent font-medium',
    background: 'var(--color-button-danger)',
    hover: 'var(--color-button-danger-hover)',
    active: 'var(--color-danger-800)',
    focus: 'var(--focus-ring-error)'
  }
};

const buttonSizes = {
  sm: {
    height: 'var(--height-button-sm)',
    padding: '0 var(--spacing-3)',
    fontSize: 'var(--font-size-xs)',
    gap: 'var(--spacing-1)'
  },
  md: {
    height: 'var(--height-button-md)',
    padding: '0 var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    gap: 'var(--spacing-2)'
  },
  lg: {
    height: 'var(--height-button-lg)',
    padding: '0 var(--spacing-6)',
    fontSize: 'var(--font-size-base)',
    gap: 'var(--spacing-2)'
  }
};

export const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  ...props 
}, ref) => {
  const variantConfig = buttonVariants[variant];
  const sizeConfig = buttonSizes[size];

  const buttonStyle = {
    height: sizeConfig.height,
    padding: sizeConfig.padding,
    fontSize: sizeConfig.fontSize,
    gap: sizeConfig.gap,
    backgroundColor: (disabled || loading) ? 'var(--color-button-disabled)' : variantConfig.background,
    borderColor: variantConfig.border || 'transparent',
    color: disabled ? 'var(--color-button-disabled-text)' : (variantConfig.textColor || variantConfig.text || '#ffffff'),
    borderRadius: 'var(--radius-md)',
    transition: 'all 0.2s ease'
  };

  const handleMouseEnter = (e) => {
    if (!disabled && !loading) {
      e.target.style.backgroundColor = variantConfig.hover;
      if (variant === 'outline') {
        e.target.style.borderColor = 'var(--color-gray-400)';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled && !loading) {
      e.target.style.backgroundColor = variantConfig.background;
      if (variant === 'outline') {
        e.target.style.borderColor = variantConfig.border;
      }
    }
  };

  const handleMouseDown = (e) => {
    if (!disabled && !loading) {
      e.target.style.backgroundColor = variantConfig.active;
    }
  };

  const handleMouseUp = (e) => {
    if (!disabled && !loading) {
      e.target.style.backgroundColor = variantConfig.hover;
    }
  };

  const handleFocus = (e) => {
    if (!disabled && !loading) {
      e.target.style.boxShadow = variantConfig.focus;
      e.target.style.outline = 'none';
    }
  };

  const handleBlur = (e) => {
    e.target.style.boxShadow = 'none';
    e.target.style.outline = 'none';
  };

  return (
    <button 
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center border transition-all duration-200',
        'focus:outline-none focus-visible:outline-none',
        'disabled:cursor-not-allowed',
        'active:scale-[0.98]',
        variantConfig.base,
        className
      )}
      style={buttonStyle}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin" 
          style={{ width: sizeConfig.fontSize, height: sizeConfig.fontSize }}
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && (
        <span style={{ fontSize: sizeConfig.fontSize }}>
          {leftIcon}
        </span>
      )}
      {children}
      {!loading && rightIcon && (
        <span style={{ fontSize: sizeConfig.fontSize }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;