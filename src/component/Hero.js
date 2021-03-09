import React from 'react'
import BackgroundImage from '../images/hero-6-bg.png'

const Hero = () => {
      return (
            <div>
                  
    <section className="hero-3 bg-center position-relative" style={{backgroundImage: `url(${BackgroundImage})`}} id="home">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center">
                        <span className="badge badge-soft-primary mb-4">Professional Landing</span>
                        <h1 className="font-weight-semibold mb-4 hero-3-title">The goal isn’t to build a <span className="text-gradiant-rose">website</span>  The goal is to build your <span className="text-gradiant-dark-orange">business</span></h1>
                        <p className="mb-5 text-muted subtitle w-75 mx-auto">Nemo enim ipsam voluptatem quia voluptas sit
                            aut aspernatur aut fugit sed consequuntur magni dolores nesciunt.</p>

                        <div>
                            <button type="button" className="btn btn-primary rounded-pill me-2">Sign up for free</button>
                            <button type="button" className="btn btn-light rounded-pill me-2" data-bs-toggle="modal"
                                data-bs-target="#watchvideomodal">Play video <i className="ms-1 icon-sm"
                                    data-feather="play-circle"></i></button>
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
            </div>
      )
}

export default Hero
