import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Lading/Landing";

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </div>
  );
}

export default App;
