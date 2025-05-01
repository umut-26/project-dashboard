export default function TodayTask() {
  const tasks = [
    { text: "Create a user flow of social application design", status: "Approved" },
    { text: "Create a user flow of social application design", status: "In review" },
    { text: "Landing page design for Fintech project of singapore", status: "In review" },
    { text: "Interactive prototype for app screens of deltamine project", status: "On going" },
    { text: "Interactive prototype for app screens of deltamine project", status: "Approved" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-700";
      case "In review": return "bg-red-100 text-red-700";
      case "On going": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-blue-100 rounded-xl p-3 mt-3 ml-3"> {/* Sol taraftan boşluk eklendi */}
      <div className="flex justify-between items-center mb-2">
      <h2 className="text-sm font-medium">Today task</h2> {/* Büyütüldü */}
      <div className="flex gap-1 text-[11px] text-gray-600"> {/* Büyütüldü */}
        <span className="cursor-pointer font-medium">All</span>
        <span className="cursor-pointer">Important</span>
        <span className="cursor-pointer">Notes</span>
        <span className="cursor-pointer">Links</span>
      </div>
      </div>
      <ul className="space-y-1 text-[12px]"> {/* Büyütüldü */}
      {tasks.map((task, i) => (
        <li key={i} className="flex justify-between items-center bg-white px-2 py-1 rounded shadow-sm">
        <div className="flex items-center gap-1">
          <input type="checkbox" className="accent-blue-500 w-3 h-3" />
          <span>{task.text}</span>
        </div>
        <span className={`text-[10px] px-1 py-1 rounded-full font-medium ${getStatusColor(task.status)}`}> {/* Büyütüldü */}
          {task.status}
        </span>
        </li>
      ))}
      </ul>
    </div>
  );
}
