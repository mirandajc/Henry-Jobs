import React,{useState} from "react";
import { InnerModal, EditCloseButton, Fotos, NameLast, RedesEdit, Cont2, SelectorCou, Foto1,Foto2,TecOther, AboutAs  } from "./profileStyles/EditModal";
import {MdOutlineInsertPhoto} from 'react-icons/all';
import {BsGithub, BsLinkedin}from 'react-icons/bs';
import {SiGmail} from 'react-icons/all';
import {MdAddAPhoto} from 'react-icons/all';
import {countries} from '../Register_form/gistfile1.json';

export default function InnModal(){
//nombre, banner, fotoperfil, ubicacion, github, linkedin, mail,instancia, tecnologias, otros estudios, acercaDE, favoritos

const [foto, setFoto]= useState(false);
const [input,setInput]= useState('');
const [inputd,setInputd]= useState('');
const [ allCities, setAllCities ] = useState([]); 


const [edituser, setEditUser]= useState({
    username: {},
    id:'',
    email:'',
    profileImage: {},
    technologies:[],
    country:{},
    languages:'',
    otherStudies:[],
    banner:{},
    acercaDe:''

})








// function handlePicture(e){
//     e.preventDefault();
//     console.log(e.target.value)
//     setInput(e.target.value);

//     if(input.length >0){
//         console.log(input.length)
//         setFoto(true)
//     }
// }

// function handleBanner(e){
//     e.preventDefault();
//     console.log(e.target.value)
//     setInputd(e.target.value);

//     if(inputd.length >0){
//         console.log(inputd.length)
//         setFoto(true)
//     }
// }

    return(
        <InnerModal>
            <EditCloseButton>
                <button>X</button>
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
                <button>Gurardar</button>
               </div>
            </Fotos>

            <Cont2>     

                <h2>Editar perfil:</h2> 
            <NameLast>
                <div>
                    <label>Nombre:</label>
                    <input placeholder="Nombre"/>
                </div>
                <div>
                    <label>Apellido:</label>
            <input placeholder="Apellido"/>
                </div>
            </NameLast>

            

            <SelectorCou>
                <h3>Ubicacion:</h3>
                <div>
                <select >
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
                <input placeholder="GitHub"/>
            </div>
            <div>
                <SiGmail className="mail"/>
            <input placeholder="Mail"/>
            </div>
            <div>
            <BsLinkedin className="ln"/>
            <input placeholder="LinkedIn"/>
            </div>
            </RedesEdit>

            <TecOther>
                <h3>Tecnologias:</h3>
            <input placeholder="Tecnologias"/>
            </TecOther>

            <TecOther>
            <h3>Otros estudios:</h3>
            <input placeholder="Otros estudios"/>
            </TecOther>

            <AboutAs>
                <h3>Acerca de:</h3>
            <input placeholder="Acerca de"/>
            </AboutAs>

            </Cont2>

        </InnerModal>

    )


}