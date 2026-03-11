export function AnimatedLogo({ onClick, logoSrc, title, subtitle }) {
  return (
    <div className="mb-12 text-center animate-bounce-in">
      <div
        className="flex flex-col items-center cursor-pointer group"
        onClick={onClick}
      >
        {/* Logo Circle */}
        <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-6 
        transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-float bg-white">

          <img
            src={logoSrc}
            alt={`${title} Logo`}
            className="w-40 h-40 object-contain"
          />

        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0A66C2] to-[#2563EB] bg-clip-text text-transparent mb-2 animate-slide-up">
          {title}
        </h1>

        <p className="text-[#6B7280] text-lg animate-slide-up-delay">
          {subtitle}
        </p>
      </div>
    </div>
  );
}