import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import {useParams, Link, useNavigate} from 'react-router-dom';
import { InnerModal, EditCloseButton, Fotos, NameLast, RedesEdit, Cont2, SelectorCou, Foto1,Foto2,TecOther, AboutAs  } from "./profileStyles/EditModal";
import {MdOutlineInsertPhoto} from 'react-icons/all';
import {BsGithub, BsLinkedin}from 'react-icons/bs';
import {SiGmail} from 'react-icons/all';
import {MdAddAPhoto} from 'react-icons/all';
import {countries} from '../Register_form/gistfile1.json';
import { EditProfile } from "../../reducer/actions/actionPost";


export default function InnModal(){
//nombre, banner, fotoperfil, ubicacion, github, linkedin, mail,instancia, tecnologias, otros estudios, acercaDE, favoritos

const {id}= useParams();
const dispatch= useDispatch();
const navigate = useNavigate();
const [foto, setFoto]= useState(false);
const [input,setInput]= useState('');
const [inputd,setInputd]= useState('');
const [ allCities, setAllCities ] = useState([]); 


const [edituser, setEditUser]= useState({
    
    nombre:'',
    apellido:'',
    id:'',
    redes:{
        git:'',
        ln:'',
        mail:''
    },
    email:'',
    profileImage: {},
    technologies:[],
    country:[],
    languages:'',
    otherStudies:[],
    banner:{},
    acercaDe:''

})



function handleChange(e){
    e.preventDefault()
    setEditUser({
        ...edituser,
        [e.target.name]: e.target.value
        }
    )

  
}


function handleRedes(e){
    e.preventDefault()
    setEditUser({
        ...edituser,
        redes:{ 
            ...edituser.redes,
            [e.target.name]: e.target.value
        }
    })

    
}


function handleStudio(e){
    e.preventDefault()
    setEditUser({
        ...edituser,
        [e.target.name]: e.target.value
        
    })

    
}


function handleAcercaDe(e){
    e.preventDefault()
    setEditUser({
        ...edituser,
        [e.target.name]: e.target.value
        
    })

    
}


function handleSelect(e){
    console.log(e.target.value)
    
    if(!edituser.country.includes(e.target.value)&& e.target.value !== 'Types'){
     setInput({
         ...edituser,
         country:[ ...edituser.country ,e.target.value]
     })

    }
     
 }



 function handleSubmit(){
     dispatch(EditProfile({id,edituser}));
     navigate(`/profile/${id}`)
     alert('Cambios guardados!')
 }



    return(
        <InnerModal>
            
            <EditCloseButton>
            <Link to={`/profile/${id}`}>
                <button>X</button>
                </Link>
            </EditCloseButton>
            
            <Fotos>
                <div className="cont">
                    <h3>Foto de perfil:</h3>
                   <div className="inner">
                    <Foto1>
                        <MdAddAPhoto  className="ph"/>
                    </Foto1>
                  { foto===true?
                    <img src={input}/>
                    :
                    <MdOutlineInsertPhoto className="puto"/>
                  }
                    </div >
                  <input  type='file'/>
                    
                {/* <textarea value={input} onChange={(e)=>handlePicture(e)} placeholder="url perfil"/> */}
                
                </div>
              
                <div className="cont">
                <h3>Foto del Banner:</h3>
                     <Foto2>
                        <MdAddAPhoto className="ph"/>
                    </Foto2>
                  <div className="inner">
                 { foto===true?
                   <img src={inputd}/>
                   :
                   <MdOutlineInsertPhoto className="puto"/>
                 }
                   </div >
                   <input type='file'/>
               {/* <textarea value={inputd} onInput={(e)=>handleBanner(e)} placeholder="Send nudes"/> */}
               
               </div>

               <div>
                <button onClick={handleSubmit} >Gurardar</button>
               </div>
            </Fotos>

            <Cont2>     

                <h2>Editar perfil:</h2> 
            <NameLast>
                <div>
                    <label>Nombre:</label>
                    <input
                     name="nombre"
                      value={edituser.nombre}placeholder="Nombre"
                      onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Apellido:</label>
            <input
             name="apellido" 
             type='text'
             value={edituser.apellido} placeholder="Apellido"
             onChange={(e)=>handleChange(e)}
            />
                </div>
            </NameLast>

            

            <SelectorCou>
                <h3>Ubicacion:</h3>
                <div>
                <select onChange={(e)=>handleSelect(e)} >
                    <option>Selecciona un País</option>
                    {countries && countries.map(e => {
                        return <option>{e.country}</option>
                    })}
                </select>
               </div>
               <div>
               <select>
                        <option>Selecciona una provincia/estado</option>
                        {allCities.map(e => {
                            return <option>{e}</option>
                        })}
                    </select>
               </div>
            </SelectorCou>
            <RedesEdit>
            <div>
                <BsGithub className="gh"/>
                <input 
                name="git"
                type='text'
                value={edituser.redes.git}
                onChange={(e)=>handleRedes(e)}
                placeholder="GitHub"/>
            </div>
            <div>
                <SiGmail className="mail"/>
            <input 
            name="mail"
            type='text'
            value={edituser.redes.mail}
            onChange={(e)=>handleRedes(e)}
            placeholder="Mail"/>
            </div>
            <div>
            <BsLinkedin className="ln"/>
            <input 
            name="ln"
            type='text'
            value={edituser.redes.ln}
            onChange={(e)=>handleRedes(e)}
            placeholder="LinkedIn"/>
            </div>
            </RedesEdit>

            <TecOther>
                <h3>Tecnologias:</h3>
            <input placeholder="Tecnologias"/>
            </TecOther>

            <TecOther>
            <h3>Otros estudios:</h3>
            <input 
            name="otherStudies"
            type='text'
            value={edituser.otherStudies}
            onChange={(e)=>handleStudio(e)}
            placeholder="Otros estudios"/>
            </TecOther>

            <AboutAs>
                <h3>Acerca de:</h3>
            <input 
            name="acercaDe"
            type='text'
            value={edituser.acercaDe}
            onChange={(e)=>handleAcercaDe(e)}
            placeholder="Acerca de"/>
            </AboutAs>

            </Cont2>

        </InnerModal>

    )


}