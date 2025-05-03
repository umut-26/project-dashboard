'use client';

export default function Header() {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-bold text-gray-800">Projects</h1>
        <button className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md text-sm">
          + New Project
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 gap-1">
        <select className="px-2 py-1 rounded-md border border-gray-300 bg-white text-xs text-gray-700 w-fit">
          <option>All Projects</option>
        </select>
        <select className="px-2 py-1 rounded-md border border-gray-300 bg-white text-xs text-gray-700 w-fit">
          <option>A to Z</option>
        </select>
      </div>
    </div>
  );
}
