import MaxWidth from "../common/MaxWidth";
import CommandInput from "./CommandInput";
import TaskList from "./TaskList";


const Dashboard = (): JSX.Element => <main className="flex-1 flex flex-col max-h-160">
  <div className="flex-1"><MaxWidth>
    <TaskList/>
  </MaxWidth></div>
  <div className="flex-none">
    <MaxWidth>
      <CommandInput/>
    </MaxWidth>
  </div>
</main>;

export default Dashboard;