export default function ProjectSummary() {
  const projects = [
    { name: "Nelsa web developement", manager: "Om prakash sao", date: "May 25, 2023", status: "Completed", progress: 100 },
    { name: "Datascale AI app", manager: "Nelsian mando", date: "Jun 20, 2023", status: "Delayed", progress: 30 },
    { name: "Media channel branding", manager: "Tiruveilnya priya", date: "July 13, 2023", status: "At risk", progress: 28 },
    { name: "Corlax iOS app developement", manager: "Matte hannery", date: "Dec 20, 2023", status: "Completed", progress: 100 },
    { name: "Website builder developement", manager: "Sukumar rao", date: "Mar 15, 2024", status: "On going", progress: 50 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-200 text-green-800";
      case "Delayed": return "bg-red-200 text-red-800";
      case "At risk": return "bg-orange-200 text-orange-800";
      case "On going": return "bg-blue-200 text-blue-800";
      default: return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="bg-blue-100 rounded-xl p-4 ml-4"> {/* Buraya sol boşluk eklendi */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-medium">Project summary</h2>
      </div>
      <table className="w-full text-xs text-left">
        <thead className="text-gray-500">
          <tr className="text-left">
            <th className="pl-1">Name</th>
            <th>Project manager</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((proj, i) => (
            <tr key={i} className="border-b border-gray-300">
              <td className="py-1">{proj.name}</td>
              <td>{proj.manager}</td>
              <td>{proj.date}</td>
              <td>
                <span className={`px-1 py-0.5 rounded-full text-[10px] font-medium ${getStatusColor(proj.status)}`}>
                  {proj.status}
                </span>
              </td>
              <td>
                <div className="w-full bg-gray-200 rounded h-1">
                  <div className="bg-green-500 h-1 rounded" style={{ width: `${proj.progress}%` }}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
