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
import './about.css';
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
                    <a target="_blank"  href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/mirandajc">
                        <FaGithub className="git"/>
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
                    <p>Mi nombre es René Cadena, en mis comienzos opte por la cocina, asi fue como termine siendo chef, 
                    Siempre estuve interesado en la tecnologia, y por medio de mi hermano pude conocer este amplió mundo!
                    Gracias a él fue como ingrese en Henry!, donde termine convirtiendome en un desarrollador Fullstack.</p>
                    <div className='icon'> 
                    <a target="_blank"  href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/mirandajc">
                        <FaGithub className="git"/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={tomi} className='imagencasco' alt="tomas"/>
                <span>
                    <h1>Tomás Arregui Bellino</h1>
                    <p>Estudiante de la Licenciatura en Sistemas y apasionado por el arte de la programación. Amante de Linux y la customización. Me considero un Full-Stack Developer con preferencia por el Back-end! Me encanta tener la oportunidad de resolver nuevos desafíos cada vez que me siento delante de una computadora.</p>
                    <div className='icon'>
                    <a target="_blank"  href="https://www.linkedin.com/in/tom%C3%A1s-arregui-bellino-a503a019a/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/noisyBrain">
                        <FaGithub className="git"/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={gabi} className='imagencasco' alt="gabi"/>
                <span>
                    <h1>Gabriel Cavasso</h1>
                    <p>Buenas! Me llamo Gabriel y soy fullstack developer con preferencia por el backend. Me encontraba estudiando en la facultad la carrera de historia,  hasta que un día, junto con unos compañeros pensamos hacer una pagina de reseñas de libros, en ese momento creíamos que darle forma a una pagina web era relativamente sencillo.  La idea fue descartada, pero el gusto por la programación quedó. Meses después, en diciembre del 2021,  conocí henry y a parir de ahí fue cuando ese gusto se convirtió en pasión.</p>
                    <div className='icon'> 
                    <a target="_blank"  href="https://www.linkedin.com/in/gabriel-cavasso-30234622a/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/sholugs">
                        <FaGithub className="git"/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={nahuel} className='imagencasco' alt="nahuel"/>
                <span>
                    <h1>Nahuel Cempellin</h1>
                    <p>Hola! Soy Nahuel Felipe Cempellin. Soy Full-Stack developer.
                    Me gusta mucho la tecnología, aprender cosas nuevas, e incorporar nuevas herramientas para poder aplicarlas a mis proyectos personales.
                    Apasionado del frontend, y los estilos. Siempre inspirandome, y proponiendome retos
                    que me ayuden a crecer.
                    Me gusta mucho el empezar un proyecto desde un papel, y poder plasmarlo en la pc. </p>
                    <div className='icon'> 
                    <a target="_blank"  href="https://www.linkedin.com/in/nahuel-felipe-cempellin">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/mirandajc">
                        <FaGithub className="git"/>
                    </a>
                    </div>
                </span>
            </div>
            <div className="contenedor">
                <img src={lucho} className='imagencasco' alt="luciano"/>
                <span>
                    <h1>Luciano Dorregaray</h1>
                    <p>Mi nombre es Luciano Dorregaray, soy Fullstack Developer con orientación al Front-end, me considero una persona dedicada y comprometida con lo que hace, con deseos de aprender y mejorar mis habilidades cada día más. Comencé a estudiar programación ya que me gusta la tecnología, resolver problemas de forma lógica y crear, usando la programación como herramienta principal.</p>
                    <div className='icon'> 
                    <a target="_blank"  href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/mirandajc">
                        <FaGithub className="git"/>
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
                    <a target="_blank"  href="https://www.linkedin.com/in/jocelynmiranda/">
                        <SiLinkedin className="linkedin"/>
                    </a>
                    <a target="_blank"  href="https://github.com/mirandajc">
                        <FaGithub className="git"/>
                    </a>
                    </div>
                </span>
            </div>
        </Card>  
        </ContenedorAbout>
        
    )
}