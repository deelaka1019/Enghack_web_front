import React,{useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import './read.css';
const Addreading = () => {
    const [isLoading, setLoading] = useState(false);

    const validateForm = (values) => {
        const errors = {};

        if(!values.title){
          errors.title = "required"
        }

        if(!values.description){
            errors.description = "required"
          }


        return errors;
    };

    return(
        <React.Fragment>
              <div>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Add New Article 
                  </h6>
                </div>
                <div className="card-body">
                <ToastContainer />
                <Formik
            initialValues={{ndate:new Date().toLocaleDateString(), title: '', description: ''}}
            onSubmit={async (values,{resetForm}) => {
                // alert(JSON.stringify(values, null, 2));
                try {
                    if(values){
                      await Axios.post("http://localhost:5000/reading/addreading", values)
                        .then((response) => response.json)
                        .then(setLoading(true))
                        resetForm();
                        toast.success("New Reading added Successfully");
                        setLoading(false);
                       
                    }  
                    } catch (err) {
                      setLoading(false)
                      toast.error(err.response.data.msg);
                    }
                
            }}
            validate={validateForm}
        >
            {(formik) => (
                <Form className="user">


<div className="form-group row">
                      <div className="col-sm-3 mb-3 mb-sm-0">
                       
                       Date

                      </div>

                <div className="col-sm-9">
                      <Field name="ndate" className={(formik.touched.ndate && formik.errors.ndate) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Enter Date" disabled value={formik.values.ndate}/>
                                            
                      </div>
                    </div>



<div className="form-group row">
                      <div className="col-sm-3 mb-3 mb-sm-0">
                       
                       Title

                      </div>

                <div className="col-sm-9">
                      <Field name="title" className={(formik.touched.title && formik.errors.title) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Enter title"/>
                        
                        {formik.touched.title && formik.errors.title ? (
                            <div className="invalid-feedback">{formik.errors.title}</div>
                        ) : null}
                    
                      </div>
                    </div>





                    <div className="form-group row">
                      <div className="col-sm-3 mb-3 mb-sm-0">
                       
                       Description

                      </div>

                <div className="col-sm-9">
                      <Field name="description" className={(formik.touched.description && formik.errors.description) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} as="textarea" rows={20} cols={10} placeholder="Start Writing..."/>
                        
                        {formik.touched.description && formik.errors.description ? (
                            <div className="invalid-feedback">{formik.errors.description}</div>
                        ) : null}
                    
                      </div>
                    </div>

                   

                    <div className="btnaddreadings">
                    {!isLoading && (
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    )}
                    {isLoading && (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled
                      >
                        Submitting... <i className="fas fa-spinner fa-spin"></i>
                      </button>
                    )}
                   </div>

                </Form>
            )
            }
        </Formik >
                         
                </div>
              </div>
            </div>
        </React.Fragment>

    )

}

export default Addreading;