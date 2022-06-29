import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import './App.css';
import Home from "./Components/Home/home";
import StudentCompletePage from "./Components/Profile/Students/studentProfileComplete";
import StudentCV from "./Components/Profile/Students/students-cv";
import StudentsProfile from "./Components/Profile/Students/students_profile";
import UserForm from "./Components/Register_form/completeForm";
import RegisterAlumn from "./Components/Register_form/RegisterAlumn";
import RegisterRecruiter from "./Components/Register_form/Recruiter/RegisterRecruiter";
import DetailStudent from "./Components/Home/HomeForBusiness/DetailStudents";
import ProfileLogic from "./Components/Profile/ProfileLogic";
import RegisterBusiness from "./Components/Register_form/Business/RegisterBusiness";
import RegisterStaff from "./Components/Register_form/Staff/RegisterStaff";
import Proyects from "./Components/Proyects/Proyects";
import AboutAs from "./Components/About as/About-as";
import Ads from "./Components/Ads/Ads";
import Booms from "./Components/Landing/booms/booms";
import WorkWall from './Components/Post/WorkWall/WorkWall';
import StudentsWall from "./Components/Post/StudentsWall/StudentsWall";


function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<UserForm/>}/>
      <Route path='/register/alumno' element={<RegisterAlumn />} />
      <Route path='/register/business' element={<RegisterBusiness />} />
      <Route path='/register/recruiter' element={<RegisterRecruiter />} />
      <Route path='/register/staff' element={<RegisterStaff />} />
      <Route path='/details/:id' element={<DetailStudent/>}/>
      <Route path='/profile/:name' element={<ProfileLogic/>}/>
      <Route path='/perfil' element={<StudentCompletePage/>}/>
      <Route path="/proyects" element={<Proyects/>}/>
      <Route path="/about-as" element={<AboutAs/>}/>
      <Route path="/ads" element={<Ads/>}/>
      <Route path="/booms" element={<Booms/>}/>
      <Route path='/workwall' element={<WorkWall/>}/>
      <Route path="/students" element={<StudentsWall />} />
    </Routes>
    </div>
  );
};

export default App;
