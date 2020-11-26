import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form } from 'formik';
import Axios from "axios";


const Grammermcq = () => {
  return (
   <div>
      
      <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Add MCQs</h6>
                </div>
                <div class="card-body">
                <div class="row">
                        <div class="col-md-4">
                        Question
                        </div>
                        <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Enter Question"/>
                        </div>
                </div>

                <div class="row mt-2">
                        <div class="col-md-4">
                        Answers
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="Option1"/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="Option2"/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="Option3"/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="Option4"/>
                        </div>
                </div>
                <div class="row mt-2">
                        <div class="col-md-4">
                            <span className="text-success font-weight-bold">Correct Answer</span> 
                        </div>
                        <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Correct answer"/>
                        </div>
                </div>
                    <button className="btn btn-primary btn-block mt-3">Submit Question</button>

            </div>
      </div>


      <input
          type="text"
          className="form-control form-control-lg searchbox"
          placeholder="Search MCQs"/>


      <div class="card shadow my-4">
             
                <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                  <h6 class="m-0 font-weight-bold text-primary">Don't make so much noise. Noriko ..... to study for her ESL test!</h6>
                </a>
             
                <div class="collapse" id="collapseCardExample">
                  <div class="card-body">
                    <strong className="text-success">Correct Answer : is trying</strong>
                    <div className="font-weight-bold">Other Options : try,tries,tried</div>
                  </div>
                  <div className="p-3">
                  <button className="btn btn-danger">Delete</button><button className="btn btn-primary ml-2">Edit</button>
                  </div>
                </div>
              </div>


              <div class="card shadow mb-4">
             
                <a href="#collapseCard" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                  <h6 class="m-0 font-weight-bold text-primary">Jun-Sik ..... his teeth before breakfast every morning.</h6>
                </a>
             
                <div class="collapse" id="collapseCard">
                  <div class="card-body">
                    <strong className="text-success">Correct Answer : cleans</strong>
                    <div className="font-weight-bold">Other Options : will cleaned,cleaned,is cleaned</div>
                  </div>
                  <div className="p-3">
                  <button className="btn btn-danger">Delete</button><button className="btn btn-primary ml-2">Edit</button>
                  </div>
                </div>
              </div>
   </div>
  );
};

export default Grammermcq;
