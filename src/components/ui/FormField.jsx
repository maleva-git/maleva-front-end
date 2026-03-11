
export const FormField = ({
  label,
  required,
  children,
  className = "",
  inline = false,
  labelWidth = "w-28"
}) => {
  if (inline) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <label className={`${labelWidth} shrink-0 text-[14px] font-semibold text-gray-600 uppercase`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <label className=" text-[14px] font-semibold text-gray-600 mb-1 uppercase">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};
export const FormRow = ({ children, columns = 6 }) => {
  const colClass = columns === 6 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6' : 
                   columns === 5 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 
                   columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 
                   columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                   'grid-cols-1 md:grid-cols-2';
  return (
    <div className={`grid ${colClass} gap-3`}>
      {children}
    </div>
  );
};
