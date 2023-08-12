import React from 'react'
import '../hojas-de-estilos/ProductosMenu.css'
import MenuPostres from './MenuPostres'

export default function Postres() {
  return (

    <div className='Product'>
      
      <div className='title'><h1>Postres</h1></div>

      <div className='componentes'>
        <MenuPostres
            imagen= {'Oreo'}
            nombre={'Helado de Oreo'}
            descripcion= {'Si las galletas Oreo te gustan por sí solas, imagínate acompañarlas con nuestra deliciosa mezcla de helado 100% de leche'}
            precio ={'$4'}
        />
        <MenuPostres
            imagen= {'M&M'}
            nombre={'Helado de M&M'}
            descripcion= {"Helado 100% de leche con un puñado de deliciosos M&M's, disfruta cada uno en un buena cucharada de helado."}
            precio ={'$5'}
        />
        <MenuPostres
            imagen= {'YogoYogo'}
            nombre={'Yogo Yogo Cuchareable HM'}
            descripcion= {'Yogurt cuchareable sabor Melocotón.'}
            precio ={'$2'}
        />
        <MenuPostres
            imagen= {'ConoChocolate'}
            nombre={'Cono Chocolate'}
            descripcion= {'Cono con Mezcla de Chocolate.'}
            precio ={'$3'}
        />
        <MenuPostres
            imagen= {'ConoVainilla'}
            nombre={'Cono Vinilla'}
            descripcion= {'Disfruta de un delicioso helado de vainilla a cualquier hora del día.'}
            precio ={'$3'}
        />
      </div>

      
    </div>
  )
}
