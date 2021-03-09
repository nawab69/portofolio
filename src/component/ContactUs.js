import React from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'react-feather'

const ContactUs = () => {
      return (
            <>
                 <section className="section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="fw-bold mb-4">Get in Touch</h2>
                    <p className="text-muted mb-5">Et harum quidem rerum facilis est expedita distinctio temporecum soluta
                        nobis est eligendi optio cumque nihil impedit quo minus maxime.</p>

                    <div>
                        <form method="post" name="myForm">
                            <p id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-4">
                                        <label for="name" className="text-muted form-label">Name</label>
                                        <input name="name" id="name" type="text" className="form-control"
                                            placeholder="Enter name*"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-4">
                                        <label for="email" className="text-muted form-label">Email</label>
                                        <input name="email" id="email" type="email" className="form-control"
                                            placeholder="Enter email*"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-4">
                                        <label for="subject" className="text-muted form-label">Subject</label>
                                        <input type="text" className="form-control" id="subject" name="subject"
                                            placeholder="Enter Subject.." />
                                    </div>

                                    <div className="mb-4 pb-2">
                                        <label for="comments" className="text-muted form-label">Message</label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control"
                                            placeholder="Enter message..."></textarea>
                                    </div>

                                    <button type="submit" id="submit" name="send" className="btn btn-golden">Send
                                        Message</button>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
               

                <div className="col-lg-5 ms-lg-auto">
                    <div className="mt-5 mt-lg-0">
                        <img src="images/contact.png" alt="" className="img-fluid d-block" />
                        <p className="text-muted mt-5 mb-3"><Mail className="me-2 text-muted icon icon-xs" />
                            multicone@protonmail.com</p>
                        <p className="text-muted mb-3"><Phone className="me-2 text-muted icon icon-xs" /> +88 01XXXXXXXX</p>
                        <p className="text-muted mb-3"><MapPin className="me-2 text-muted icon icon-xs" />
                            Park Mor, Rangpur</p>
                        <ul className="list-inline pt-4">
                            <li className="list-inline-item me-3">
                                <a href="#" className="social-icon icon-mono avatar-xs rounded-circle"><Facebook className="icon-xs"/></a>
                            </li>
                            <li className="list-inline-item me-3">
                                <a href="#" className="social-icon icon-mono avatar-xs rounded-circle"><Twitter className="icon-xs"/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="social-icon icon-mono avatar-xs rounded-circle"><Instagram className="icon-xs"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            
            </div>
         
        </div>
       
    </section>   
            </>
      )
}

export default ContactUs
