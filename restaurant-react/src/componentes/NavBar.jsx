import React from 'react'
import '../hojas-de-estilos/NavBar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [menu, setMenu] =useState('')

  const toggleMenu = ()=>{
    setMenu(!menu)
  }


  return (
    <header>
        <div className="contenedor-header">

            <div className='logo'>
                <h2>Restaurante</h2>
                <button onClick={ toggleMenu }  className='cabecera-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`cabecera-svg  ${menu ? 'isActive' : '' }`}viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`cabecera-svg2  ${menu ? 'isActive' : '' }`} viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                </button>
            </div>

            <ul className={`contenedor-ul ${menu ? 'isActive' : '' }`}>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/'>Nosotros</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/Menu'>Menú</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='/Reservaciones'>Reservaciones</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}
