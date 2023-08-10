import React from 'react'
import MenuBurger from './MenuBurger'
import '../hojas-de-estilos/ProductosMenu.css'

export default function Hamburguesas() {
  return (
    <div className='Product'>
      <div className='title'><h1>Hamburguesas</h1></div>
      
      <div className='componentes'><MenuBurger
        imagen= {'Bacon'}
        nombre={'Burger Bacon'}
        descripcion= {'Hamburguesa con dos carnes de res de 50gr, tocineta, queso cheddar, cebolla, salsa de tomate y mostaza'}
        precio ={'$10'}
      />
      <MenuBurger
        imagen= {'Triple-Queso'}
        nombre={'Triple Hamburguesa con Queso'}
        descripcion= {'Hamburguesa con tres carne de 50gr, dos queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.'}
        precio ={'$12'}
      />
      <MenuBurger
        imagen= {'Doble-Con-Queso'}
        nombre={'Doble Hamburguesa con Queso'}
        descripcion= {'Hamburguesa con doble carne de 50gr, queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.'}
        precio ={'$12'}
      />
      <MenuBurger
        imagen= {'Burger'}
        nombre={'Hamburguesa'}
        descripcion= {'Hamburguesa con carne de res, cebolla, pepinillos, salsa de tomate y mostaza.'}
        precio ={'$12'}
      />
      <MenuBurger
        imagen= {'Cuarto-De-Libra'}
        nombre={'Cuarto de libra'}
        descripcion= {'Hamburguesa con carne de res, cebolla, pepinillos, salsa de tomate y mostaza.'}
        precio ={'$12'}
      /> </div>

      
    </div>
  )
}
