// Sidebar.jsx
import React from "react";

export default function Sidebar() {
  const messages = ["Eva Shelby", "Victoria Lee", "Liam Davis"];

  return (
    <aside className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Profile */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-white text-3xl">
          HM
        </div>
        <div className="mt-4 font-semibold text-lg">Hazel Mitchell</div>
        <div className="text-xs text-gray-500">Member since 2021</div>
      </div>

      {/* Weekly Progress */}
      <div className="mb-6">
        <div className="text-sm text-gray-500">Weekly Progress</div>
        <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
          <div
            className="h-3 rounded-full bg-purple-600"
            style={{ width: "48%" }}
          />
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-6">
        <div className="text-sm font-medium mb-3">November 2022</div>
        <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mb-4">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d} className="py-1">
              {d}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="text-sm">
            <div className="text-xs text-purple-700">17:00</div>
            <div className="text-gray-600">Football game</div>
          </div>

          <div className="text-sm">
            <div className="text-xs text-purple-700">20:00</div>
            <div className="text-gray-600">Reservation for Dinner</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="font-medium">Messages</div>
          <a className="text-sm text-purple-600" href="/">
            View All
          </a>
        </div>

        <div className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                👤
              </div>
              <div>
                <div className="font-medium">{m}</div>
                <div className="text-xs text-gray-400">Hey! How are you?</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
