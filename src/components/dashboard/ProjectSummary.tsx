'use client';

import { colors } from "@/theme/colors";

export default function ProjectSummary() {
  const projects = [
    { name: "Nelsa web developement", manager: "Om prakash sao", date: "May 25, 2023", status: "Completed", progress: 100 },
    { name: "Datascale AI app", manager: "Nelsian mando", date: "Jun 20, 2023", status: "Delayed", progress: 30 },
    { name: "Media channel branding", manager: "Tiruveilnya priya", date: "July 13, 2023", status: "At risk", progress: 28 },
    { name: "Corlax iOS app developement", manager: "Matte hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
    { name: "Website builder developement", manager: "Sukumar rao", date: "Mar 15, 2024", status: "On going", progress: 50 },
  ];

  const getStatusColor = (status: string): React.CSSProperties => {
    switch (status) {
      case "Completed":
        return { backgroundColor: "#bbf7d0", color: "#166534" }; // Tailwind green-200, green-800
      case "Delayed":
        return { backgroundColor: "#fecaca", color: "#991b1b" }; // Tailwind red-200, red-800
      case "At risk":
        return { backgroundColor: `${colors.orange}20`, color: colors.orange };
      case "On going":
        return { backgroundColor: `${colors.blue}20`, color: colors.blue };
      default:
        return { backgroundColor: "#e5e7eb", color: "#1f2937" }; // Tailwind gray-200, gray-800
    }
  };
  
  const getProgressColor = (progress: number) => {
    if (progress < 30) return colors.orange;
    if (progress < 70) return colors.blue;
    return "#22c55e";
  };

  return (
    <div 
      className="rounded-xl p-4 ml-4 border" 
      style={{ 
        backgroundColor: `${colors.lightBlue}40`,
        borderColor: colors.blue
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-medium" style={{ color: colors.darkBlue }}>Proje özeti</h2>
        <button 
          className="text-xs hover:text-opacity-80 transition-colors" 
          style={{ color: colors.blue }}
        >
          Tümünü gör
        </button>
      </div>
      <table className="w-full text-xs text-left">
        <thead style={{ 
          color: colors.darkBlue, 
          borderBottomWidth: '1px', 
          borderBottomStyle: 'solid', 
          borderBottomColor: `${colors.blue}30` 
        }}>
          <tr>
            <th className="py-2 px-2">Proje Adı</th>
            <th className="py-2 px-2">Proje Yöneticisi</th>
            <th className="py-2 px-2">Tarih</th>
            <th className="py-2 px-2">Durum</th>
            <th className="py-2 px-2">İlerleme</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr 
              key={index} 
              style={{ 
                borderBottomWidth: index !== projects.length - 1 ? '1px' : '0', 
                borderBottomStyle: 'solid', 
                borderBottomColor: `${colors.blue}20` 
              }}
              className="hover:bg-opacity-100 transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.transparentWhite;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
              }}
            >
              <td className="py-2 px-2 font-medium" style={{ color: colors.darkBlue }}>{project.name}</td>
              <td className="py-2 px-2" style={{ color: colors.blue }}>{project.manager}</td>
              <td className="py-2 px-2" style={{ color: `${colors.darkBlue}B3` }}>{project.date}</td>
              <td className="py-2 px-2">
                <span 
                  className="px-2 py-1 rounded-md text-xs"
                  style={getStatusColor(project.status)}
                >
                  {project.status}
                </span>
              </td>
              <td className="py-2 px-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full" 
                    style={{ 
                      width: `${project.progress}%`,
                      backgroundColor: getProgressColor(project.progress)
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
