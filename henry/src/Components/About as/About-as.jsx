import React from "react";
import jocelyn from "../images/jocelyn.png";
import rene from "../images/rene.png";
import lucho from "../images/lucho.png";
import tomi from "../images/tomi.png";
import gabi from "../images/gabi.png";
import laura from "../images/laura.png";
import nahuel from "../images/nahuel.png"
import { Card, ContenedorAbout } from "./about";
import {SiLinkedin } from 'react-icons/si'
import {FaGithub } from 'react-icons/fa'
import cambio from "../images/cambio.png"
export default function AboutAs() {
    return(
        <ContenedorAbout>
          <Card>
            <div className="contenedor">
                <img src={jocelyn} className='imagencasco' alt="Jocelyn" />
                <span>
                    <h1>Jocelyn Miranda</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/mirandajc">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
                <div>
                    
                </div>
            </div>
            <div className="contenedor">
                <img src={rene} className='imagencasco' alt="rene"/>
                <span>
                    <h1>Rene Cadena</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/mirandajc">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={tomi} className='imagencasco' alt="tomas"/>
                <span>
                    <h1>Tomas Aguerri</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'>
                    <a href="https://www.linkedin.com/in/tom%C3%A1s-arregui-bellino-a503a019a/">
                        <SiLinkedin/>
                    </a>
                    <a href="www.github.com/noisyBrain">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={gabi} className='imagencasco' alt="gabi"/>
                <span>
                    <h1>Gabriel Cavasso</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/gabriel-cavasso-30234622a/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/sholugs">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={nahuel} className='imagencasco' alt="nahuel"/>
                <span>
                    <h1>Nahuel Cempellin</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/mirandajc">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={lucho} className='imagencasco' alt="luciano"/>
                <span>
                    <h1>Luciano Dorregaray</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/mirandajc">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={laura} className='imagencasco' alt="laura"/>
                <span>
                    <h1>Laura Surimi</h1>
                    <p>Lorem ipsum dolor sit amet. Quo debitis pariatur aut obcaecati iusto cum fuga saepe ab quae cumque id esse corporis qui Quis vero. Qui dolores deserunt eum doloremque dolor ad labore voluptate aut obcaecati ipsa!</p>
                    <div className='icon'> 
                    <a href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/mirandajc">
                        <FaGithub/>
                    </a>
                    </div>
                </span>
            </div>
        </Card>  
        </ContenedorAbout>
        
    )
}