import React from 'react'
import { Link } from 'react-router-dom'
import './menu.styles.css'

const Menu = () => {
    return (
        <ul className="navbar">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/livros">Livros</Link>
      </li>
      <li>
        <Link className="link" to="/outfits">Outfits</Link>
      </li>
      <li>
        <Link className="link" to="/cinematografia">Cinematografia</Link>
      </li>
    </ul>
    )
}

export default Menu