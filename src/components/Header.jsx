import React from 'react'
import headerImage from '../assets/header_image.svg'

export default function Header() {
  return (
    <header className='header contenedor'>
        <div className='header__info'>
            <h1 className='header__title'>We are the <span>future</span></h1>
            <p className='header__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero. Laudantium voluptatum mollitia, delectus officia reiciendis nesciunt eum fugit iure.</p>
            <button className='btn btn-primary'>Contact us</button>
        </div>
        <figure className='header__image'>
            <img width={400} height={400} src={headerImage} alt="image header" />
        </figure>
    </header>
  )
}
