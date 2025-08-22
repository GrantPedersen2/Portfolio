import Dashboard from "./components/Dashboard";
import data from "./lib/data";

export default function Home() {
    return (
        <Dashboard blades={data}/>
    );
}