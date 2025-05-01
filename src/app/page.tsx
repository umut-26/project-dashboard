import ProjectSummary from "./ProjectSummary";
import TodayTask from "./TodayTask";
import Yukarı from "./yukarı";
import { Component as SagAlt } from "./sagalt";
import { Component as SagOrta } from "./sagorta";

export default function Home() {
  return (
    <div className="flex-1 mt-[-20px]">
      <Yukarı />
      <div className="flex flex-row space-x-4">
        <div className="w-3/5">
          <ProjectSummary />
        </div>
        <div className="w-2/5">
          <SagOrta />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-3/5">
          <TodayTask />
        </div>
        <div className="w-2/5 h-[220px]">
          <SagAlt />
        </div>
      </div>
    </div>
  );
}
