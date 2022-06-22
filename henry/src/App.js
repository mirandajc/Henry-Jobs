import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import Home from "./Components/Home/home";
import DetailStudent from "./Components/Home/HomeForBusiness/DetailStudents";

function App() {
  return (
    <div >
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/details/:id' element={<DetailStudent/>}/>
    </Routes>
    </div>
  );
}

export default App;
