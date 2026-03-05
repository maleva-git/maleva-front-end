export default function PageHeader({
    title,
    subtitle,
    leftContent,
    rightContent,
  }) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 flex items-center justify-between">
        {/* Left section */}
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-gray-900">
            {title}
          </h1>
  
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">
              {subtitle}
            </p>
          )}
  
          {leftContent && (
            <div className="mt-2">
              {leftContent}
            </div>
          )}
        </div>
  
        {/* Right section */}
        {rightContent && (
          <div className="flex items-center gap-3">
            {rightContent}
          </div>
        )}
      </div>
    );
  }
  