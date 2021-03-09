import React from 'react'
import data from '../data/team.data'
const Team = () => {
      return (
 <div>
    <section className="section bg-light" id="team">
        <div className="container">
            <div className="row justify-content-center mb-4">
                <div className="col-lg-7 text-center">
                    <h2 className="fw-bold">Our Team Members</h2>
                    <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium totam rem ab illo inventore.</p>
                </div>
            </div>

            <div className="row">
            {data && data.map(member=>(<>
          
               <div className="col-lg-4 col-sm-6">
                    <div className="team-box mt-4 position-relative overflow-hidden rounded text-center shadow">
                        <div className="position-relative overflow-hidden">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/team/${member.image}`} alt="" className="img-fluid d-block mx-auto" />
                            <ul className="list-inline p-3 mb-0 team-social-item">
                                <li className="list-inline-item mx-3">
                                    <a href="#" className="team-social-icon h-primary"><i className="icon-sm"
                                            data-feather="facebook"></i></a>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <a href="#" className="team-social-icon h-info"><i className="icon-sm"
                                            data-feather="twitter"></i></a>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <a href="#" className="team-social-icon h-danger"><i className="icon-sm"
                                            data-feather="instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h5 className="font-size-19 mb-1">{member.name}</h5>
                            <p className="text-muted text-uppercase font-size-14 mb-0">{member.designation}</p>
                        </div>
                    </div>
                </div>
            </>)) 
             }
            </div>
         
        </div>
     
    </section>
   
 </div>
 )
}

export default Team
