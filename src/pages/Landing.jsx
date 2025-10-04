import React from 'react'
import { ReactTyped } from "react-typed";

import greenlines from '../assets/greenlines.png';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <div
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: `url(${greenlines})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

        {/* Content Wrapper */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center gap-6 px-4">
          {/* Main Headline */}
          <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight tracking-tight drop-shadow-lg">
            Fuel Your Body
          </h1>

          {/* Animated Subline */}
          <h2 className="text-green-600 font-semibold text-2xl md:text-3xl tracking-wide">
            <ReactTyped
              strings={["Track Your Progress", "Log Your Meals", "Stay Healthy"]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </h2>

          {/* Secondary Headline */}
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight">
            Stay on Path
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
            MealMap helps you stay on track with personalized diet plans, 
            <br className="hidden md:block" />
            water reminders, food logging, and BMI insights — all in one place.
          </p>

          {/* CTA Button */}
          <Link to="/register">
          <button
            className="mt-4 px-8 py-3 rounded-full bg-[#004C46] text-white font-semibold 
                       border border-[#004C46] hover:bg-white hover:text-[#004C46]
                       transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Begin Your Journey
          </button>
          </Link>
         
        </div>
      </div>

    <br>
    </br>


<div className="">

<div className="py-16 bg-white flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">

    {/* Card 1 */}
    <div className="group relative rounded-2xl p-6 text-green-800 border border-green-400/20 bg-green-700/30 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-green-400/40 hover:bg-green-100/50 hover:text-green-700">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-400/20 text-green-600 mb-6 group-hover:bg-green-400/30 transition">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 17l10 5 10-5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3">Personalized Diet Plans</h3>
      <p className="text-sm mb-2">
        Get meal plans tailored to your goals, lifestyle, and nutrition needs.
      </p>
      <p className="text-sm">
        Choose from vegetarian, keto, or custom diets. Each plan comes with daily tips and healthy recipes.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group relative rounded-2xl p-6 text-green-800 border border-green-400/20 bg-green-700/30 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-green-400/40 hover:bg-green-100/50 hover:text-green-700">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-400/20 text-green-600 mb-6 group-hover:bg-green-400/30 transition">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V8m0 6H6m6 0h6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3">Water & Meal Tracker</h3>
      <p className="text-sm mb-2">
        Stay hydrated and on track with daily food and water tracking tools.
      </p>
      <p className="text-sm">
        Log your meals, track calories, and set reminders for your water intake effortlessly.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group relative rounded-2xl p-6 text-green-800 border border-green-400/20 bg-green-700/30 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-green-400/40 hover:bg-green-100/50 hover:text-green-700">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-400/20 text-green-600 mb-6 group-hover:bg-green-400/30 transition">
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 100 7.292m0 0a4 4 0 100-7.292m0 7.292V21" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-3">BMI & Progress Insights</h3>
      <p className="text-sm mb-2">
        Calculate BMI, track progress, and monitor your health journey.
      </p>
      <p className="text-sm">
        Visualize your weight changes, set fitness goals, and get personalized insights for better results.
      </p>
    </div>

  </div>
</div>


</div>

    </>
  )
}

export default Landing;

