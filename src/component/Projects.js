import React from 'react'
import { ExternalLink, Eye } from 'react-feather'
import data from '../data/project.data'
const Projects = () => {
      return (
            <>
 <section className="section bg-light overflow-hidden" id="project">
        <div className="container">
            <div className="row justify-content-center mb-4">
                <div className="col-lg-7 text-center">
                    <h2 className=" head borderBottom">Exploring Projects</h2>
                </div>
            </div>

            <div className="row justify-content-center">
            {data && data.map(member=>(<>
          
               <div className="col-lg-6 col-md-10 col-sm-12" key={member.id} data-aos="fade-up">
                    <div className="project-box card mt-4 position-relative overflow-hidden rounded-lg text-center shadow">
                         <img src={`${process.env.PUBLIC_URL}/assets/${member.img}`} alt="" className="img-fluid d-block mx-auto" />
                         <div className='d-flex flex-column project-view-item justify-content-center'>
                            <h3>{member.id}</h3>
                         
                            <div className='d-flex text-white justify-content-center'>
                                    <a href="#" className="btn btn-golden btn-md py-2 px-4 rounded-pill">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>)) 
             }
            </div>
         
        </div>
     
    </section>    
</>
      )
}

export default Projects
