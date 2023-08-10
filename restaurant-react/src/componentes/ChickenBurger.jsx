import React from 'react'
import '../hojas-de-estilos/ProductosMenu.css'
import MenuChickenBurger from './MenuChickenBurger'

export default function ChickenBurger() {
  return (

    <div className='Product'>

      <div className='title'><h1>Chicken Burgers</h1></div>

      <div className='componentes'><MenuChickenBurger
        imagen= {'Burger'}
        nombre={'Burger Chicken'}
        descripcion= {'Hamburguesa con Pollo, Lechuga y Mayonesa baja en grasa.'}
        precio ={'$12'}
      />
      <MenuChickenBurger
        imagen= {'Crispy'}
        nombre={'Burger Chicken'}
        descripcion= {'Hamburguesa con pollo apanado, mayonesa y pepinillos.'}
        precio ={'$15'}
      />
      <MenuChickenBurger
        imagen= {'Spicy'}
        nombre={'Burger Chicken'}
        descripcion= {'Hamburguesa con Pollo, Lechuga y Mayonesa baja en grasa'}
        precio ={'$10'}
      />
      <MenuChickenBurger
        imagen= {'Premium'}
        nombre={'Burger Chicken'}
        descripcion= {'Hamburguesa con Pollo, Lechuga y Mayonesa baja en grasa'}
        precio ={'$12'}
      /></div>
      
    </div>
  )
}
