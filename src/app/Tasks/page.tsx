import Header from "./Header";
import TaskTable from "./TaskTable";

export default function TasksPage() {
  return (
    <main className="pt-2 px-4 pb-4">
      <Header />
      <TaskTable />
    </main>
  );
}
