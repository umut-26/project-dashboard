type CardProps = {
  title: string;
  status: string; // Türü genişlettik
  activeTask: string;
  owner: string;
  date: string;
};
  
  const statusStyles: Record<string, string> = {
    'In Progress': 'bg-green-100 text-green-600',
    'Completed': 'bg-blue-100 text-blue-600',
    'In Review': 'bg-yellow-100 text-yellow-600',
  };
  
  export default function Card({ title, status, activeTask, owner, date }: CardProps) {
    return (
      <div className="flex bg-white rounded-md shadow-sm border text-xs h-20">
        {/* Sol çubuk */}
        <div className="w-1.5 bg-cyan-600 rounded-l-md"></div>
  
        {/* İçerik */}
        <div className="p-1.5 flex flex-col gap-0.5 w-full">
          <h2 className="font-semibold text-gray-800 truncate text-[11px]">{title}</h2>
          <span className={`text-[10px] px-2 py-0.5 rounded ${statusStyles[status]} w-fit`}>
            {status}
          </span>
  
          <div className="text-gray-600 truncate text-[10px] border-t pt-0.5">Active Task - {activeTask}</div>
  
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>{owner}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }
  