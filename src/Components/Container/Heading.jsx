import React from 'react'
import { images } from '../images'

const Heading = () => {
  return (
    <section className='heading' id='home'>
          <div className='left'>
            <p className='title'>
              <span className='text-cyan-gradient'>Aniyomi</span>
              <br />
              First Web-Application Fork
            </p>
            <p className="descr">
              Anime website based on <a href="#animeiet">Animeiat</a> API, and <a href="#">Aniyomi Extensions</a>.
            </p>
            <a className='watch-btn' href="#popular">
              <span><i className="fa fa-play"></i></span> watch
            </a>
          </div>

          <div className='right'>
            <img src={images.banner} alt="" />
            <div className="glow"></div>
          </div>
    </section>
  )
}

export default Heading