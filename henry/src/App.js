import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import './App.css';


function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </div>
  );
}

export default App;
