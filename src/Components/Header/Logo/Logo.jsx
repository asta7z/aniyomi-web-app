import React from 'react'
import { images } from '../../images'
import "./Logo.css"

const Logo = () => {
  return (
    <a className='logo' href='index.html'>
        <img src={images.logo} alt="logo" />
        Aniyomi
    </a>
  )
}

export default Logo