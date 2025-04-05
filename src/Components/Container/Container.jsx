import React from 'react'
import './Container.css'
import Heading from './Heading'
import Popular from './Popular'

const Container = () => {
  return (
    <div className='container'>
        <Heading />
        <Popular />
    </div>
  )
}

export default Container