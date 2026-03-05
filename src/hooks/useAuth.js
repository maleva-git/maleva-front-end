import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, loading, error, token, roleName, roleId, userName, userId, companyId } = useSelector((state) => state.auth);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!token,
    token,
    roleName,
    roleId,
    userName,
    userId,
    companyId,
  };
};
