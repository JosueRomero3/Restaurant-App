import React from 'react'
import '../hojas-de-estilos/Nosotros.css'
import video from '../media/video.mkv'
import imagen from '../imagenes/imagen.jpg'

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
        <section className="contenedor-blog">

          <article className="blog">
            <div className='imagen'>
              <img src={imagen} alt="imagen"/>
              </div>
                

              <div className='blog-2'>
                
              <div className='texto'>
                <h1>Lorem ipsum</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id culpa, illo placeat fuga possimus earum ea itaque, accusantium nam perspiciatis magnam reiciendis ratione distinctio? Ipsum doloremque repellendus voluptate voluptates!</p>
              </div>
                <div className='rating'>
                  <div className='nacimiento'>
                    <p>Nacimiento</p>
                    <p>2018</p>
                  </div>

                  <div className='Rating'>
                    <p>Rating</p>
                    <p>★★★★★</p>
                  </div>

                  <div className='ubicacion'>
                    <p>Ubicación</p>
                    <p>Ciénaga, Magdalena</p>
                  </div>
                </div>
                </div>
                
            </article>
        </section>
    </main>
  )
}
