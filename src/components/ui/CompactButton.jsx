import React, { memo } from 'react';

const CompactButton = memo(({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'px-4 py-1.5 text-xs font-medium rounded transition-colors mr-2';
  
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-button-primary)',
      color: 'var(--color-button-primary-text)',
      border: 'none'
    },
    secondary: {
      backgroundColor: 'var(--color-button-secondary)',
      color: 'var(--color-button-secondary-text)',
      border: 'none'
    },
    danger: {
      backgroundColor: 'var(--color-button-danger)',
      color: 'var(--color-button-danger-text)',
      border: 'none'
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} ${className}`}
      style={disabled ? {
        backgroundColor: 'var(--color-button-disabled)',
        color: 'var(--color-button-disabled-text)'
      } : variantStyles[variant]}
    >
      {children}
    </button>
  );
});

CompactButton.displayName = 'CompactButton';

export const CompactPrimaryButton = memo((props) => <CompactButton {...props} variant="primary" />);
export const CompactSecondaryButton = memo((props) => <CompactButton {...props} variant="secondary" />);
export const CompactDangerButton = memo((props) => <CompactButton {...props} variant="danger" />);

CompactPrimaryButton.displayName = 'CompactPrimaryButton';
CompactSecondaryButton.displayName = 'CompactSecondaryButton';
CompactDangerButton.displayName = 'CompactDangerButton';

export default CompactButton;