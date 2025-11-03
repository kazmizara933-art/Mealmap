import React from 'react';
import { Calendar, Droplet, Dumbbell, Activity, Flame, Moon, Sun,  Camera } from 'lucide-react';
import Chart from '../components/Chart';
import testomonial from '../assets/testomonial.jpg';
import anaotmy from '../assets/anaotmy.jpg'


function StatBadge({ label, value, sub }) {
  return (
    <div className="px-3 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  );
}

function Progress() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800">Progress</h1>
          <p className="text-sm text-gray-500 mt-1">Your body metrics, calories, sleep and hydration</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm">Today</span>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Select period</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-6">
          {/* Left main panel */}
          <div className="space-y-6">
            {/* Body measurements */}
            <section className="bg-white rounded-2xl border border-emerald-100 shadow-md p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-emerald-600">Body Measurements</h2>
                <div className="flex items-center gap-2 text-xs text-emerald-600">
                  <Activity className="w-4 h-4 text-emerald-500" /> Updated just now
                </div>
              </div>
              <div className="relative grid place-items-center" style={{ minHeight: 360 }}>
               <img src={anaotmy} alt="anaotmy" className="max-h-72 md:max-h-80 w-auto object-contain rounded-md shadow-sm" />
                {/* Pins */}
                <div className="absolute left-8 top-10">
                  <div className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 shadow text-xs">
                    Arm <span className="font-semibold">28.5 cm</span>
                  </div>
                </div>
                <div className="absolute right-8 top-16">
                  <div className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 shadow text-xs">
                    Chest <span className="font-semibold">93.0 cm</span>
                  </div>
                </div>
                <div className="absolute left-6 bottom-16">
                  <div className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 shadow text-xs">
                    Hips <span className="font-semibold">98.0 cm</span>
                  </div>
                </div>
                <div className="absolute right-6 bottom-14">
                  <div className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 shadow text-xs">
                    Thigh <span className="font-semibold">58.5 cm</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-24">
                  <div className="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 shadow text-xs">
                    Waist <span className="font-semibold">77.5 cm</span>
                  </div>
                </div>
              </div>
              {/* Measurements table light */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="text-left font-medium py-2">September 2025</th>
                      <th className="text-right font-medium py-2">Chest (cm)</th>
                      <th className="text-right font-medium py-2">Waist (cm)</th>
                      <th className="text-right font-medium py-2">Hips (cm)</th>
                      <th className="text-right font-medium py-2">Thigh (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[['Week 1',95.0,80.0,100.0,60.0],['Week 2',94.0,79.0,99.0,59.5],['Week 3',93.5,78.5,98.5,59.0],['Week 4',93.0,77.5,98.0,58.5]].map((r, i)=> (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="py-2 text-gray-700">{r[0]}</td>
                        <td className="py-2 text-right">{r[1]}</td>
                        <td className="py-2 text-right">{r[2]}</td>
                        <td className="py-2 text-right">{r[3]}</td>
                        <td className="py-2 text-right">{r[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Weight + Photos row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weight Tracking */}
              <section className="bg-white rounded-2xl border border-gray-200 shadow p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Weight Tracking</h3>
                  <div className="flex gap-2">
                    <StatBadge label="Start" value="85 kg" />
                    <StatBadge label="Current" value="78 kg" />
                    <StatBadge label="Goal" value="65 kg" />
                  </div>
                </div>
                <div className="w-full" style={{ height: 260 }}>
                  <Chart />
                </div>
              </section>

              {/* Progress Photos */}
              <section className="bg-white rounded-2xl border border-gray-200 shadow p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Progress Photos</h3>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
                    <Camera className="w-4 h-4" />
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{label:'July 2025'},{label:'82 kg'},{label:'Sept 2025'}].map((p, idx)=> (
                    <figure key={idx} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                      <img src={testomonial} alt="progress" className="w-full h-36 object-cover" />
                      <figcaption className="text-xs text-gray-600 px-2 py-1">{p.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right side widgets */}
          <div className="space-y-6">
            {/* Calories Activities */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow p-4 md:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Calories Activities</h3>
                <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs">Last 7 Days</span>
              </div>
              {/* Summary + Legend */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">450 kcal</span> left • Goal <span className="font-medium">2,000 kcal</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1 text-amber-600"><span className="w-3 h-3 rounded bg-amber-400"></span> Consumed</span>
                  <span className="inline-flex items-center gap-1 text-orange-600"><span className="w-3 h-3 rounded bg-orange-400"></span> Burned</span>
                </div>
              </div>
              {/* Stacked bars */}
              <div className="h-44 mb-2 flex items-end justify-between gap-2">
                {[
                  {d:'Mon', c:72, b:18},
                  {d:'Tue', c:85, b:20},
                  {d:'Wed', c:65, b:15},
                  {d:'Thu', c:78, b:17},
                  {d:'Fri', c:80, b:19},
                  {d:'Sat', c:90, b:22},
                  {d:'Sun', c:76, b:16},
                ].map((x, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-6 sm:w-8 md:w-9 bg-gray-100 rounded-lg overflow-hidden flex flex-col justify-end h-36">
                      <div className="bg-orange-400/80 transition-all duration-500" style={{ height: `${x.b}%` }} />
                      <div className="bg-amber-400/80 transition-all duration-500" style={{ height: `${x.c}%` }} />
                    </div>
                    <span className="text-[11px] text-gray-500">{x.d}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Sleep Statistics */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Sleep Statistics</h3>
                <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs">Last 5 Days</span>
              </div>
              <div className="space-y-2">
                {["10:00 PM","1:00 AM","3:00 AM","5:00 AM","6:00 AM"].map((t, i)=> (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-16 text-xs text-gray-500">{t}</span>
                    <div className="flex-1 h-4 grid grid-cols-5 gap-1">
                      {["#22c55e","#86efac","#fde68a","#93c5fd","#e5e7eb"].map((c, j)=> (
                        <div key={j} className="rounded" style={{ background:c }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hydration */}
            <section className="bg-white rounded-2xl border border-gray-200 shadow p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Hydration</h3>
                <span className="px-2 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs">This Week</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <StatBadge label="Hydration Level" value="Normal" sub="" />
                <StatBadge label="Intake" value="2.0 L" sub="avg/day" />
              </div>
              <div className="flex items-end gap-2 h-28">
                {[20,35,50,45,60,55,25].map((v,i)=> (
                  <div key={i} className="flex-1 bg-teal-200 rounded" style={{ height: `${v}%` }} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
