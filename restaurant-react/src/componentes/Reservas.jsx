import React, { useEffect } from 'react'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import '../hojas-de-estilos/reservas.css'
import Form from 'react-bootstrap/Form'
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

    if(formData.nombre === '' || formData.telefono === '' || formData.fecha === '' || formData.hora === '' || formData.comensales === '' || formData.email === ''){
        alert('Todos los campos son necesarios')

    } else{
      addDoc(collection(db, 'reserva'), formData)
    alert('Se guardó con exito')

    getReservas()
    }

    
  }

  const onChange = (e)=>{
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  const getReservas = async() =>{
    onSnapshot(collection(db, 'reserva'), (snapShot)=>{
      const lista = [];
      snapShot.forEach(doc =>lista.push({...doc.data(), id: doc.id}))

      setReservas(lista)
    })

    console.log(reservas);
  }

  useEffect(() =>{
    getReservas()
  }, [])

  return (
      <>
      <div className='contenedor-formulario'>
        <Form onSubmit={onSave} className='form-reserva'>
          <Form.Group className='form-group'>
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
            <Form.Control type="email" value={formData.email} onChange={onChange} required name='email' placeholder='Escribe tu correo' />
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
              <tbody>
                {
                  reservas.map(reserva => {
                    return(
                      <tr>
                        <td>{reserva.nombre}</td>
                        <td>{reserva.telefono}</td>
                        <td>{reserva.fecha}</td>
                        <td>{reserva.hora}</td>
                        <td>{reserva.comensales}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
        </div>
      </div>
      </>
  )
}
