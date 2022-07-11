import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SettingsCont, SettingHead, Public, PvSettings } from "../HomeStyles/PublicationSet";
import {BsImage} from 'react-icons/bs';
import {FiVideo} from 'react-icons/fi';
import {RiArticleLine} from 'react-icons/all';
import {SiBitcoinsv} from 'react-icons/all';
import { profileID } from "../../../reducer/actions/actionPost";
import {  getPublicationsBusiness, postPublication } from "../../../reducer/actions/actionStudents";
import { technologies } from "../../Post/StudentsWall/select"
import { getPublicationStudents } from "../../../reducer/actions/actionBusiness";




export default function PubliSettings(){

    const dispatch= useDispatch()
    const userData= useSelector((state)=> state.fetchPostReducer.responseProfile);
    const[render,setRender]= useState(false)

    const user= localStorage.getItem('TK');
    const usUser= JSON.parse(user);
    const usUserId= usUser.id
    const type = usUser.type;

    useEffect(()=>{

        dispatch(profileID(usUserId))

    },[])
    useEffect(()=>{
        if(userData.name !== undefined){
            setRender(true)
        }
    },[userData])

    /////////////////////////////////// INPUTS DE PUBLICACION ////////////////////////////////

    const [ input, setInput ] = useState("");
    const [ video, setVideo ] = useState("");

    const [ cartelPub, setCartelPub ] = useState(false);

    const [ tags, setTags ] = useState({
        workModality:"",
        languages:"",
        technologies:[],
        backFront:"",
    });

    const borrarTech = (value) => {
        console.log(value)

        setTags({...tags, technologies: tags.technologies.filter(el => el !== value)});
    };

    const SubmitPublication = () => {
        //tomar datos de la publicacion y mandarlos al back
        // input, foto y video, + el id del user
        if(type === 1 || type === 2){
            const obj = {
                posterUser: usUserId,
                text: input,
                imgVideo: video,
            };      
            dispatch(postPublication(obj));   
            setInput("");
            setVideo("");
        }
        else{
            const obj = {
                posterUser: usUserId,
                text: input,
                imgVideo: video,
                workModality: tags.workModality,
                languages: tags.languages,
                technologies: tags.technologies,
                backFront: tags.backFront,
            };

            dispatch(postPublication(obj));
            
            setInput("");
            setVideo("");
            setTags({
                ...tags,
                workModality:"",
                languages:"",
                technologies:[],
                backFront:"",
            });
        }
        setCartelPub(true)
    };


    const [ inputVideo, setInputVideo ] = useState(false);

    const activarInput = () => {
        setInputVideo(!inputVideo);
    };

    return(
        <SettingsCont>
        {
            type === 1 || type === 2 ? 
            <div>

                {
                    render?
                    <div>
                {/* /////////////////////////////   PUBLICACION DE STUDENT   /////////////////////////// */}
                    <SettingHead>
                        <div className="imgcont">
                        <img src={userData.profileImage.secure_url}/>
                        </div>
                        <Public>
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Comparte tus progresos!"/>
                        <button onClick={SubmitPublication}>Publicar</button>
                        </Public>
                    </SettingHead>
        
                    <PvSettings>
        
                        <div>
                        <FiVideo className="video"/>
                        <button onClick={activarInput}>Video</button>
                        { inputVideo && <input value={video} onChange={(e) => setVideo(e.target.value)} placeholder={"insertar URL"} />}
                        </div>
    
        
                    </PvSettings>
                </div>
                :
                null
            }
           
                
           </div>
                
                
                
                :
                
                /////////////////// PUBLICACION DE EMPRESA ///////////////////////
                <div>

                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={"Comparte una propuesta de trabajo"}></input>
                
                <h2>¿Qué tipo de desarrollador necesitas?</h2>
                <select onChange={(e) => setTags({...tags, backFront: e.target.value })}>
                    <option value={""}>Selecciona un tipo de desarrollador</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Fullstack</option>
                </select>

                <h2>Modalidad de trabajo desarrollador que necesitas:</h2>
                <select onChange={(e) => setTags({...tags, workModality: e.target.value })}>
                    <option value={""}>Seleccionar Modalidad</option>
                    <option>Remoto</option>
                    <option>Presencial</option>
                </select>

                <h2>¿Qué nivel de inglés necesitas que tenga el desarrollador?</h2>
                <select onChange={(e) => setTags({...tags, languages: e.target.value })}>
                    <option value={""}>Selecciona el nivel de inglés</option>
                    <option>A0</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                </select>

                <h2>¿Qué tecnologías necesitas que tu desarrollador maneje?</h2>
                {tags.technologies.map(e => {return(
                    <div><p>{e}</p><button onClick={() => borrarTech(e)}>X</button></div>
                )}) }
                <select onChange={(e) => {
                    if(tags.technologies.includes(e)){
                        return
                    }
                    else{
                        return setTags({...tags, technologies: [...tags.technologies, e.target.value] })}
                    }}>
                    <option value={""}>Selecciona tecnologías</option>
                    { technologies.map(e => <option>{e}</option>) }
                </select>
                
                <button onClick={SubmitPublication}>Publicar</button>

                </div>
        }




        
        { cartelPub && <span>Tu publicacion es una porquería</span> }
            </SettingsCont>
    )
}