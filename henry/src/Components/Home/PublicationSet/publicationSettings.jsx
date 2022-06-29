import React from "react";
import { SettingsCont, SettingHead, Public, PvSettings } from "../HomeStyles/PublicationSet";
import {BsImage} from 'react-icons/bs';
import {FiVideo} from 'react-icons/fi';



export default function PubliSettings(props){


    return(
        <SettingsCont>
        <div>
            <SettingHead>
                <div className="imgcont">
                <img src='https://pps.whatsapp.net/v/t61.24694-24/290677430_5164544103661951_7207137047910304297_n.jpg?ccb=11-4&oh=01_AVz5pCM0_X1bv4JdP1ZQk26qTuL3csXlwxUGqxi_VrOwEg&oe=62C7ED81'/>
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
        </SettingsCont>
    )
}