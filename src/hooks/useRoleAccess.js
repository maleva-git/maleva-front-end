import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

/**
 * Custom hook for role-based access control
 * @param {string[]} allowedRoles - Array of allowed role names
 * @param {string} redirectPath - Path to redirect if access denied (default: '/dashboard')
 */
export const useRoleAccess = (allowedRoles = [], redirectPath = '/dashboard') => {
  const navigate = useNavigate();
  const { roleName, userName, userId } = useSelector((state) => state.auth);
  const comid = localStorage.getItem('Comid') || 1;

  useEffect(() => {
    const userRole = (roleName || '').toUpperCase();
    
    if (userRole && allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
      toast.error('Access Denied: You do not have permission to access this page');
      navigate(redirectPath, { replace: true });
    }
  }, [roleName, navigate, allowedRoles, redirectPath]);

  return {
    roleName,
    userName,
    userId,
    comid,
    hasAccess: allowedRoles.length === 0 || allowedRoles.includes((roleName || '').toUpperCase())
  };
};
