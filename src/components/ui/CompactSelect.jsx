import React, { memo, forwardRef, useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

const CompactSelect = memo(forwardRef(({ 
  label, 
  name,
  value, 
  onChange, 
  onBlur,
  onFocus,
  options = [], 
  required = false, 
  placeholder = 'Select option',
  className = '',
  error = null,
  disabled = false,
  size = 'md',
  helpText = null,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizeConfig = {
    sm: {
      height: 'var(--height-input-sm)',
      padding: '0 var(--spacing-3)',
      fontSize: 'var(--font-size-xs)',
      iconSize: '1rem'
    },
    md: {
      height: 'var(--height-input-md)',
      padding: '0 var(--spacing-4)',
      fontSize: 'var(--font-size-sm)',
      iconSize: '1.125rem'
    },
    lg: {
      height: 'var(--height-input-lg)',
      padding: '0 var(--spacing-5)',
      fontSize: 'var(--font-size-base)',
      iconSize: '1.25rem'
    }
  };

  const config = sizeConfig[size];
  
  const selectStyle = {
    height: config.height,
    padding: config.padding,
    paddingRight: 'var(--spacing-10)',
    fontSize: config.fontSize,
    backgroundColor: disabled ? 'var(--color-input-background-disabled)' : 'var(--color-input-background)',
    borderColor: error ? 'var(--color-danger)' : (isFocused ? 'var(--color-input-border-focus)' : 'var(--color-input-border)'),
    color: value ? 'var(--color-text-primary)' : 'var(--color-input-placeholder)',
    borderRadius: 'var(--radius-md)',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'all 0.2s ease',
    outline: 'none',
    appearance: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleMouseEnter = (e) => {
    if (!disabled && !isFocused) {
      e.target.style.borderColor = error ? 'var(--color-danger)' : 'var(--color-input-border-hover)';
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled && !isFocused) {
      e.target.style.borderColor = error ? 'var(--color-danger)' : 'var(--color-input-border)';
    }
  };

  const focusStyle = isFocused && !disabled ? {
    boxShadow: error ? 'var(--focus-ring-error)' : 'var(--focus-ring)'
  } : {};

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label 
          className="flex items-center justify-between mb-2"
          style={{ 
            fontSize: 'var(--font-size-sm)',
            fontWeight: '500',
            color: 'var(--color-text-secondary)'
          }}
        >
          <span className="flex items-center">
            {label}
            {required && (
              <span 
                className="ml-1 text-sm font-bold"
                style={{ color: '#dc2626' }}
              >
                *
              </span>
            )}
          </span>
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={disabled}
          className="w-full transition-all duration-200"
          style={{
            ...selectStyle,
            ...focusStyle
          }}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option 
              key={option.value || index} 
              value={option.value}
              disabled={option.disabled}
              style={{
                backgroundColor: 'var(--color-surface)',
                color: option.disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
                padding: 'var(--spacing-2) var(--spacing-3)'
              }}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Right side icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 pointer-events-none">
          {error && (
            <AlertCircle 
              style={{ 
                width: config.iconSize, 
                height: config.iconSize,
                color: 'var(--color-danger)'
              }}
            />
          )}
          <ChevronDown 
            style={{ 
              width: config.iconSize, 
              height: config.iconSize,
              color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-quaternary)',
              transition: 'transform 0.2s ease',
              transform: isFocused ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </div>
      </div>
      
      {/* Help text and error message */}
      <div className="mt-1.5 min-h-[1.25rem]">
        {error ? (
          <div 
            className="flex items-center text-xs"
            style={{ color: 'var(--color-danger)' }}
          >
            <AlertCircle className="w-3 h-3 mr-1.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        ) : helpText ? (
          <p 
            className="text-xs"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            {helpText}
          </p>
        ) : null}
      </div>
    </div>
  );
}));

CompactSelect.displayName = 'CompactSelect';

export default CompactSelect;
