export function AnimatedButton({
  children,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  animationDelay = "0.7s",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`w-full bg-gradient-to-r from-[#0A66C2] to-[#2563EB] text-white py-4 rounded-xl font-semibold hover:from-[#0A66C2]/90 hover:to-[#2563EB]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-slide-in-right disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
      style={{animationDelay}}
      {...props}
    >
      <span className="inline-flex items-center">
        {loading ? 'Signing In...' : children}
        {!loading && (
          <svg className="ml-2 w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>
    </button>
  );
}