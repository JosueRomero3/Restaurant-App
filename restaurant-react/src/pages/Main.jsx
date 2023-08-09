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

export default function Main() {
  return (
    <div className='contenedor-principal'>
        
        <div className='contenedor'>
        
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={<Nosotros/>}/>
                <Route path='/Menu' element={<Menu/>}/>
                <Route path='/Reservaciones' element={<Reservaciones/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
        </div>
        
    </div>
  )
}
