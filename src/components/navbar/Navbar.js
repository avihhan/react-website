import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/projects'>Home</Link>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
