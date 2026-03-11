export default function StatusToggle({ checked, onChange, size = 'md', disabled = false }) {
  const sizeClasses = {
    sm: { container: 'w-8 h-4 lg:w-10 lg:h-5', thumb: 'h-3 w-3 lg:h-4 lg:w-4', translate: 'translate-x-4 lg:translate-x-5' },
    md: { container: 'w-10 h-5 lg:w-12 lg:h-6', thumb: 'h-4 w-4 lg:h-5 lg:w-5', translate: 'translate-x-5 lg:translate-x-6' },
    lg: { container: 'w-12 h-6 lg:w-14 lg:h-7', thumb: 'h-5 w-5 lg:h-6 lg:w-6', translate: 'translate-x-6 lg:translate-x-7' }
  };

  const { container, thumb, translate } = sizeClasses[size];

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center space-x-2 lg:space-x-3">
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className={`
            ${container} rounded-full relative transition-all duration-300 ease-in-out
            ${checked 
              ? 'bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-green-200' 
              : 'bg-gray-200 hover:bg-gray-250'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}
          
            
          `}
        >
          <div 
            className={`
              ${thumb} bg-white rounded-full shadow-md transition-all duration-300 ease-in-out
              absolute top-0.5 left-0.5 flex items-center justify-center
              ${checked ? translate : 'translate-x-0'}
            `}
          >
            {checked && (
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-500 rounded-full opacity-80"></div>
            )}
          </div>
        </button>
        
        <span className={`
          text-xs lg:text-sm font-medium transition-colors duration-200 min-w-[50px] lg:min-w-[60px]
          ${checked ? 'text-emerald-600' : 'text-gray-500'}
        `}>
          {checked ? 'Active' : 'Inactive'}
        </span>
      </div>
    </div>
  );
}