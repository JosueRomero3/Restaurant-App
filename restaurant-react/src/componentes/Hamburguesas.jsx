import React from 'react'
import MenuComponent from './MenuComponent'
import '../hojas-de-estilos/ProductosMenu.css'

export default function Hamburguesas() {
  return (
    <div className='Hamburguesas'>
        <MenuComponent
        imagen= {'Soy una imagen'}
        descripcion= {'Tengo hambre'}
        precio ={'muy cara'}
        />
        <MenuComponent
        imagen= {'Soy una imagen'}
        descripcion= {'Tengo hambre'}
        precio ={'muy cara'}
        />
        <MenuComponent
        imagen= {'Soy una imagen'}
        descripcion= {'Tengo hambre'}
        precio ={'muy cara'}
        />
        <MenuComponent
        imagen= {'Soy una imagen'}
        descripcion= {'Tengo hambre'}
        precio ={'muy cara'}
        />
    </div>
  )
}
