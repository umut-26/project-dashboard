import ProjectSummary from "./ProjectSummary";
import TodayTask from "./TodayTask";
import Header from "./header";
import { Component as BarChart } from "./barChart";
import { Component as RadialChart } from "./radialChart";

export default function Home() {
  return (
    <div className="flex-1 mt-[-20px]">
      <Header />
      <div className="flex flex-row space-x-4">
        <div className="w-3/5">
          <ProjectSummary />
        </div>
        <div className="w-2/5">
          <RadialChart />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-3/5">
          <TodayTask />
        </div>
        <div className="w-2/5 h-[220px]">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
