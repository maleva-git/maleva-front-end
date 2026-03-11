export function AnimatedInput({
  label,
  error,
  animationDelay = "0.3s",
  className = "",
  ...props
}) {
  return (
    <div className="animate-slide-in-right" style={{animationDelay}}>
      <label className="block text-sm font-semibold text-[#1F2937] mb-3">
        {label}
      </label>
      <input
        className={`w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white focus:scale-105 focus:shadow-lg ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export function AnimatedPasswordInput({
  label,
  error,
  animationDelay = "0.5s",
  className = "",
  ...props
}) {
  return (
    <div className="animate-slide-in-right" style={{animationDelay}}>
      <label className="block text-sm font-semibold text-[#1F2937] mb-3">
        {label}
      </label>
      <input
        type="password"
        className={`w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white focus:scale-105 focus:shadow-lg ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}