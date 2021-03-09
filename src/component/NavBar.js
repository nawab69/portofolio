import React from 'react'

const NavBar = () => {
      return (
            <div>
                  
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
        <div className="container">
            
            <a className="navbar-brand logo" href="index-1.html">
                <img src="images/logo-dark.png" alt="" className="logo-dark" height="28" />
                <img src="images/logo-light.png" alt="" className="logo-light" height="28" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="" data-feather="menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto navbar-center" id="navbar-navlist">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#team" className="nav-link">Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact Us</a>
                    </li>
                </ul>
                <a href="" className="btn btn-sm rounded-pill nav-btn ms-lg-3">Buy Now</a>
            </div>
        </div>
        
    </nav>
            </div>
      )
}

export default NavBar
