import React from 'react'
import { Contenedor , Redes } from '../LandingStyles/footer'
import {AiFillInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Contenedor>
      <a href='https://www.soyhenry.com/admissions'>
        <p>Admisiones</p>
      </a>
      <a href='https://www.soyhenry.com/about-us'>
        <p>Sobre nosotros</p>
      </a>
      <Link to='hc'>
        <p>Preguntas Frecuentes</p>
      </Link>
      <Link to='/contact' >
          <p>Contacto</p>
      </Link>
      <Redes>
        <a>
          <AiFillInstagram/>
        </a>
        <a><FiTwitter/></a>
      </Redes>
    </Contenedor>
    )
}

export default Footer