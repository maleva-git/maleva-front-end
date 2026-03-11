import React, { memo, forwardRef, useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

const TextInput = memo(forwardRef(({ 
  label, 
  name,
  value, 
  onChange, 
  onBlur,
  onFocus,
  placeholder = '', 
  required = false, 
  type = 'text',
  className = '',
  icon = null,
  error = null,
  disabled = false,
  size = 'md',
  helpText = null,
  maxLength = null,
  autoComplete = 'off',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

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
  
  const inputStyle = {
    height: config.height,
    padding: config.padding,
    paddingRight: (icon || isPassword) ? 'var(--spacing-10)' : config.padding.split(' ')[1],
    fontSize: config.fontSize,
    backgroundColor: disabled ? 'var(--color-input-background-disabled)' : 'var(--color-input-background)',
    borderColor: error ? 'var(--color-danger)' : (isFocused ? 'var(--color-input-border-focus)' : 'var(--color-input-border)'),
    color: disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
    borderRadius: 'var(--radius-md)',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: 'all 0.2s ease',
    outline: 'none'
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
              style={{ color: 'var(--color-text-quaternary)' }}
            >
              {value?.length || 0}/{maxLength}
            </span>
          )}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className="w-full transition-all duration-200"
          style={{
            ...inputStyle,
            ...focusStyle
          }}
          {...props}
        />
        
        {/* Right side icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {error && (
            <AlertCircle 
              style={{ 
                width: config.iconSize, 
                height: config.iconSize,
                color: 'var(--color-danger)'
              }}
            />
          )}
          {!error && icon && (
            <span 
              style={{ 
                fontSize: config.iconSize,
                color: 'var(--color-text-quaternary)'
              }}
            >
              {icon}
            </span>
          )}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 rounded transition-colors duration-200"
              style={{
                color: 'var(--color-text-quaternary)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-hover-overlay)';
                e.target.style.color = 'var(--color-text-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--color-text-quaternary)';
              }}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff style={{ width: config.iconSize, height: config.iconSize }} />
              ) : (
                <Eye style={{ width: config.iconSize, height: config.iconSize }} />
              )}
            </button>
          )}
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

TextInput.displayName = 'TextInput';

export default TextInput;