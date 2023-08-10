import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import '../hojas-de-estilos/reservas.css'
import Form from 'react-bootstrap/Form'
// import img from '../../img/img.jpg'
import db from '../config/dbFirebase'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

export default function Reservas() {

  //para guardar el listado de reservas
  const [reservas, setReservas] = useState([])

  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: '',
    email: ''
  })

  const onSave = (event)=>{
    event.preventDefault()
    console.log(formData);

    addDoc(collection(db, 'reserva'), formData)
    alert('Se guardó con exito')
  }

  const onChange = (e)=>{
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  return (
      <>
      <div className='contenedor-formulario'>
        <Form onSubmit={onSave} className='form-reserva'>
          <Form.Group className='form-group'>
            {/* <img src={img} alt="" /> */}
            <h1>Datos de la Reserva</h1>
            <Form.Label>Nombre completo:</Form.Label>
            <Form.Control type="string" value={formData.nombre} onChange={onChange} name='nombre' placeholder='Escribe tu nombre y apellidos'/>
            <Form.Label>Telefono:</Form.Label>
            <Form.Control type="phone" value={formData.telefono} onChange={onChange} name='telefono' placeholder='Escribe tu telefono'/>
            <Form.Label>Fecha:</Form.Label>
            <Form.Control type="date" value={formData.fecha} onChange={onChange} name='fecha' />
            <Form.Label>Hora:</Form.Label>
            <Form.Control type="time" value={formData.hora} onChange={onChange} name='hora' />
            <Form.Label>Comensales</Form.Label>
            <Form.Control type="string" value={formData.comensales} onChange={onChange} name='comensales' placeholder='Número de personas'/>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={formData.email} onChange={onChange} required name='email' />
            <Form.Text>
              Tu información es privada y no será compartida o reutilizada.
            </Form.Text>
          </Form.Group>

          <button variant='primary' type='submit'>
            Guardar
          </button>
            
        </Form>

        <div className='datos'>
            <Table className='tabla'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Comensales</th>
                </tr>
              </thead>
            </Table>
        </div>
      </div>
      </>
  )
}
