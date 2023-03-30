import { useState, useEffect } from 'react'
import './logo.css'
import logo2 from './white_check.png'
import logo1 from './grey_check.png'

function Logo () {
  return (
    <div class='image-container'>
      <img src={logo1} alt='Image 1' class='img'></img>
      <img src={logo2} alt='Image 2' class='img-hover'></img>
    </div>
  )
}

export default Logo
