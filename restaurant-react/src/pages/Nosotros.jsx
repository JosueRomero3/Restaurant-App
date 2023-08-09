import React from 'react'
import '../hojas-de-estilos/Nosotros.css'
import video from '../media/video.mkv'

export default function Nosotros() {
  return (

    <main className='Contenedor-principal'>
        <section className='contenedor-video'>
          <video src={video} autoPlay muted loop className='video'></video>
          <div className='Nosotros-Text'>
            <h1>Nosotros</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis adipisci laboriosam odit asperiores ab ipsam dolor alias consequuntur enim molestias esse nihil, commodi amet itaque nemo totam pariatur ipsum!

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, porro, aperiam dolor quis soluta saepe nemo est harum vitae provident, explicabo nam illum debitis iste ab omnis deleniti perspiciatis repudiandae?
            </p>
          </div>
        </section>     
    </main>
  )
}
