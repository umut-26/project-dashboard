'use client';
import { tasksData, Task } from './Data';

const getStatusClass = (status: Task['status']) => {
  switch (status) {
    case 'Completed':
      return 'bg-cyan-300 text-white px-2 py-1 rounded text-xs';
    case 'In Progress':
      return 'bg-green-300 text-white px-2 py-1 rounded text-xs';
    case 'Pending':
      return 'bg-orange-300 text-white px-2 py-1 rounded text-xs';
    default:
      return '';
  }
};

export default function TaskTable() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md max-h-[500px] overflow-y-auto bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="sticky top-0 z-20 bg-white shadow-md">
          <tr className="h-12">
            <th className="px-6 py-3 w-1/4">Tasks</th>
            <th className="px-6 py-3 w-1/4">Projects</th>
            <th className="px-6 py-3 w-1/4">Due Date</th>
            <th className="px-6 py-3 w-1/4">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasksData.map((task, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-3">{task.task}</td>
              <td className="px-6 py-3">{task.project}</td>
              <td className="px-6 py-3">{task.dueDate}</td>
              <td className="px-6 py-3">
                <span className={getStatusClass(task.status)}>{task.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
