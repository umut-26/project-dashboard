'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { colors } from "@/theme/colors";

export default function TodayTask() {
  const tasks = [
    { text: "Create a user flow of social application design", status: "Approved" },
    { text: "Create a user flow of social application design", status: "In review" },
    { text: "Landing page design for Fintech project of singapore", status: "In review" },
    { text: "Interactive prototype for app screens of deltamine project", status: "On going" },
    { text: "Interactive prototype for app screens of deltamine project", status: "Approved" },
  ];

  const getStatusColor = (status: string): React.CSSProperties => {
    switch (status) {
      case "Approved":
        return { backgroundColor: "#dcfce7", color: "#15803d" }; // Tailwind green-100, green-700
      case "In review":
        return { backgroundColor: "#fee2e2", color: "#b91c1c" }; // Tailwind red-100, red-700
      case "On going":
        return { backgroundColor: `${colors.blue}10`, color: colors.blue };
      default:
        return { backgroundColor: "#f3f4f6", color: "#374151" }; // Tailwind gray-100, gray-700
    }
  };
  

  return (
    <div 
      className="rounded-xl p-4 mt-3 ml-3 border" 
      style={{ 
        backgroundColor: `${colors.lightBlue}30`, 
        borderColor: colors.blue 
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-medium" style={{ color: colors.darkBlue }}>Günlük görevler</h2>
        <div className="flex gap-3 text-[11px]">
          <span 
            className="cursor-pointer font-medium hover:opacity-80 transition-colors" 
            style={{ color: colors.blue }}
          >
            Tümü
          </span>
          <span 
            className="cursor-pointer hover:opacity-100 transition-colors" 
            style={{ color: `${colors.darkBlue}B3` }}
          >
            Önemli
          </span>
          <span 
            className="cursor-pointer hover:opacity-100 transition-colors" 
            style={{ color: `${colors.darkBlue}B3` }}
          >
            Notlar
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-[12px]">
        {tasks.map((task, i) => (
          <li 
            key={i} 
            className="flex items-start gap-2 p-2 rounded-lg transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.transparentWhite;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            <Checkbox className="mt-0.5" />
            <div className="flex-1">
              <p className="mb-1 line-clamp-2" style={{ color: colors.darkBlue }}>{task.text}</p>
              <div className="flex justify-between items-center">
                <span 
                  className="px-2 py-0.5 rounded-md text-[10px]"
                  style={getStatusColor(task.status)}
                >
                  {task.status}
                </span>
                <span style={{ color: `${colors.blue}CC`, fontSize: '10px' }}>12 Mayıs</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex justify-center">
        <button 
          className="text-white px-3 py-1 rounded-full hover:opacity-80 transition text-xs"
          style={{ backgroundColor: colors.orange }}
        >
          Yeni görev ekle
        </button>
      </div>
    </div>
  );
}
