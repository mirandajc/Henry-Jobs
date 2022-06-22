import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import Home from "./Components/Home/home";
import UserForm from "./Components/Register_form/completeForm";
import Instance from "./Components/Register_form/Students/instance";
import DevType from "./Components/Register_form/Students/devType";
import Languages from "./Components/Register_form/Students/Languages";
import RegisterCompleted from "./Components/Register_form/RegisterCompleted";

function App() {
  return (
    <div >
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<UserForm/>}/>
      <Route path='/register/alumno/1' element={<Instance />} />
      <Route path='/register/alumno/2' element={<DevType />} />
      <Route path='/register/alumno/3' element={<Languages />} />
      <Route path='/registerSuccesful' element={<RegisterCompleted />} />
    </Routes>
    </div>
  );
};

export default App;
