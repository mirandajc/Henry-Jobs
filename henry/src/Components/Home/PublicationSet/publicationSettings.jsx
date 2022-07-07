import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SettingsCont, SettingHead, Public, PvSettings } from "../HomeStyles/PublicationSet";
import {BsImage} from 'react-icons/bs';
import {FiVideo} from 'react-icons/fi';
import {RiArticleLine} from 'react-icons/all';
import {SiBitcoinsv} from 'react-icons/all';
import { profileID } from "../../../reducer/actions/actionPost";



export default function PubliSettings(props){

    const dispatch= useDispatch()
    const userData= useSelector((state)=> state.fetchPostReducer.responseProfile);
    const[render,setRender]= useState(false)

    const user= localStorage.getItem('TK');
    const usUser= JSON.parse(user);
    const usUserId= usUser.id
    
    useEffect(()=>{

        dispatch(profileID(usUserId))

    },[])
    useEffect(()=>{
        if(userData.name !== undefined){
            setRender(true)
        }
    },[userData])
    
   

    return(
        <SettingsCont>
            {
                render?
                <div>
            
                <SettingHead>
                    <div className="imgcont">
                    <img src={userData.profileImage.secure_url}/>
                    </div>
                    <Public>
                    <input placeholder="Comparte tus progresos!"/>
                    <button>Publicar</button>
                    </Public>
                </SettingHead>
    
                <PvSettings>
                    <div>
                    <BsImage className="foto"/>
                    <p>Foto</p>
                    </div>
    
                    <div>
                    <FiVideo className="video"/>
                    <p>Video</p>
                    </div>

    
                </PvSettings>
            </div>
            : null
            }
       
        </SettingsCont>
    )
}