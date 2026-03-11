import React, { memo, forwardRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';

const CompactTextArea = memo(forwardRef(({ 
  label, 
  name,
  value, 
  onChange, 
  onBlur,
  onFocus,
  placeholder = '', 
  required = false, 
  className = '',
  error = null,
  disabled = false,
  rows = 3,
  maxLength = null,
  helpText = null,
  resize = 'none',
  autoComplete = 'off',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const textareaStyle = {
    minHeight: `${rows * 1.5 + 1}rem`,
    padding: 'var(--spacing-3) var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    backgroundColor: disabled ? 'var(--color-input-background-disabled)' : 'var(--color-input-background)',
    borderColor: error ? 'var(--color-danger)' : (isFocused ? 'var(--color-input-border-focus)' : (required ? '#fc001d' : 'var(--color-input-border)')),
    color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
    borderRadius: 'var(--radius-md)',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'all 0.2s ease',
    outline: 'none',
    resize: resize,
    lineHeight: 'var(--line-height-normal)',
    fontFamily: 'inherit'
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
          {maxLength && (
            <span 
              className="text-xs"
              style={{ 
                color: value?.length > maxLength * 0.9 
                  ? 'var(--color-warning)' 
                  : 'var(--color-text-quaternary)'
              }}
            >
              {value?.length || 0}/{maxLength}
            </span>
          )}
        </label>
      )}
      
      <div className="relative">
        <textarea
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className="w-full transition-all duration-200"
          style={{
            ...textareaStyle,
            ...focusStyle
          }}
          {...props}
        />
        
        {/* Error indicator */}
        {error && (
          <div className="absolute top-3 right-3">
            <AlertCircle 
              style={{ 
                width: '1.125rem', 
                height: '1.125rem',
                color: 'var(--color-danger)'
              }}
            />
          </div>
        )}
      </div>
      
      {/* Help text and error message */}
      <div className="mt-1.5 min-h-[1.25rem]">
        {error ? (
          <div 
            className="flex items-start text-xs"
            style={{ color: 'var(--color-danger)' }}
          >
            <AlertCircle className="w-3 h-3 mr-1.5 flex-shrink-0 mt-0.5" />
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

CompactTextArea.displayName = 'CompactTextArea';

export default CompactTextArea;