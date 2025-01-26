import { Header,Footer } from "./components";
// import { AllRoutes } from "./routes/AllRoutes"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className='dark:bg-slate-800'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
