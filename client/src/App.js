
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">

      <Router>

        
        <Routes>


            <Route path="/" exact element={<Home/>} />
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
