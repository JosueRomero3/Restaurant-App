import React from 'react'
import '../hojas-de-estilos/MenuComponent.css'

export default function MenuBurger(props) {
  return (
    <div className='caja'>

      <div className='imagen'>
        <img src={require(`../imagenes/Burger/Burger-${props.imagen}.PNG`)} alt='burger' />
      </div>
      <div className='desciption'>
      <div className='nombre'>{props.nombre}</div>
      <div className='descripcion'>{props.descripcion}</div>
      <div className='precio'>{props.precio}</div>
      </div>
    </div>
  )
}
