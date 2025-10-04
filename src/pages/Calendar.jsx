import React from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Info,
  Search,
  Download,
  Clock3,
  User,
  CheckCircle2,
} from 'lucide-react';

const BRAND_GREEN = '#129e8f';
const BRAND_ORANGE = '#ffbf38';

// Utility button styles
const buttonBase =
  'inline-flex items-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
const brandButton = `${buttonBase} bg-[${BRAND_GREEN}] text-white px-4 py-2 shadow hover:bg-[#0e7f72] focus:ring-[${BRAND_GREEN}]`;
const brandOutlineButton = `${buttonBase} border border-[${BRAND_GREEN}] text-[${BRAND_GREEN}] px-4 py-2 bg-white hover:bg-[${BRAND_GREEN}] hover:text-white`;

const kpis = [
  {
    label: 'Total Week Planning Schedule',
    value: 15,
    tone: 'bg-[rgba(18,158,143,0.08)] text-[#129e8f]',
  },
  {
    label: 'Total Physical Activities Schedule',
    value: 8,
    tone: 'bg-[rgba(255,191,56,0.12)] text-[#b07b00]',
  },
  {
    label: 'Total Appointments',
    value: 10,
    tone: 'bg-emerald-50 text-emerald-700',
  },
];

// Mock events
const events = [
  { date: '2025-09-02', title: 'Morning Yoga', color: BRAND_GREEN, time: '7:00 AM', place: 'Yoga Studio' },
  { date: '2025-09-03', title: 'Meal Prep', color: BRAND_ORANGE, time: '6:00 PM', place: 'Home' },
  { date: '2025-09-05', title: 'Doctor Check-up', color: BRAND_ORANGE, time: '10:00 AM', place: 'City Clinic' },
  { date: '2025-09-07', title: 'Run 5km', color: BRAND_GREEN, time: '6:30 AM', place: 'Riverside' },
  { date: '2025-09-12', title: 'Pilates', color: BRAND_GREEN, time: '7:30 AM', place: 'Gym' },
  { date: '2025-09-15', title: 'Grocery & Plan', color: BRAND_ORANGE, time: '5:30 PM', place: 'Market' },
  { date: '2025-09-18', title: 'Swim Session', color: BRAND_GREEN, time: '6:00 AM', place: 'Community Pool' },
  { date: '2025-09-21', title: 'Meal Plan Review', color: BRAND_ORANGE, time: '8:00 PM', place: 'Home' },
  { date: '2025-09-24', title: 'Strength Training', color: BRAND_GREEN, time: '7:00 AM', place: 'Gym' },
  { date: '2025-09-27', title: 'Hike', color: BRAND_GREEN, time: '7:00 AM', place: 'Hill Park' },
];

function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = [];
  let current = 1 - startDay;
  for (let week = 0; week < 6; week++) {
    const row = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(year, month, current);
      row.push({
        date,
        inMonth: date.getMonth() === month,
      });
      current++;
    }
    grid.push(row);
  }
  return grid;
}

function formatISODate(date) {
  return date.toISOString().split('T')[0];
}

function EventBadge({ title, color }) {
  return (
    <div
      className="mt-1 inline-flex items-center rounded-md px-2 py-1 text-[11px] font-medium text-gray-800"
      style={{ background: 'white', border: '1px solid #e5e7eb' }}
    >
      <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="truncate">{title}</span>
    </div>
  );
}

function SidebarCard({ title, date, time, place, color }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" /> {date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" /> {time}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">{place}</p>
        </div>
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      </div>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button className={brandOutlineButton}>Edit</button>
        <button className={brandButton}>Remove</button>
      </div>
    </div>
  );
}

function Calendar() {
  const year = 2025;
  const month = 8;
  const grid = getMonthDays(year, month);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 bg-gray-50 min-h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Calendar</h1>
          <div className="hidden md:flex items-center gap-2 rounded-lg border bg-white px-2 py-1 text-sm text-gray-600 shadow-sm">
            <Search className="h-4 w-4" />
            <input className="outline-none" placeholder="Search" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className={brandButton}>
            <Download className="h-4 w-4" /> Export
          </button>
          <button className={brandOutlineButton}>
            <Info className="h-4 w-4" /> Help
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {kpis.map((k, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{k.label}</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{k.value}</p>
            </div>
            <div className={`h-10 w-10 rounded-lg grid place-items-center ${k.tone}`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Main layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left: Calendar grid */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b bg-gradient-to-b from-white to-gray-50">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </button>
              <div className="px-3 py-1.5 rounded-lg border bg-white text-sm font-medium">
                September 2025
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND_GREEN }} /> Meal Planning
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND_ORANGE }} /> Appointments/Events
              </div>
            </div>
          </div>

          {/* Days header */}
          <div className="grid grid-cols-7 border-b bg-white/80 text-xs font-semibold text-gray-500">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="px-4 py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Month grid */}
          <div className="grid grid-cols-7">
            {grid.map((week, wi) => (
              <React.Fragment key={wi}>
                {week.map((cell, di) => {
                  const id = formatISODate(cell.date);
                  const dayEvents = events.filter((e) => e.date === id);
                  return (
                    <div
                      key={di}
                      className={`min-h-28 border-b border-r last:border-r-0 px-2 py-2 ${
                        cell.inMonth ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`font-medium ${
                            cell.inMonth ? 'text-gray-700' : 'text-gray-400'
                          }`}
                        >
                          {cell.date.getDate()}
                        </span>
                        <button className="rounded-md px-2 py-0.5 text-[11px] border border-gray-200 text-gray-600 hover:bg-gray-50">
                          Add
                        </button>
                      </div>
                      <div className="mt-1 space-y-1">
                        {dayEvents.map((ev, i) => (
                          <EventBadge key={i} title={ev.title} color={ev.color} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 border-t bg-white/80">
            <span>© 2025 MealMap</span>
            <div className="flex items-center gap-3">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-sm font-semibold text-gray-800">Schedule Details</h3>
              <button className="p-1.5 rounded-md hover:bg-gray-100">
                <Info className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <SidebarCard
                title="Morning Yoga Session"
                date="Tue, 2 September 2025"
                time="7:00 AM"
                place="Rivertown Yoga"
                color={BRAND_GREEN}
              />
              <SidebarCard
                title="General Health Check-up"
                date="Fri, 5 September 2025"
                time="10:00 AM"
                place="City Clinic"
                color={BRAND_ORANGE}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">People</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <User className="h-4 w-4 text-gray-500" /> 5 teammates invited
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Calendar;

