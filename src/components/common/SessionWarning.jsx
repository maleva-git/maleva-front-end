import { useEffect, useState } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { tokenHandler } from '../../utils/tokenHandler';

export const SessionWarning = ({ onRefresh }) => {
  const [show, setShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const checkInterval = setInterval(() => {
      const token = tokenHandler.get();
      if (!token) return;

      try {
        const payload = tokenHandler.decodePayload(token);
        if (!payload?.exp) return;

        const expiresIn = payload.exp * 1000 - Date.now();
        const minutesLeft = Math.floor(expiresIn / 60000);

        if (minutesLeft <= 5 && minutesLeft > 0) {
          setShow(true);
          setTimeLeft(minutesLeft);
        } else {
          setShow(false);
        }
      } catch (error) {
        console.error('Token check failed:', error);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(checkInterval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-lg max-w-md">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-semibold text-yellow-800">
              Session Expiring Soon
            </h3>
            <p className="text-sm text-yellow-700 mt-1">
              Your session will expire in {timeLeft} minute{timeLeft !== 1 ? 's' : ''}.
              Continue working to stay logged in.
            </p>
            <button
              onClick={() => {
                onRefresh?.();
                setShow(false);
              }}
              className="mt-3 flex items-center gap-2 px-3 py-1.5 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Extend Session
            </button>
          </div>
          <button
            onClick={() => setShow(false)}
            className="ml-4 text-yellow-600 hover:text-yellow-800"
            aria-label="Close session warning"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};
