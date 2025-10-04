import React from 'react';
import { NavLink } from 'react-router-dom';
import nutrilogo from '../assets/nutrilogo.png';
import yoga from '../assets/yoga.jpg'; // <-- Add this import
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={yoga}
        alt="Yoga Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />

      {/* Form Container */}
      <div className="relative z-20 bg-white rounded-xl shadow-xl p-10 w-full max-w-lg   transform transition-transform duration-300 hover:scale-95 focus-within:scale-95 ">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img src={nutrilogo} alt="Nutri Logo" className="w-52 h-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-600 text-center text-base">
            Sign in to your account and start tracking your nutrition
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          />

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-green-500" />
              Remember me
            </label>
            <NavLink to="/forgot-password" className="text-green-500 hover:underline">
              Forgot password?
            </NavLink>
          </div>

          {/* Sign In Button */}



          <Link to="/home">
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-green-500 text-white rounded-lg font-medium shadow hover:bg-green-600 transition duration-200 transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
          </Link>
        
        </form>

        {/* Footer */}
        <p className="text-gray-600 text-center mt-6 text-sm">
          Don’t have an account?{' '}
          <NavLink to="/register" className="text-green-500 hover:underline font-medium">
            Create Account
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;

