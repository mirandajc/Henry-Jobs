import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
<<<<<<< HEAD
import Home from "./Components/Home/home";
=======
import './App.css';

>>>>>>> LandingBooms

function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
