export default function AuthRightPanel({ image }) {
    return (
      <>
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
  
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-700/70 to-primary-800/60" />
  
        <div className="relative z-10 text-center px-10 text-white m-auto">
          <h2 className="text-5xl font-extrabold mb-4">
            Ship Spare in Transit
          </h2>
          <p className="text-xl opacity-90">Powered by Maleva</p>
        </div>
      </>
    );
  }
  