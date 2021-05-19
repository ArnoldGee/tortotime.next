import Header from "../components/header/Header";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-none">
        <Header/>
      </div>
      <Dashboard />
    </div>
  )
}
