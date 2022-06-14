import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const doctorinfo = () => {
  return (
    <>
      <Navbar/>
        <div className="medssuppliers" style={{"background-color": "#C9ECFF"}}>
            <div class="container pt-5" >
                  <p class="display-6 fw-bold m-auto">Doctors</p>
                  <br/>
                  <p class="lead m-auto">
                      Available Doctors around you:
                  </p>
              </div>

              <div class="container">
                  <div class="row">
                      <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
                          <a class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                              Select Speciality from the dropdown
                          </a>
                          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                              <li><a class="dropdown-item active" href="#">General Physician</a></li>
                              <li><a class="dropdown-item" href="#">Ear-Nose-Throat (ENT) Specialist</a></li>
                              <li><a class="dropdown-item" href="#">Gynecologist</a></li>
                              <li><a class="dropdown-item" href="#">Obstetrician</a></li>
                              <li><a class="dropdown-item" href="#">Laparoscopic Surgeon</a></li>
                              <li><a class="dropdown-item" href="#">Proctologist</a></li>
                              <li><a class="dropdown-item" href="#">Hair Transplant Surgeon</a></li>
                              <li><a class="dropdown-item" href="#">Plastic Reconstruction Surgeon</a></li>
                              <li><a class="dropdown-item" href="#">Plastic Surgeon</a></li>
                              <li><a class="dropdown-item" href="#">Cosmetologist</a></li>
                              <li><a class="dropdown-item" href="#">Liver Transplant Surgeon</a></li>
                              <li><a class="dropdown-item" href="#">Hepato-Biliary-Pancreatic</a></li>
                              <li><a class="dropdown-item" href="#">Urologist</a></li>
                        
                          </ul>
                          <a class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" id="refresh-button" role="button">
                              Refresh Page
                          </a>
                      </div>
                  </div>
              </div>

              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Page Status</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          Page Refreshed...
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Okay</button>
                      </div>
                  </div>
                  </div>
              </div>

              <div class="container">
                  <div class="table-responsive">
                      <table class="table table-hover border-danger">
                          <thead class="table text-white" style={{"background-color": "#2FA4FF"}}>
                            <th style={{"paddingLeft": "15px"}}>Phone No</th>
                            <th>City</th>
                            <th>Doctor's Name</th>
                            <th>Speciality </th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>9234567890</td>
                                  <td>Kolkata</td>
                                  <td>Mrinal Sen</td>
                                  <td>Ear-Nose-Throat (ENT) Specialist</td>
                              </tr>
                              <tr>
                                  <td>9234567890</td>
                                  <td>Mumbai</td>
                                  <td>Joy Nandan</td>
                                  <td>Plastic Surgeon</td>
                              </tr>
                              <tr>
                                  <td>9234567890</td>
                                  <td>Kolkata</td>
                                  <td>Rishav Talpade</td>
                                  <td>Obstetrician</td>
                              </tr>
                              <tr>
                                  <td>9234567890</td>
                                  <td>Kolkata</td>
                                  <td>Rohan Sinha</td>
                                  <td>General Physician</td>
                              </tr>
                              <tr>
                                  <td>9234567890</td>
                                  <td>Delhi</td>
                                  <td>Jitesh Rana</td>
                                  <td>Gynecologist</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                  <p class="lead mt-5">To Share any Information related to Available Doctors</p>

                  <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
                      <Link to="/doctorcontact">
                          <button className="buttons">Add Information about Doctors</button>
                      </Link>
                  </div>
              </div>
              <Footer/>
        </div>
      </>
  );
};

export default doctorinfo;
