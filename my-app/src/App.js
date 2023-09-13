import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Highlights from "./pages/Highlights";
import TechnologyDeployments from "./pages/TechnologyDeployments";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      {/* <Highlights /> */}
      <Navbar/>
      <AllRoutes/>
      {/* <TechnologyDeployments/> */}
    </div>
  );
}

export default App;
