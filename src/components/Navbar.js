import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-light text-light position-fixed w-100 top-0 z-3">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 fw-bold ms-5 text-dark" to="/">News<span className='text-danger'>Wala</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-2 gap-3">
        
         <li className="nav-item">
          <Link className="nav-link" to="/politics">Politics</Link>
        </li>
       
         <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link " to="/entertainment">Entertainment</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/education">Education</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>  
      </div>
    )
}

export default Navbar
