import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <h3 className="navbar-brand">
        Daily News
      </h3>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='business'>
              Business News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='entertainment'>
              Entertaiment News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='health'>
              Health News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='science'>
              Science News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='sports'>
              Sports News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='technology'>
              Technology News
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
    </>
  )
}

export default Header
