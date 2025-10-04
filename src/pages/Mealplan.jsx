import React from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Filter,
  Info,
  Leaf,
  UtensilsCrossed,
  Download,
  Search,
} from "lucide-react";

// Days of week
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Meal types
const meals = [
  { key: "breakfast", label: "Breakfast", color: "from-[#ffbf38]/20 to-white", pill: "bg-[#ffbf38]" },
  { key: "lunch", label: "Lunch", color: "from-[#129e8f]/20 to-white", pill: "bg-[#129e8f]" },
  { key: "dinner", label: "Dinner", color: "from-gray-100 to-white", pill: "bg-gray-400" },
];

// Mock images
const sampleImages = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604909052624-04b0b8b9bcd5?q=80&w=600&auto=format&fit=crop",
];

// Generate mock meal
function mealFor(dayIndex, mealKey) {
  const img = sampleImages[(dayIndex + mealKey.length) % sampleImages.length];
  const titles = {
    breakfast: ["Scrambled Eggs","Oatmeal Bowl","Blueberry Pancakes","Avocado Toast"],
    lunch: ["Grilled Chicken Salad","Veggie Pasta","Sushi Bowl","Quinoa Power Bowl"],
    dinner: ["Salmon with Veggies","Chicken Stir-fry","Veggie Tacos","Pesto Pasta"],
  };
  const title = titles[mealKey][(dayIndex * 2) % titles[mealKey].length];
  const calories = 250 + ((dayIndex + mealKey.length) % 5) * 80;
  const tagPool = ["High Protein","Low Carb","Balanced","Vegan"];
  const tag = tagPool[(dayIndex + mealKey.length) % tagPool.length];
  return { title, calories, img, tag };
}

// KPI Card
function KPI({ label, value, sub, icon: Icon, tone = "emerald" }) {
  const toneMap = {
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    sky: "bg-sky-50 text-sky-700",
    rose: "bg-rose-50 text-rose-700",
  };
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition relative group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
        </div>
        <div className={`h-11 w-11 rounded-lg grid place-items-center ${toneMap[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <Info className="h-4 w-4 text-gray-400" title="Based on logged meals this week" />
      </div>
    </div>
  );
}

// Meal card
function MealCard({ tonePill, data }) {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={data.img}
        alt={data.title}
        className="h-14 w-14 rounded-lg object-cover border border-gray-200 shadow-sm"
      />
      <div className="min-w-0">
        <p className="truncate font-medium text-gray-800">{data.title}</p>
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="text-gray-500">{data.calories} kcal</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-white ${tonePill}`}>
            <Leaf className="h-3 w-3 opacity-80" />
            {data.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

function MealPlan() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-8 min-h-[calc(100vh-64px)]">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meal Plan</h1>
          <p className="text-gray-500 mt-1">Plan your week and keep your nutrition on track</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
            <Download className="h-4 w-4" /> Export
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
            <Filter className="h-4 w-4" /> Filters
          </button>
        </div>
      </header>

      {/* Search bar */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search meals..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <button className="rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm hover:bg-emerald-600 shadow-sm">
          + Add Meal
        </button>
      </div>

      {/* Period Controls */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border bg-white px-2 py-1 shadow-sm">
          <button aria-label="Previous Month" className="p-2 hover:bg-gray-50 rounded-lg">
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <div className="px-3 py-1.5 text-sm font-medium text-gray-800">September 2025</div>
          <button aria-label="Next Month" className="p-2 hover:bg-gray-50 rounded-lg">
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
          <CalendarDays className="h-4 w-4" /> This Week
        </button>
      </div>

      {/* KPI Section */}
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <KPI label="Weekly Calories" value="12,650" sub="Target 12,600" icon={UtensilsCrossed} tone="emerald" />
        <KPI label="Avg / day" value="1,821 kcal" sub="Goal 1,800" icon={Info} tone="amber" />
        <KPI label="Protein" value="498 g" sub="Good balance" icon={Leaf} tone="sky" />
        <KPI label="Meals planned" value="21/21" sub="Great consistency" icon={CalendarDays} tone="rose" />
      </section>

      {/* Progress bar */}
      <div className="mt-6 bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-2">Weekly Goal Progress</p>
        <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-3 bg-emerald-500 rounded-full w-[85%]" />
        </div>
        <p className="text-xs text-gray-500 mt-1">85% of weekly calories target achieved</p>
      </div>

      {/* Meal Grid */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-auto">
        {/* Sticky column headers */}
        <div className="sticky top-0 z-10 grid grid-cols-[140px_repeat(3,1fr)] items-center border-b bg-white px-4 py-3 text-sm font-semibold text-gray-600 shadow-sm">
          <div>Day</div>
          {meals.map((m) => (
            <div key={m.key} className="flex items-center gap-2">
              <span className={`inline-block h-2 w-2 rounded-full ${m.pill}`} />
              {m.label}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div>
          {days.map((day, dIdx) => (
            <div
              key={day}
              className={`grid grid-cols-[140px_repeat(3,1fr)] items-stretch px-4 ${dIdx % 2 === 0 ? "bg-white" : "bg-gray-50/60"} border-b last:border-b-0`}
            >
              {/* Day Cell */}
              <div className="py-4 pr-4 flex items-center">
                <div className="flex w-full items-center justify-between gap-2 flex-nowrap min-w-0">
                  <span className="text-gray-800 font-medium truncate max-w-[90px]">{day}</span>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Week {Math.floor((dIdx + 1) / 7) + 1}</span>
                </div>
              </div>

              {/* Meal Cells */}
              {meals.map((m) => {
                const data = mealFor(dIdx, m.key);
                return (
                  <div key={m.key} className="py-4 pl-4">
                    <div className={`rounded-xl border border-gray-200 bg-gradient-to-br ${m.color} p-3 hover:shadow-md transition`}>
                      <MealCard tonePill={m.pill} data={data} />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-6 text-xs text-gray-500 flex items-center gap-2">
        <Info className="h-4 w-4" />
        Nutrition values are estimates. Consult a professional for personalized advice.
      </footer>
    </div>
  );
}

export default MealPlan;
