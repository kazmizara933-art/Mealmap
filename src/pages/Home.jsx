import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Bell,
  Flame,
  Heart,
  PersonStanding,
  Droplet,
  Dumbbell,
  BookOpen,
} from "lucide-react";

import avatar from "../assets/nutrilogo.png"; // placeholder profile image
import Chart from "../components/Chart";
import drinkwater from "../assets/drinkwater.jpg";
import testomonial from "../assets/testomonial.jpg";

// ✅ Reusable StatCard component
function StatCard({ icon, value, label, subLabel, color }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="p-4 rounded-full bg-white border shadow-sm"
        style={{ color }}
      >
        {icon}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{value}</h1>
        <p className="text-gray-600">{label}</p>
        <span className="text-sm text-gray-500">{subLabel}</span>
      </div>
    </div>
  );
}

// Small circular progress ring (SVG-based) with optional animation
function CircularProgress({ percent = 0, size = 44, strokeWidth = 6, color = "#10b981", track = "#e5e7eb", animate = false, duration = 800 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const [displayPercent, setDisplayPercent] = useState(animate ? 0 : percent);

  useEffect(() => {
    if (!animate) return;
    let rafId;
    const start = performance.now();
    const startVal = 0;
    const endVal = percent;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const val = startVal + (endVal - startVal) * eased;
      setDisplayPercent(val);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animate, duration, percent]);

  const offset = circumference - (displayPercent / 100) * circumference;

  return (
    <svg width={size} height={size} className="shrink-0">
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={track}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
        style={{ transition: animate ? undefined : "stroke-dashoffset 0.6s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="12"
        className="fill-gray-800 font-semibold"
      >
        {`${Math.round(displayPercent)}%`}
      </text>
    </svg>
  );
}

// Task progress list matching the provided design
function TaskProgressList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-5">
      <ul className="space-y-5">
        <li className="flex items-center gap-4">
          <CircularProgress percent={57} color="#2563eb" track="#e5e7eb" animate />
          <div className="flex items-start gap-2">
            <Droplet className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Drink water</p>
              <p className="text-sm text-gray-500">Detox</p>
            </div>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <CircularProgress percent={35} color="#f59e0b" track="#e5e7eb" animate />
          <div className="flex items-start gap-2">
            <Dumbbell className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Do exercise</p>
              <p className="text-sm text-gray-500">Change your batteries</p>
            </div>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <CircularProgress percent={70} color="#10b981" track="#e5e7eb" animate />
          <div className="flex items-start gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900">Read Book</p>
              <p className="text-sm text-gray-500">Focus</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="p-6">




        {/* Main content: Chart, Featured Article, and Side panel */}
        <div className="max-w-7xl mx-auto px-1 mt-6">
          {/* Welcome hero with streak and quick actions */}
          <section className="relative overflow-hidden mb-8 rounded-2xl p-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white shadow">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm/relaxed opacity-90">Welcome back</p>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Fuel your week, Zara</h2>
                <p className="mt-1 text-emerald-50">You're on a 5-day consistency streak. Keep the momentum!</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm">
                    <span className="block h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
                    Live metabolism boost tip available
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-white/90 text-emerald-700 font-semibold shadow hover:bg-white transition">
                  Log Meal
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/25 transition">
                  Add Water
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/25 transition">
                  Start Workout
                </button>
              </div>
            </div>
            {/* decorative blobs */}
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          </section>

          {/* Coach Tip banner */}
          <section className="mb-8 rounded-xl p-4 bg-white border border-emerald-100 shadow-sm flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
              💡
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Coach Tip: Pair protein with fiber at breakfast to improve satiety and keep energy stable.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Protein</span>
                <span className="px-2 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border border-teal-200">Fiber</span>
                <span className="px-2 py-1 text-xs rounded-full bg-lime-50 text-lime-700 border border-lime-200">Hydration</span>
              </div>
            </div>
            <button className="ml-auto px-3 py-1 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Try now</button>
          </section>


          {/* Stats Cards: placed after tips, spanning all columns */}
          <div className="md:col-span-3 mb-9   ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
              {/* Steps Card */}
              <div className="group rounded-2xl p-6 border border-yellow-200 shadow-md flex flex-col items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-yellow-300 bg-gradient-to-br from-amber-50 to-yellow-100">
                {/* Top Section */}
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-white border shadow-sm shrink-0 transition-colors duration-300 group-hover:border-yellow-300">
                    <PersonStanding className="w-8 h-8 text-gray-600 transition-colors duration-300 group-hover:text-yellow-600" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-end gap-2">
                      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        2,500
                      </h1>
                      <span className="text-sm font-medium uppercase text-gray-500">
                        steps/day
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">50% of your goal</p>
                    {/* Progress bar */}
                    <div className="w-full h-2 rounded-full mt-3 bg-orange-200 overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
                  <button className="px-4 py-2 text-sm font-semibold bg-[#f9c23d] text-black rounded-lg shadow hover:opacity-90 hover:shadow-md transition">
                    Update
                  </button>
                  <button className="px-4 py-2 text-sm font-semibold border border-yellow-400 text-yellow-700 bg-white rounded-lg shadow-sm hover:bg-yellow-50 hover:shadow transition">
                    Dare
                  </button>
                </div>
              </div>

              {/* Calories Card */}
              <div className="group rounded-2xl p-6 border border-purple-200 shadow-md flex flex-col items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-purple-300 bg-gradient-to-br from-indigo-50 to-purple-100">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-white border shadow-sm shrink-0 transition-colors duration-300 group-hover:border-purple-300">
                    <Flame className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-end gap-2">
                      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        56,000
                      </h1>
                      <span className="text-sm font-medium uppercase text-gray-500">
                        cal/day
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <p className="text-gray-600">50% of your goal</p>
                      <p className="text-blue-600">Comments (18)</p>
                    </div>
                    <div className="w-full h-2 rounded-full mt-3 bg-purple-200 overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
                  <button className="px-4 py-2 text-sm font-semibold bg-purple-500 text-black rounded-lg shadow hover:opacity-90 hover:shadow-md transition">
                    Update
                  </button>
                  <button className="px-4 py-2 text-sm font-semibold border border-purple-400 text-purple-700 bg-white rounded-lg shadow-sm hover:bg-purple-50 hover:shadow transition">
                    Dare
                  </button>
                </div>
              </div>

              {/* Heart Card */}
              <div className="group rounded-2xl p-6 border border-green-200 shadow-md flex flex-col items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-green-300 bg-gradient-to-br from-emerald-50 to-green-100">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-white border shadow-sm shrink-0 transition-colors duration-300 group-hover:border-green-300">
                    <Heart className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-end gap-2">
                      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        112
                      </h1>
                      <span className="text-sm font-medium uppercase text-gray-500">
                        bpm
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <p className="text-gray-600">last update 3m ago</p>
                    </div>
                    <div className="w-full h-2 rounded-full mt-3 bg-purple-200 overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
                  <button className="px-4 py-2 text-sm font-semibold bg-green-500 text-black rounded-lg shadow hover:opacity-90 hover:shadow-md transition">
                    Update
                  </button>
                  <button className="px-4 py-2 text-sm font-semibold border border-green-400 text-green-500 bg-white rounded-lg shadow-sm hover:bg-green-50 hover:shadow transition">
                    Dare
                  </button>
                </div>

              </div>
              {/* Task Progress List (exact widget) */}
              <TaskProgressList />

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr_2fr] gap-8 md:gap-10">
            {/* Chart Card */}
            <section className="bg-white rounded-lg shadow p-4 flex items-center justify-center border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300">
              <div className="w-full" style={{ height: 320 }}>
                <Chart />
              </div>
            </section>

            {/* Featured Article */}
            <article className="w-full h-full bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300">
              <img
                src={drinkwater}
                alt="Stay hydrated"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                    Health & Wellness
                  </span>
                  <time className="text-gray-500">Sep 10, 2025</time>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  The importance of optimal hydration
                </h2>
                <p className="text-gray-600 mb-4">
                  Staying hydrated is essential for energy, focus, and overall
                  wellness. Learn how daily water intake supports metabolism,
                  recovery, and cognitive function.
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={testomonial}
                    alt="Author"
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">Dr. John Exhibit</p>
                    <p className="text-gray-500">Nutrition Specialist</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Quick Tips */}
            {/* <aside className="bg-white rounded-lg shadow p-4 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300">
              <h3 className="text-lg font-semibold text-[#004C46] mb-3">
                Quick tips
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li className="text-[#f3944c] font-semibold transition-transform duration-200 ease-out hover:scale-105 hover:rotate-1">
                  Start your day with a glass of water.
                </li>
                <li className="text-[#98bf6c] font-semibold transition-transform duration-200 ease-out hover:scale-105 hover:-rotate-1">
                  Add protein to every meal for satiety.
                </li>
                <li className="text-[#f3944c] font-semibold transition-transform duration-200 ease-out hover:scale-105 hover:rotate-1">
                  Prep meals on Sunday to stay consistent.
                </li>
                <li className="text-[#98bf6c] font-semibold transition-transform duration-200 ease-out hover:scale-105 hover:-rotate-1">
                  Drink water before meals to boost metabolism.
                </li>
                <li className="text-[#f3944c] font-semibold transition-transform duration-200 ease-out hover:scale-105 hover:rotate-1">
                  Eat a balanced diet with a variety of nutrients.
                </li>
              </ul>
            </aside> */}

          </div>
        </div>
      </div>

    </>
  );
}

export default Home;

