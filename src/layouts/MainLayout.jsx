import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Sidebar } from './Menu/Sidebar';
import { useTokenRefresh } from '../hooks/useTokenRefresh';
import { SessionWarning } from '../components/common/SessionWarning';

export default function MainLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  
  // Auto refresh token when user is active (uses TanStack Query)
  const { refreshToken } = useTokenRefresh();

  const handleRefreshSession = async () => {
    try {
      await refreshToken();
    } catch (error) {
      console.error('Manual refresh failed:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#F7F9FC' }}>
      {/* HEADER - Fixed at top */}
      <Header />

      {/* BODY - Flex row with exact height */}
      <div className="flex flex-1 min-h-0">
        {/* SIDEBAR - Independent scroll */}
       
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggle={() => setIsSidebarCollapsed(prev => !prev)}
          />
      

        {/* MAIN CONTENT - Independent scroll, responsive */}
        <main className="flex-1 overflow-y-auto min-h-0">
          <Outlet />
        </main>
      </div>

      {/* Session Warning */}
      <SessionWarning onRefresh={handleRefreshSession} />
    </div>
  );
}
