import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h3>Barra de navegación</h3>
      <Link to='/Main1'>Main 1</Link><br />
      <Link to='/Main2'>Main 2</Link>
    </div>
  )
}

export default Navbar
