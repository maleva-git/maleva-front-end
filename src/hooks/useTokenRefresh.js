import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { tokenHandler } from '../utils/tokenHandler';
import { logout } from '../features/auth/authSlice';
import { authService } from '../features/auth/authService';

const ACTIVITY_EVENTS = ['mousedown', 'keydown', 'scroll', 'touchstart'];
const CHECK_INTERVAL = 60000; // Check every 1 minute
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes of inactivity

export const useTokenRefresh = () => {
  const dispatch = useDispatch();
  const lastActivityRef = useRef(Date.now());
  const checkIntervalRef = useRef(null);

  // TanStack Query mutation for token refresh
  const { mutateAsync: refreshToken } = useMutation({
    mutationFn: authService.refreshToken,
    onSuccess: (data) => {
      if (data?.token) {
        tokenHandler.set(data.token, true);
      }
    },
    onError: (error) => {
      console.error('Token refresh failed:', error);
      tokenHandler.handleExpired(() => {
        dispatch(logout());
        window.location.assign('/');
      });
    },
  });

  const updateActivity = () => {
    lastActivityRef.current = Date.now();
  };

  const checkTokenAndActivity = async () => {
    const now = Date.now();
    const timeSinceActivity = now - lastActivityRef.current;

    // If user inactive for 30 minutes, logout
    if (timeSinceActivity > INACTIVITY_TIMEOUT) {
      tokenHandler.handleExpired(() => {
        dispatch(logout());
        window.location.assign('/');
      });
      return;
    }

    // If token will expire in 5 minutes and user is active, refresh it
    if (!tokenHandler.isValid(5)) {
      try {
        await refreshToken();
      } catch (error) {
        // Error handled in onError callback
      }
    }
  };

  useEffect(() => {
    // Track user activity
    ACTIVITY_EVENTS.forEach(event => {
      window.addEventListener(event, updateActivity);
    });

    // Check token every minute
    checkIntervalRef.current = setInterval(checkTokenAndActivity, CHECK_INTERVAL);

    return () => {
      ACTIVITY_EVENTS.forEach(event => {
        window.removeEventListener(event, updateActivity);
      });
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [dispatch]);

  return { refreshToken };
};
