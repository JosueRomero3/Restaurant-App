import React from 'react'
import '../hojas-de-estilos/Menu.css'
import { NavLink, Link, Outlet } from 'react-router-dom'

export default function Menu() {
  return (
    <main className='Contenedor-principal'>
      
      <div className='contenedor-menu'>
      
        <section className='productos-1'>
          <h3 className='productos1'>
            <Link className='link' to='/menu'>Productos</Link> 
          </h3>
          <div className='productos-lista'>
              <ul>
                  <li className='producto'>
                    <Link className='link' to={'/Menu/Hamburguesas'}>Hamburguesas</Link>  
                  </li>
                  <li className='producto'>
                    <Link className='link' to={'/Menu/Chicken-Burger'}>Chicken Burger</Link>  
                  </li>
                  <li className='producto'>
                  <Link className='link' to={'/Menu/Bebidas'}>Bebidas</Link>
                  </li>
                  <li className='producto'>
                  <Link className='link' to={'/Menu/Postres'}>Postres</Link>
                  </li>
              </ul>
          </div>
        </section>

        <section className='menu'>
            <h1>Nuestros Productos</h1>

            <div className='lista-menu'>
            <Outlet/>
            </div>
        </section>

      </div>
      
    </main>
  )
}
