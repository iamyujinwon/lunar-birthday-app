// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './pages/index';
import Info from './pages/info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </Router>
  );
}

export default App;
