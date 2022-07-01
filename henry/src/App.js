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
import Contact from "./Components/Landing/Footer/Contact";
import Faq from "./Components/Landing/Footer/Faq";
import Footer from "./Components/Landing/Footer/Footer";
import WorkWall from './Components/Post/WorkWall/WorkWall';
import LoginPage from "./Components/Login/LoginPage/login";
import LoginCard from "./Components/Login/LoginPage/loginCard";
import RegisterPage from "./Components/Login/registerPage/registerPage";
import StudentsWall from "./Components/Post/StudentsWall/StudentsWall";


function App() {
  return (
    <div className="body">
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>//ususario logeado no!
      <Route path='/login' element={<LoginCard/>}/>//ususario logeado no!
      <Route path='/register' element={<RegisterPage/>}/>//ususario logeado no!
      <Route path='/home' element={<Home/>}/> // no tendria que verlo alguien no logeado
      <Route path='/registerform' element={<UserForm/>}/> // solo los nuevos usuarios 
      <Route path='/register/alumno' element={<RegisterAlumn />} />// solo los nuevos usuarios 
      <Route path='/register/business' element={<RegisterBusiness />} />// solo los nuevos usuarios 
      <Route path='/register/recruiter' element={<RegisterRecruiter />} />// solo los nuevos usuarios 
      <Route path='/register/staff' element={<RegisterStaff />} />// solo los nuevos usuarios 
      <Route path='/details/:id' element={<DetailStudent/>}/>//preguntar a rene
      <Route path='/profile/:userName' element={<ProfileLogic/>}/>//preguntar a rene
      <Route path='/perfil' element={<StudentCompletePage/>}/> //solo acceso a edit al usuairo propietario
      <Route path="/proyects" element={<Proyects/>}/>
      <Route path="/about-as" element={<AboutAs/>}/>
      <Route path="/ads" element={<Ads/>}/>
      <Route path="/booms" element={<Booms/>}/>
<<<<<<< HEAD
      <Route path='/workwall' element={<WorkWall/>}/> //todos los registrados
    
=======
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/hc" element={<Faq/>}/>
      <Route path='/workwall' element={<WorkWall/>}/>
      <Route path="/students" element={<StudentsWall />} />
>>>>>>> 1b2756f00984e58b0afdcf60533dc71b0ae06a90
    </Routes>
    <Footer/>
    </div>
  );
};

export default App;
