import React, { useMemo, useState } from 'react';
import { Plus, Check, Clock, Droplet, Dumbbell, Utensils, Leaf } from 'lucide-react';

// Small badge by category using the palette from the app (emerald/amber/lime)
function CategoryBadge({ type }) {
  const map = {
    hydration: 'bg-teal-50 text-teal-700 border-teal-200',
    meal: 'bg-amber-50 text-amber-700 border-amber-200',
    exercise: 'bg-purple-50 text-purple-700 border-purple-200',
    fiber: 'bg-lime-50 text-lime-700 border-lime-200',
  };
  const label = {
    hydration: 'Hydration',
    meal: 'Meal',
    exercise: 'Exercise',
    fiber: 'Fiber',
  }[type] || 'Task';
  return (
    <span className={`px-2 py-0.5 text-xs rounded-full border ${map[type] || 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
      {label}
    </span>
  );
}

function Todo() {
  const [items, setItems] = useState([
    { id: 1, text: 'Drink 8 glasses of water', type: 'hydration', done: false },
    { id: 2, text: 'Protein + fiber breakfast', type: 'meal', done: false },
    { id: 3, text: '30 min cardio workout', type: 'exercise', done: false },
    { id: 4, text: 'Add greens to lunch', type: 'fiber', done: true },
  ]);
  const [draft, setDraft] = useState('');
  const [filter, setFilter] = useState('all');

  const completeCount = useMemo(() => items.filter(i => i.done).length, [items]);
  const pct = useMemo(() => items.length ? Math.round((completeCount / items.length) * 100) : 0, [items, completeCount]);
  const visible = useMemo(() => items.filter(i => filter === 'all' ? true : (filter === 'open' ? !i.done : i.done)), [items, filter]);

  const addItem = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setItems(prev => [{ id: Date.now(), text, type: 'meal', done: false }, ...prev]);
    setDraft('');
  };

  const toggle = (id) => setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const iconFor = (type) => {
    switch (type) {
      case 'hydration': return <Droplet className="w-5 h-5 text-sky-500" />;
      case 'meal': return <Utensils className="w-5 h-5 text-amber-500" />;
      case 'exercise': return <Dumbbell className="w-5 h-5 text-purple-500" />;
      case 'fiber': return <Leaf className="w-5 h-5 text-lime-600" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    
    <div className="max-w-4xl mx-auto p-6">

      {/* Header */}
      <div className="rounded-2xl overflow-hidden shadow border border-emerald-100 bg-white">
        <div className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Nutrition Tasks</h1>
              <p className="text-emerald-100 text-sm mt-0.5">Stay consistent with hydration, meals, and workouts</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm">{items.length} tasks</span>
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm">{completeCount} done</span>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-emerald-50">Daily Progress</span>
              <span className="font-semibold">{pct}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/25 overflow-hidden">
              <div className="h-full bg-lime-300 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-3 flex flex-wrap items-center gap-2 border-b border-gray-100">
          <button onClick={() => setFilter('all')} className={`px-3 py-1.5 text-sm rounded-md border ${filter==='all' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>All</button>
          <button onClick={() => setFilter('open')} className={`px-3 py-1.5 text-sm rounded-md border ${filter==='open' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>Open</button>
          <button onClick={() => setFilter('done')} className={`px-3 py-1.5 text-sm rounded-md border ${filter==='done' ? 'bg-lime-50 text-lime-700 border-lime-200' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>Completed</button>
        </div>

        {/* Add */}
        <form onSubmit={addItem} className="p-4 flex items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add a nutrition task (e.g., 30g protein lunch)"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow">
            <Plus className="w-5 h-5" />
            Add
          </button>
        </form>

        {/* List */}
        <ul className="divide-y divide-gray-100">
          {visible.map(item => (
            <li key={item.id} className="p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <button
                onClick={() => toggle(item.id)}
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 shrink-0 ${item.done ? 'bg-emerald-100 border-emerald-300' : 'border-gray-300'}`}
                aria-label={item.done ? 'Mark as not done' : 'Mark as done'}
                title={item.done ? 'Uncomplete' : 'Complete'}
              >
                {item.done ? <Check className="w-4 h-4 text-emerald-700" /> : <Clock className="w-4 h-4 text-gray-400" />}
              </button>
              <span>{iconFor(item.type)}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-medium ${item.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item.text}</p>
                <div className="mt-1 flex items-center gap-2">
                  <CategoryBadge type={item.type} />
                  {item.type === 'meal' && <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">Protein focus</span>}
                </div>
              </div>
              <button onClick={() => remove(item.id)} className="text-xs text-gray-400 hover:text-red-500">Remove</button>
            </li>
          ))}
          {visible.length === 0 && (
            <li className="p-8 text-center text-gray-500">No tasks in this view.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todo;