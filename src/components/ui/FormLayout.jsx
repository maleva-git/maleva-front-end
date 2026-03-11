import { memo } from 'react';

export const FormSection = memo(({ title, children, className = "", description = null, icon = null }) => {
  return (
    <div 
      className={`rounded-xl border mb-6 overflow-hidden shadow-sm ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      {title && (
        <div 
          className="px-6 py-4 border-b"
          style={{ 
            borderColor: 'var(--color-border-light)',
            backgroundColor: 'var(--color-surface)'
          }}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <div 
                className="p-2 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--color-primary-100)',
                  color: 'var(--color-primary-600)'
                }}
              >
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 
                className="text-base font-bold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {title}
              </h3>
              {description && (
                <p 
                  className="text-xs mt-1"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
});

export const FormGrid = memo(({ children, cols = 2, gap = 'gap-6', className = '' }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
  };

  return (
    <div className={`grid ${gridCols[cols]} ${gap} ${className}`}>
      {children}
    </div>
  );
});

export const ActionBar = memo(({ children, className = "", position = "right", sticky = false, bordered = true }) => {
  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between'
  };

  const baseClasses = `px-6 py-4 flex items-center gap-3 ${justifyClass[position]} ${className}`;
  const stickyClasses = sticky ? 'sticky bottom-0 z-10' : '';

  return (
    <div 
      className={`${baseClasses} ${stickyClasses} rounded-b-xl`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: bordered ? '1px solid var(--color-border-light)' : 'none',
        boxShadow: sticky ? '0 -4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      {children}
    </div>
  );
});

export const PageHeader = memo(({ title, subtitle, actions, breadcrumb = null, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      {breadcrumb && (
        <div className="mb-3">
          {breadcrumb}
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h1 
            className="text-3xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-primary)', lineHeight: 'var(--line-height-tight)' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className="text-sm mt-2 max-w-2xl"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {subtitle}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-3 flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
});

export const FormRow = memo(({ children, className = "", gap = "gap-4" }) => {
  return (
    <div className={`flex flex-col sm:flex-row ${gap} ${className}`}>
      {children}
    </div>
  );
});

export const FormColumn = memo(({ children, className = "", span = 1 }) => {
  const spanClass = {
    1: 'sm:flex-1',
    2: 'sm:flex-[2]',
    3: 'sm:flex-[3]',
    4: 'sm:flex-[4]'
  };

  return (
    <div className={`${spanClass[span]} ${className}`}>
      {children}
    </div>
  );
});

export const FormDivider = memo(({ label = null, className = '' }) => {
  return (
    <div className={`relative my-8 ${className}`}>
      <div 
        className="absolute inset-0 flex items-center"
        aria-hidden="true"
      >
        <div 
          className="w-full border-t"
          style={{ borderColor: 'var(--color-border-light)' }}
        />
      </div>
      {label && (
        <div className="relative flex justify-center">
          <span 
            className="px-4 text-sm font-medium"
            style={{ 
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-text-tertiary)'
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
});

// Set display names for better debugging
FormSection.displayName = 'FormSection';
FormGrid.displayName = 'FormGrid';
ActionBar.displayName = 'ActionBar';
PageHeader.displayName = 'PageHeader';
FormRow.displayName = 'FormRow';
FormColumn.displayName = 'FormColumn';
FormDivider.displayName = 'FormDivider';
