import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from "./Pages/Home"
import Sponsors from "./Pages/Sponsors"
import Teams from "./Pages/Teams"
import AllDrivers from "./Pages/AllDrivers"
import NavBar from './components/Navbar.js';
import Driver from './components/Driver';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <Router>
      <NavBar/>

        
        <Routes>

            
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<Sponsors/>} />
            <Route path="/Drivers/driverById/:id" exact element={<Driver/>} />
            
            

         
            
        </Routes>
        <Footer/>

      </Router>
     
    </div>
  );
}

export default App;
