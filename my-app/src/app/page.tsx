import Dashboard from "./components/Dashboard";
import Providerr from "./provider/Providerr";
export default function Home() {
  return (
    <Providerr>
       <Dashboard></Dashboard>
    </Providerr>
   
   
  );
}
