import React from 'react'
import { Box, Layers, Terminal, Tool } from 'react-feather'

const Services = () => {
      return (
      <div>
       <section className="section" id="services">
        <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-lg-7 text-center">
                    <h2 className="fw-bold">Our Services</h2>
                    {/* <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium totam rem ab illo inventore.</p> */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-1 avatar-md mx-auto mb-4">
                                <Layers />
                            </div>
                            <h4 className="mb-3 font-size-22">UI/UX</h4>
                            <p className="text-muted mb-0">Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-2 avatar-md mx-auto mb-4">
                                <Terminal />
                            </div>
                            <h4 className="mb-3 font-size-22">Development</h4>
                            <p className="text-muted mb-0">HTML/CSS, JavaScript Animation,React,React Native,Responsive Website</p>
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-3 avatar-md mx-auto mb-4">
                                <Tool />
                            </div>
                            <h4 className="mb-3 font-size-22">Custom Software Development</h4>
                            <p className="text-muted mb-0">Bussiness , E-commerce,Restaurant Management, CMS, Agency monitoring</p>
                        </div>
                    </div>
                </div>
             
            </div>
          
        </div>

    </section> 
</div>
 )
}

export default Services
