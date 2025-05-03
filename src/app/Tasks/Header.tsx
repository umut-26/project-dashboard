'use client';

export default function Header() {
  return (
    <div className="mb-4">
      <h1 className="text-lg font-bold text-gray-800 mb-2">Tasks</h1>
      <hr className="border-gray-400 mb-3" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 gap-1">
        <select className="px-2 py-1 rounded-md border border-gray-300 bg-white text-xs text-gray-700">
          <option>All Tasks</option>
        </select>
        <select className="px-2 py-1 rounded-md border border-gray-300 bg-white text-xs text-gray-700">
          <option>Due Date</option>
        </select>
      </div>
    </div>
  );
}
