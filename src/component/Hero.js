import React from 'react'
import BackgroundImage from '../images/white-bg.jpg'
import { Navigation2, Play, PlayCircle, Rewind,AlignCenter, Menu } from 'react-feather'

const Hero = () => {
      return (
            <>
                  
    <section className="hero-3 bg-center position-relative" style={{background: `linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(${BackgroundImage})`,backgroundSize:'cover'}} id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center">
                        {/* <span className="badge badge-soft-primary mb-4">Professional Landing</span> */}
                        <h1 className="font-weight-semibold mb-4 hero-3-title head">Our goal isn’t to build a <span className="text-gradiant-rose">website</span>  Our goal is to build your <span className="text-gradiant-dark-orange">business</span></h1>
                        <p className="mb-5 text-muted subtitle w-75 mx-auto second-slogan">Custom websites at affordable prices</p>

                        <div>
                           <a href='#contact'> <button type="button" className="btn btn-golden rounded-pill me-2">Let's Start Discussion</button></a>
                           <a href='#project'> <button type="button" className="btn btn-secondary rounded-pill me-2"> Explore <div className="explore-anime" style={{display:'inline-block'}}><Navigation2 fill="white"/></div> </button></a>
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
