import React, { memo, forwardRef, useState } from 'react';
import { Check } from 'lucide-react';

const CompactCheckbox = memo(forwardRef(({ 
  label, 
  checked, 
  onChange, 
  className = '',
  disabled = false,
  error = null,
  helpText = null,
  size = 'md',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizeConfig = {
    sm: {
      checkboxSize: '1rem',
      fontSize: 'var(--font-size-xs)',
      iconSize: '0.75rem'
    },
    md: {
      checkboxSize: '1.125rem',
      fontSize: 'var(--font-size-sm)',
      iconSize: '0.875rem'
    },
    lg: {
      checkboxSize: '1.25rem',
      fontSize: 'var(--font-size-base)',
      iconSize: '1rem'
    }
  };

  const config = sizeConfig[size];

  const checkboxStyle = {
    width: config.checkboxSize,
    height: config.checkboxSize,
    backgroundColor: checked 
      ? (disabled ? 'var(--color-gray-300)' : 'var(--color-primary-600)')
      : (disabled ? 'var(--color-gray-100)' : 'var(--color-surface)'),
    borderColor: error 
      ? 'var(--color-danger)' 
      : (checked 
          ? (disabled ? 'var(--color-gray-300)' : 'var(--color-primary-600)')
          : (isFocused ? 'var(--color-primary-500)' : 'var(--color-input-border)')
        ),
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'var(--radius-sm)',
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: isFocused && !disabled ? (error ? 'var(--focus-ring-error)' : 'var(--focus-ring)') : 'none'
  };

  const handleMouseEnter = (e) => {
    if (!disabled && !checked) {
      e.currentTarget.querySelector('.checkbox').style.borderColor = 
        error ? 'var(--color-danger)' : 'var(--color-input-border-hover)';
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled && !isFocused && !checked) {
      e.currentTarget.querySelector('.checkbox').style.borderColor = 
        error ? 'var(--color-danger)' : 'var(--color-input-border)';
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label 
        className="flex items-start gap-3 cursor-pointer transition-opacity duration-200"
        style={{ 
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="sr-only"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          <div 
            className="checkbox flex items-center justify-center"
            style={checkboxStyle}
          >
            {checked && (
              <Check 
                className="transition-all duration-200"
                style={{ 
                  width: config.iconSize, 
                  height: config.iconSize,
                  color: disabled ? 'var(--color-gray-500)' : '#ffffff'
                }}
              />
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <span 
            className="font-medium leading-tight"
            style={{ 
              fontSize: config.fontSize,
              color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)'
            }}
          >
            {label}
          </span>
          {helpText && (
            <p 
              className="mt-1 leading-tight"
              style={{ 
                fontSize: 'var(--font-size-xs)',
                color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-tertiary)'
              }}
            >
              {helpText}
            </p>
          )}
        </div>
      </label>
      
      {/* Error message */}
      {error && (
        <div 
          className="flex items-center mt-1.5 text-xs"
          style={{ color: 'var(--color-danger)' }}
        >
          <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}));

CompactCheckbox.displayName = 'CompactCheckbox';

export default CompactCheckbox;