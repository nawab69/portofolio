import React from 'react'

const Footer = () => {
      return (
            <div>
                  <footer className="footer" style={{backgroundUrl: 'url(./images/footer-bg.png)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="mb-4">
                        <a href="index-1.html"><img src="images/logo-light.png" alt="" className="" height="30" /></a>
                        <p className="text-white-50 my-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti.</p>
                    </div>
                </div>
                

                <div className="col-lg-7 ms-lg-auto">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="mt-4 mt-lg-0">
                                <h4 className="text-white font-size-18 mb-3">Customer</h4>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Works</a></li>
                                    <li><a href="#" className="footer-link">Strategy</a></li>
                                    <li><a href="#" className="footer-link">Releases</a></li>
                                    <li><a href="#" className="footer-link">Press</a></li>
                                    <li><a href="#" className="footer-link">Mission</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="mt-4 mt-lg-0">
                                <h4 className="text-white font-size-18 mb-3">Product</h4>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Trending</a></li>
                                    <li><a href="#" className="footer-link">Popular</a></li>
                                    <li><a href="#" className="footer-link">Customers</a></li>
                                    <li><a href="#" className="footer-link">Features</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="mt-4 mt-lg-0">
                                <h4 className="text-white font-size-18 mb-3">Information</h4>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">Developers</a></li>
                                    <li><a href="#" className="footer-link">Support</a></li>
                                    <li><a href="#" className="footer-link">Customer Service</a></li>
                                    <li><a href="#" className="footer-link">Get Started</a></li>
                                    <li><a href="#" className="footer-link">Guide</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="mt-4 mt-lg-0">
                                <h4 className="text-white font-size-18 mb-3">Support</h4>
                                <ul className="list-unstyled footer-sub-menu">
                                    <li><a href="#" className="footer-link">FAQ</a></li>
                                    <li><a href="#" className="footer-link">Contact</a></li>
                                    <li><a href="#" className="footer-link">Disscusion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center mt-5">
                        <p className="text-white-50 f-15 mb-0">                            
                                {new Date().getFullYear()}
                             © Qexal. Design By Themesbrand
                        </p>
                    </div>
                </div>
               
            </div>
            
        </div>
        
    </footer>
            </div>
      )
}

export default Footer
