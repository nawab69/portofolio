import React from "react";
import data from "../data/team.data";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
const Team = () => {
  return (
    <>
      <section className="section bg-light  overflow-hidden" id="team">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-7 text-center">
              <h2 className="head borderBottom">Our Team Members</h2>
              <p className="text-muted">
                Meet the geniuses behind this company
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {data &&
              data.map((member) => (
                <>
                  <div
                    className="col-lg-2 col-md-6 col-sm-6"
                    key={member.id}
                    data-aos="fade-up"
                  >
                    <div className="team-box mt-4 position-relative overflow-hidden rounded text-center shadow h-100">
                      <div className="position-relative overflow-hidden">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/team/${member.image}`}
                          alt=""
                          className="img-fluid"
                        />
                        <ul className="list-inline p-3 mb-0 team-social-item">
                          <li className="list-inline-item mx-3">
                            <a href="#" className="team-social-icon h-primary">
                              <Facebook className="icon-sm" />
                            </a>
                          </li>

                          <li className="list-inline-item mx-3">
                            <a href="#" className="team-social-icon h-danger">
                              <Instagram className="icon-sm" />
                            </a>
                          </li>
                          <li className="list-inline-item mx-3">
                            <a href="#" className="team-social-icon h-info">
                              <Twitter className="icon-sm" />
                            </a>
                          </li>
                          <li className="list-inline-item mx-3">
                            <a href="#" className="team-social-icon h-warning">
                              <Linkedin className="icon-sm" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4">
                        <h5 className="font-size-19 mb-1">{member.name}</h5>
                        <p className="text-muted text-uppercase font-size-14 mb-0">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
