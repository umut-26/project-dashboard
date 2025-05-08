import Header from "../../components/tasks/Header";
import TaskTable from "../../components/tasks/TaskTable";

export default function TasksPage() {
  return (
    <main className="pt-2 px-4 pb-4">
      <Header />
      <TaskTable />
    </main>
  );
}
