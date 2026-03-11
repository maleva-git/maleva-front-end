import React from 'react';

const Checkbox = ({ 
  label, 
  checked, 
  onChange, 
  className = ''
}) => {
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <label className="flex items-center cursor-pointer text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <span 
          className={`w-4.5 h-4.5 border-2 rounded mr-2 relative transition-all duration-200 flex items-center justify-center ${
            checked ? 'border-blue-500' : 'border-gray-300'
          }`}
          style={{
            backgroundColor: checked ? 'var(--color-primary)' : 'transparent',
            borderColor: checked ? 'var(--color-primary)' : 'var(--color-input-border)'
          }}
        >
          {checked && (
            <span className="text-white text-xs font-bold">✓</span>
          )}
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;