import React, { useEffect, useState } from 'react'
import './Navbar.css'
import NavbarData from './Navbar.json'

const Navbar = () => {
    
  return (
    <nav>
        {NavbarData.map((link, index) => (
            <a key={index} href={link.url}>
                {link.title}
            </a>
        ))}
    </nav>
  )
}

export default Navbar