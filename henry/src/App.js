import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Lading/Landing";
import Navbar from "./Components/NavBar/navbar";

function App() {
  return (
    <div >
      <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </div>
  );
}

export default App;
