import React from 'react'
import NavBar from '../componentes/NavBar';
import '../hojas-de-estilos/Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './Nosotros';
import Menu from './Menu';
import Contacto from './Contacto';
import Reservaciones from './Reservaciones'
import PageNotFound from './PageNotFound';
import Footer from '../componentes/Footer';
import MenuComponent from '../componentes/MenuComponent';
import Hamburguesas from '../componentes/Hamburguesas';
import Bebidas from '../componentes/Bebidas';

export default function Main() {
  return (
    <div className='contenedor-principal'>
        
        <div className='contenedor'>
            
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={<Nosotros/>}/>
                <Route path='/Menu' element={<Menu/>}>
                  <Route path='/Menu/Hamburguesas' element={<Hamburguesas/>}/>
                  <Route path='/Menu/Bebidas' element={<Bebidas/>}/>
                  
                </Route>
                <Route path='/Reservaciones' element={<Reservaciones/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
        </div>
        
    </div>
  )
}
