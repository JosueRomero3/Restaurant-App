import React from 'react'
import '../hojas-de-estilos/ProductosMenu.css'
import MenuBebidas from './MenuBebidas'

export default function ChickenBurger() {
  return (

    <div className='Product'>
      
      <div className='title'><h1>Bebidas</h1></div>

      <div className='componentes'><MenuBebidas
        imagen= {'CocaColaZero'}
        nombre={'Coca-Cola Zero Regular'}
        descripcion= {'Diversión contra la sed. Prepárate para calmar la sed con esta gaseosa helada.'}
        precio ={'$2'}
      />
      <MenuBebidas
        imagen= {'CocaColaZero'}
        nombre={'Coca-Cola Zero Mediana'}
        descripcion= {'Diversión contra la sed. Prepárate para calmar la sed con esta gaseosa helada.'}
        precio ={'$2,5'}
      />
      <MenuBebidas
        imagen= {'CocaColaZero'}
        nombre={'Coca-Cola Zero Grande'}
        descripcion= {'Diversión contra la sed. Prepárate para calmar la sed con esta gaseosa helada.'}
        precio ={'$3'}
      />
      <MenuBebidas
        imagen= {'Fanta'}
        nombre={'Fanta'}
        descripcion= {'Diversión contra la sed. Prepárate para calmar la sed con esta gaseosa helada.'}
        precio ={'$2'}
      />
      <MenuBebidas
        imagen= {'TeHatsu'}
        nombre={'Té Hatsu'}
        descripcion= {'Diversión contra la sed. Prepárate para calmar la sed con este Té helado.'}
        precio ={'$3'}
      />
      <MenuBebidas
        imagen= {'Agua'}
        nombre={'Agua Manantial'}
        descripcion= {'Agua fresca purificada.'}
        precio ={'$3'}
      /></div>

      
    </div>
  )
}
