import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Bell, Settings, User, ChevronDown, ShieldCheck } from "lucide-react";
import { logout } from "../../features/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";

// Assets
import Logo from "../../assets/login/appLogo.svg";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, roleName, roleId } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayName = userName || "Admin";
  const displayRole = roleName || (roleId ? `Role ${roleId}` : "User");
  const todayLabel = useMemo(
    () =>
      new Date().toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    []
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header
      className="h-16 flex items-center justify-between px-6 border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-sm)",
        zIndex: "var(--z-sticky)",
      }}
    >
      {/* LEFT: Logo + Brand */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
          >
            <img src={Logo} alt="Maleva Logo" className="w-9 h-9" />
          </div>
          <div className="leading-tight">
            <h1
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              MALEVA
            </h1>
            <p
              className="text-xs font-medium"
              style={{ color: "var(--color-primary-600)" }}
            >
              SHIP SPARE IN TRANSIT
            </p>
          </div>
        </div>
      </div>

      {/* CENTER: Welcome Strip */}
      <div className="hidden md:flex flex-1 mx-8">
        <div
          className="w-full max-w-xl rounded-xl px-4 py-2 border"
          style={{
            borderColor: "var(--color-border-light)",
            background:
              "linear-gradient(90deg, var(--color-primary-50), var(--color-surface))",
          }}
        >
          <p
            className="text-sm font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Welcome, {displayName}
          </p>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-medium"
              style={{ color: "var(--color-primary-700)" }}
            >
              {displayRole}
            </span>
            <span className="text-xs" style={{ color: "var(--color-text-quaternary)" }}>
              |
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              {todayLabel}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Actions + User Profile */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button
          className="relative p-2.5 rounded-xl transition-all duration-200"
          style={{ color: "var(--color-text-tertiary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
            e.currentTarget.style.color = "var(--color-text-secondary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-text-tertiary)";
          }}
        >
          <Bell className="w-5 h-5" />
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: "var(--color-danger)" }}
          >
            3
          </span>
        </button>

        {/* Settings */}
        <button
          className="p-2.5 rounded-xl transition-all duration-200"
          style={{ color: "var(--color-text-tertiary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
            e.currentTarget.style.color = "var(--color-text-secondary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-text-tertiary)";
          }}
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* User Profile */}
        <div className="relative ml-2">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200"
            style={{
              backgroundColor: isDropdownOpen
                ? "var(--color-hover-overlay)"
                : "transparent",
            }}
            onMouseEnter={(e) => {
              if (!isDropdownOpen) {
                e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isDropdownOpen) {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <User className="w-5 h-5 text-white" />
            </div>

            <div className="text-left hidden sm:block">
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {displayName}
              </p>
              <p
                className="text-xs font-medium"
                style={{ color: "var(--color-primary-600)" }}
              >
                {displayRole}
              </p>
            </div>

            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              style={{ color: "var(--color-text-quaternary)" }}
            />
          </button>

          {/* Premium Dropdown */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-72 rounded-2xl border animate-scale-in"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-xl)",
                zIndex: "var(--z-dropdown)",
              }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "var(--color-border-light)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600))",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {displayName}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-primary-700)" }}
                    >
                      {displayRole}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mt-2"
                      style={{
                        backgroundColor: "var(--color-success-light)",
                        color: "var(--color-success-700)",
                      }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Online
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <button
                  className="flex items-center w-full px-6 py-3 text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <User
                    className="w-4 h-4 mr-3"
                    style={{ color: "var(--color-text-quaternary)" }}
                  />
                  My Profile
                </button>

                <button
                  className="flex items-center w-full px-6 py-3 text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-hover-overlay)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Settings
                    className="w-4 h-4 mr-3"
                    style={{ color: "var(--color-text-quaternary)" }}
                  />
                  Account Settings
                </button>
              </div>

              <div
                className="border-t"
                style={{ borderColor: "var(--color-border-light)" }}
              >
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-6 py-3 text-sm transition-colors duration-200 rounded-b-2xl"
                  style={{ color: "var(--color-danger)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-danger-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
