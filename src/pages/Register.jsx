import React from 'react';
import { NavLink } from 'react-router-dom';
import veg from '../assets/veg.jpg';
import nutrilogo from '../assets/nutrilogo.png';

function Register() {
  return (
    <div className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={veg}
        alt="Vegetables"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />

      <br />
      <br/>


      {/* White Form Container */}
      <div className="relative z-20 bg-white rounded-xl shadow-xl p-10 w-full max-w-lg transform transition-transform duration-300 hover:scale-95 focus-within:scale-95
">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img src={nutrilogo} alt="Nutri Logo" className="w-52 h-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create Your Account</h1>
          <br></br>

          <p className="text-gray-600 text-center text-base">
            Start tracking your nutrition and reach your health goals.
          </p>
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-center mb-6 text-lg">
          Welcome to your personal registration form.
        </p>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Already have an account?{' '}
          <NavLink to="/login" className="text-green-500 hover:underline font-medium">
            Login
          </NavLink>
        </p>

        {/* Form Section Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Account Information
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Row 1: Full Name + Email */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </div>

          {/* Row 2: Password + Confirm Password */}
          <div className="flex gap-4">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition duration-200 transform hover:-translate-y-0.5"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
