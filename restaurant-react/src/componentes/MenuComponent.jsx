import React from 'react'
import '../hojas-de-estilos/MenuComponent.css'

export default function MenuComponent(props) {
  return (
    <div className='caja'>
      <div className='imagen'>{props.imagen}</div>
      <div className='descripcion'>{props.descripcion}</div>
      <div className='precio'>{props.precio}</div>
    </div>
  )
}
