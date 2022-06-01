import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from "./Pages/Home"
import Sponsors from "./Pages/Sponsors"
import Teams from "./Pages/Teams"
import AllDrivers from "./Pages/AllDrivers"

function App() {
  return (
    <div className="App">

      <Router>

        
        <Routes>

            
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<Sponsors/>} />
            <Route path="/drivers" exact element={<AllDrivers/>} />
            <Route path="/teams" exact element={<Teams/>} />

         
            
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
