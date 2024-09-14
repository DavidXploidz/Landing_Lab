import React from 'react'
import Logo from '../assets/svg/logo.svg'

export default function NavBar() {
  return (
    <div className='nav-bar nav-bar--top'>
        <figure>
            <img width={60} height={40} src={Logo} alt="logo webpage" />
        </figure>
        <ul className='nav-bar__ul'>
            <li><a href="">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="">Proyectos</a></li>
            <li><a href="">Testimoniales</a></li>
            <li><a href="">Contácto</a></li>
        </ul>
    </div>
  )
}
