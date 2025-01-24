import { Header,Footer } from "./components";
// import { AllRoutes } from "./routes/AllRoutes"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
