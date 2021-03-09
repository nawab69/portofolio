import React from 'react'
import BackgroundImage from '../images/white-bg.jpg'
import { Navigation2, Play, PlayCircle, Rewind,AlignCenter, Menu } from 'react-feather'

const Hero = () => {
      return (
            <>
                {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
        <div className="container">
            <a className="navbar-brand logo" href="index-1.html">
                <h4>MULTICONE</h4>
                <img src="images/logo-dark.png" alt="" className="logo-dark" height="28" />
                <img src="images/logo-light.png" alt="" className="logo-light" height="28" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="icon-mono toggle-menubar">
                    <AlignCenter />
                </span>
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
                        <a href="#team" className="nav-link">Team</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact Us</a>
                    </li>
                </ul>
                <a href="" className="btn btn-sm rounded-pill btn-golden nav-btn ms-lg-3">Let's Talk</a>
            </div>
        </div>
        
    </nav> */}
                  
    <section className="hero-3 bg-center position-relative" style={{background: `linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(${BackgroundImage})`,backgroundSize:'cover'}} id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center">
                        {/* <span className="badge badge-soft-primary mb-4">Professional Landing</span> */}
                        <h1 className="font-weight-semibold mb-4 hero-3-title head">Our goal isn’t to build a <span className="text-gradiant-rose">website</span>  Our goal is to build your <span className="text-gradiant-dark-orange">business</span></h1>
                        <p className="mb-5 text-muted subtitle w-75 mx-auto">Nemo enim ipsam voluptatem quia voluptas sit
                            aut aspernatur aut fugit sed consequuntur magni dolores nesciunt.</p>

                        <div>
                            <button type="button" className="btn btn-golden rounded-pill me-2">Let's Start Discussion</button>
                            <button type="button" className="btn btn-secondary rounded-pill me-2"> Explore <div className="explore-anime" style={{display:'inline-block'}}><Navigation2 fill="white"/></div> </button>
                        </div>

                        
                        <div className="modal fade bd-example-modal-lg" id="watchvideomodal" data-keyboard="false"
                            tabindex="-1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                                <div className="modal-content home-modal">
                                    <div className="modal-header border-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    {/* <video id="VisaChipCardVideo" className="video-box" controls>
                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">

                                    </video> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
      )
}

export default Hero
