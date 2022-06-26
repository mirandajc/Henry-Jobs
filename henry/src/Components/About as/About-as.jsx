import React from "react";
import jocelyn from "../images/jocelyn.png";
import rene from "../images/rene.png";
import lucho from "../images/lucho.png";
import { Card, ContenedorAbout } from "./about";
import {SiLinkedin } from 'react-icons/si'
import {FaGithub } from 'react-icons/fa'

export default function AboutAs() {
    return(
        <ContenedorAbout>
          <Card>
            <div className="contenedor">
                <img src={jocelyn} className='imagencasco'/>
                <span>
                    <h1>Jocelyn Miranda</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                        <SiLinkedin/>
                        <FaGithub/>
                    </div>

                   
                </span>
                <div>
                    
                </div>
            </div>
            <div className="contenedor">
                <img src={rene} className='imagencasco'/>
                <span>
                    <h1>Rene Cadena</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                        <SiLinkedin/>
                        <FaGithub/>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={lucho} className='imagencasco'/>
                <span>
                    <h1>Luciano Dorregaray</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                        <SiLinkedin/>
                        <FaGithub/>
                    </div>
                </span>
            </div>
        </Card>  
        </ContenedorAbout>
        
    )
}