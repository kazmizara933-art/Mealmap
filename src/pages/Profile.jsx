// Profile.jsx
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  CalendarDays,
  Activity,
  Heart,
  Droplet,
  Flame,
  Edit,
  Utensils,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const BRAND_GREEN = "#129e8f";

// ---- Small reusable StatCard
function StatCard({ icon: Icon, label, value, unit }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col items-start">
      <div className="flex items-center gap-2 text-gray-600 text-sm">
        <Icon className="h-4 w-4 text-[#129e8f]" />
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-900">
        {value} <span className="text-sm font-normal text-gray-500">{unit}</span>
      </p>
    </div>
  );
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview", icon: User },
    { key: "mealplans", label: "Meal Plans", icon: Utensils },
    { key: "appointments", label: "Appointments", icon: Stethoscope },
    { key: "progress", label: "Progress", icon: TrendingUp },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 py-8 bg-gray-50 min-h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow">
            U
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
            <p className="text-sm text-gray-500">Premium Member</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> sarah@email.com</span>
              <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> +123 456 7890</span>
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> Joined Jan 2024</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white bg-[#129e8f] hover:bg-teal-700 rounded-lg flex items-center gap-2 shadow">
          <Edit className="h-4 w-4" /> Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === tab.key
                ? "border-[#129e8f] text-[#129e8f]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={Activity} label="Height" value="172" unit="cm" />
              <StatCard icon={Heart} label="Weight" value="65" unit="kg" />
              <StatCard icon={Droplet} label="Water Intake" value="2.5" unit="L/day" />
              <StatCard icon={Flame} label="Calories" value="1800" unit="kcal/day" />
            </div>

            {/* Goals */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Health Goals</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#129e8f]" /> Maintain weight between 60–65kg</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#129e8f]" /> Drink at least 2.5L of water daily</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#129e8f]" /> Run 3 times per week</li>
                <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#129e8f]" /> Balanced 1800 kcal meal plan</li>
              </ul>
            </div>
          </>
        )}

        {activeTab === "mealplans" && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Meal Plans</h2>
            <p className="text-sm text-gray-600">This section can display user’s weekly or custom meal plans with calories, macros, and recipes.</p>
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointments</h2>
            <ul className="text-sm text-gray-700 divide-y">
              <li className="py-2 flex justify-between"><span>Doctor Check-up</span><span className="text-gray-500">Oct 5, 2025</span></li>
              <li className="py-2 flex justify-between"><span>Nutritionist Session</span><span className="text-gray-500">Oct 12, 2025</span></li>
            </ul>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Progress</h2>
            <p className="text-sm text-gray-600">This section can show charts (weight, calories, workouts) for visual progress tracking.</p>
          </div>
        )}
      </div>
    </div>
  );
}
