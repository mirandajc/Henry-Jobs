import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import './App.css';
import Home from "./Components/Home/home";
import UserForm from "./Components/Register_form/completeForm";
import RegisterAlumn from "./Components/Register_form/RegisterAlumn";
import RegisterRecruiter from "./Components/Register_form/Recruiter/totalPage/RegisterRecruiter";
import DetailStudent from "./Components/Home/HomeForBusiness/DetailStudents";
import ProfileLogic from "./Components/Profile/ProfileLogic";
import RecruiterFreelance from "./Components/Register_form/Recruiter/totalPage/recruiterFree";
import HomeBusinessStudents from './Components/Home/HomeForBusiness/HomeBusinessStudents'

function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<UserForm/>}/>
      <Route path='/register/alumno' element={<RegisterAlumn />} />
      <Route path='/register/recruiter' element={<RegisterRecruiter />} />
      {/* <Route path='/register/recruiterF' element={<RecruiterFreelance/>} /> */}
      <Route path='/details/:id' element={<DetailStudent/>}/>
      <Route path='/profile/:name' element={<ProfileLogic/>}/>
      <Route path='/students' element={<HomeBusinessStudents/>}/>
    </Routes>
    </div>
  );
};

export default App;
