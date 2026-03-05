export default function BrandHeader({ logo, title, subtitle, onClick }) {
    return (
      <div className="mb-12 text-center cursor-pointer" onClick={onClick}>
        <div className="w-30 h-30 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
          <img src={logo} alt="Logo" className="h-10 invert" />
        </div>
  
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
          {title}
        </h1>
  
        {subtitle && (
          <p className="text-gray-500 text-lg mt-2">{subtitle}</p>
        )}
      </div>
    );
  }
  