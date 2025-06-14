import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">MERN APP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link" >Create Post</Link>
      </li> 
      <li className="nav-item">
        <Link to="/all" className="nav-link" >All Post</Link>
      </li>
    </ul>
  </div> 
</nav>
  )
}
