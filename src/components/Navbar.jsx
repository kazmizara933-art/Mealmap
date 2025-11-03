import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MessageCircle, Bell, User, Settings, LogIn, UserPlus, Menu, X } from 'lucide-react';
import nutrilogo from '../assets/nutrilogo.png';
import userAvatar from '../assets/nutrilogo.png';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const isLanding = path === '/' || path === '';
  const isAuthPage = path === '/login' || path === '/register';
  const isAuthed = !isLanding && !isAuthPage; // naive route-based auth state
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 z-50 ${isLanding ? 'bg-white/80 backdrop-blur border-b border-emerald-50' : 'bg-white border-b'} text-black`}>
      <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:px-6 py-3 md:py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={nutrilogo}
            alt="Nutri Logo"
            className="w-16 md:w-20 h-auto object-contain"
          />
        </div>

        {/* Nav Links (center) */}
        <ul className="hidden md:flex items-center justify-center gap-5 md:gap-1">
          {isAuthed ? (
            <>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todo"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  To-Do
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/progress"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  Progress
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mealplan"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  Meal Plan
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendar"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                      isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700'
                    }`
                  }
                >
                  profile
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>

        {/* Right actions (auth only) */}
        {isAuthed ? (
          <div className="hidden md:flex items-center justify-end gap-5">
            <button
              className="relative p-2 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              aria-label="Open messages"
            >
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <button
              className="relative p-2 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
              aria-label="Open notifications"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">5</span>
            </button>
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 focus:outline-none"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                <img src={userAvatar} alt="User" className="w-8 h-8 rounded-full object-cover border" />
                <span className="hidden sm:inline font-medium text-gray-800">Zara</span>
              </button>
              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg py-1 z-50"
                >
                  <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    <User className="w-4 h-4 text-gray-500" />
                    <span>Profile</span>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Settings</span>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center justify-end gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                  isActive
                    ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                }`
              }
            >
              <span className="inline-flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </span>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                  isActive
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg'
                }`
              }
            >
              <span className="inline-flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                <span>Create account</span>
              </span>
            </NavLink>
            
          </div>
        )}
        <button
          className="justify-self-end md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {isAuthed ? (
            <ul className="px-4 py-3 space-y-1">
              <li>
                <NavLink to="/home" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/todo" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  To-Do
                </NavLink>
              </li>
              <li>
                <NavLink to="/progress" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  Progress
                </NavLink>
              </li>
              <li>
                <NavLink to="/mealplan" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  Meal Plan
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" onClick={() => setMobileOpen(false)} className={({ isActive }) => `${isActive ? 'text-emerald-700' : 'text-gray-700'} block px-2 py-2 rounded hover:bg-emerald-50`}>
                  Profile
                </NavLink>
              </li>
            </ul>
          ) : (
            <div className="px-4 py-3 space-y-2">
              <NavLink
                to="/login"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md text-sm font-medium border transition-all ${
                    isActive
                      ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                  }`
                }
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold shadow-sm ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg'
                  }`
                }
              >
                <UserPlus className="w-4 h-4" />
                <span>Create account</span>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
