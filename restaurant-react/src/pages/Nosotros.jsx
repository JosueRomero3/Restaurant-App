import React from 'react'
import '../hojas-de-estilos/Nosotros.css'
import video from '../media/video.mkv'
import Logo from '../imagenes/Logo.png'


export default function Nosotros() {
  return (

    <main className='Contenedor-principal'>
    
        <section className='contenedor-video'>
          <video src={video} autoPlay muted loop className='video'></video>
          <div className='Nosotros-Text'>
            <h1>Sabores que Inspiran</h1>
            <p>Somos amantes de las experiencias inigualables y de los momentos únicos, queremos que nuestros invitados siempre puedan deleitarse y disfrutar en cada una de sus visitas con sus amigos, familias, entre otros. En nuestro restaurante puedes recargar energías, premiar tus victorias y sobre todo crear recuerdos con quien decidas visitarnos.
            Nuestro talento humano está, altamente comprometido y dispuesto a brindarte una experiencia inolvidable.
            </p>
          </div>
        </section>
        <section className="contenedor-blog">

          <article className="blog">

            <h1 className='conocenos'>¿Quiénes Somos?</h1>

            <div className='texto-imagen'>
            <div className='imagen'>
                
                <div className='blog'></div>
                <img src={Logo} alt="imagen"/>
                </div>
                  
  
                <div className='blog-2'>
                  
                <div className='texto'>
                  <h1>Somos The Cartel Burger</h1> 
                  <p>Nacimos en 2021 en ciénaga Magdalena, iniciando operaciones con la inauguración de nuestro primer restaurante de comida casual. Adoptamos un estilo bastante original, y hoy por hoy nos inclinamos por tendencias vanguardistas y un estilo moderno, donde siempre podrás sentirte como en casa.</p>
                </div>
                <hr />
                  <div className='rating'>
                    <div className='nacimiento'>
                      <p>Nacimiento</p>
                      <p>2021</p>
                    </div>
  
                    <div className='Rating'>
                      <p>Rating</p>
                      <p className='stars'>★★★★★</p>
                    </div>
  
                    <div className='ubicacion'>
                      <p>Ubicación</p>
                      <p>Ciénaga, Magdalena</p>
                    </div>
                  </div>
                  </div>
            </div>
            
                
            </article>
        </section>
        <section className='contenedor-imagen'>
          <div className='contenedor-burger'>
          </div>
        </section>
    </main>
  )
}
