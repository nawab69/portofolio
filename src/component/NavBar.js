import React from 'react'
import { AlignCenter, Menu } from 'react-feather'
import header from '../images/logo/multicone.png'
import ContactImage from '../images/contact-24-7-4.svg'
const NavBar = () => {
     const clickEvent = (e)=>{
         console.log(e.target)
     }
      return (
            <>
                  
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
        <div className="container">
            <a className="navbar-brand logo" href="index-1.html">
                 {/* <img src={header} alt="" className="logo-light" height='' /> */}
                 <img src={header} alt="" className="img-fluid" width="200px"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                 <div className="icon-mono toggle-menubar">
                    <AlignCenter />
                </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto navbar-center" id="navbar-navlist">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active" id='bar' onClick={clickEvent} >Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" id='bar'>Services</a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#features" className="nav-link">Features</a>
                    </li> */}
                     <li className="nav-item">
                        <a href="#project" className="nav-link" id='bar'>Projects</a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
                    </li> */}
                    <li className="nav-item">
                        <a href="#team" className="nav-link" id='bar'>Team</a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#blog" className="nav-link">Blog</a>
                    </li> */}
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" id='bar'>Contact Us</a>
                    </li>
                </ul>
                <a href="#contact" className="btn btn-sm rounded-pill btn-golden nav-btn ms-lg-3">Let's Talk</a>
            </div>
        </div>
        
    </nav>
            </>
      )
}

export default NavBar
