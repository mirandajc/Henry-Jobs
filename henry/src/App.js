import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import './App.css';
import Home from "./Components/Home/home";
import UserForm from "./Components/Register_form/completeForm";
import RegisterAlumn from "./Components/Register_form/RegisterAlumn";
import RegisterCompleted from "./Components/Register_form/RegisterCompleted";
import DetailStudent from "./Components/Home/HomeForBusiness/DetailStudents";
import ProfileLogic from "./Components/Profile/ProfileLogic";

function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<UserForm/>}/>
      <Route path='/register/alumno' element={<RegisterAlumn />} />
      <Route path='/details/:id' element={<DetailStudent/>}/>
      <Route path='/profile/:name' element={<ProfileLogic/>}/>
    </Routes>
    </div>
  );
};

export default App;
