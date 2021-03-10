import React from 'react'
import { Box, Code, Layers, Layout, Monitor, Phone, Tablet, Terminal, Tool } from 'react-feather'

const Services = () => {
      return (
      <>
       <section className="section" id="services">
        <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-lg-7 text-center">
                    <h2 className="head borderBottom">Our Services</h2>
                    {/* <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium totam rem ab illo inventore.</p> */}
                </div>
            </div>

            <div className="row overflow-hidden">
                <div className="col-lg-4" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up">
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
            

                <div data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className="col-lg-4">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-6 avatar-md mx-auto mb-4">
                                <Terminal/>
                            </div>
                            <h4 className="mb-3 font-size-22">Illustration</h4>
                            <p className="text-muted mb-0">Logo Design, Icon Set, Illustration Guide, Illustration Set</p>
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-3 avatar-md mx-auto mb-4">
                                <Monitor />
                            </div>
                            <h4 className="mb-3 font-size-22">Desktop Development</h4>
                            <p className="text-muted mb-0">Cross platform,Store Management, Bussiness Management Tools,Educational tools</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-4 avatar-md mx-auto mb-4">
                                <Code />
                            </div>
                            <h4 className="mb-3 font-size-22">Frontend Development</h4>
                            <p className="text-muted mb-0">HTML5,vanila CSS3 ,SCSS,Bootstrap v5, TailwindCSS, Material UI,  JavaScript,React.js, Vue.js, NEXT.js</p>
                        </div>
                    </div>
                </div>
            

                <div data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className="col-lg-4">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-2 avatar-md mx-auto mb-4">
                                <Terminal />
                            </div>
                            <h4 className="mb-3 font-size-22">Backend Development</h4>
                            <p className="text-muted mb-0">Node.js, PHP, Laravel, Python, Django, MongoDB, MySQL, PostgreSQL, Microservices</p>
                        </div>
                    </div>
                </div>
            

                <div className="col-lg-4" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up">
                    <div className="service-box text-center px-4 py-5 position-relative mb-4">
                        <div className="service-box-content p-4">
                            <div className="icon-mono service-icon service-bg-5 avatar-md mx-auto mb-4">
                                <Tablet/>
                            </div>
                            <h4 className="mb-3 font-size-22">Android/IOS Development</h4>
                            <p className="text-muted mb-0">Bussiness , E-commerce,Restaurant Management, CMS, Agency monitoring</p>
                        </div>
                    </div>
                </div>
             
            </div>
          
        </div>

    </section> 
</>
 )
}

export default Services
