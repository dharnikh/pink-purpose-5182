import './App.css';
// import Navbar from './components/Navbar';
// import Menubar from './components/Menubar';
// import AllRoutes from './Routes/AllRoutes';
import Navbar from "./Components/Navbar"
import Menubar from "./Components/Menubar"
import AllRoutes from "./Routes/AllRoutes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menubar/>
      <AllRoutes/>     
      
    </div>
  );
}

export default App;
