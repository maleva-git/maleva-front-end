export function AnimatedBackgroundPanel({ 
  backgroundImage, 
  title, 
  subtitle, 
  loadingText = "Loading your logistics experience..." 
}) {
  return (
    <div className="hidden md:flex w-1/2 relative items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/80 via-[#2563EB]/70 to-[#14B8A6]/60 animate-gradient-shift"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/40 rounded-full animate-float-fast"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-10 animate-fade-in-right">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg animate-text-glow">
          {title}
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-md animate-slide-up-delay-2">
          {subtitle}
        </p>
        
        {/* Animated Dots */}
        <div className="mt-8 flex justify-center space-x-3">
          <div className="w-4 h-4 bg-white/80 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-4 h-4 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
        
        {/* Progress Bar Animation */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-full animate-progress-bar"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 animate-pulse">{loadingText}</p>
        </div>
      </div>
    </div>
  );
}