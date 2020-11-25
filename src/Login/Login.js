import React,{useState,useContext} from "react";
import UserContext from "../Context/userContext";
import { Formik, Field, Form } from 'formik';
import {useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from 'axios';


const Login = () => {

    const history = useHistory();
    const { setUserData } = useContext(UserContext);
    const [isLoading, setLoading] = useState(false);


    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }


        if (!values.password) {
            errors.password = 'required';
        }
        return errors;
    };


  return (
    <div>
         <ToastContainer />
      <div className="center-ui container">
        {/* Outer Row */}

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body py-3">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Admin Login !
                        </h1>
                      </div>
                     {/* form */}

                     <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {

                try {
    
                    const loginRes = await Axios.post("http://localhost:5000/user/adminlogin",values)
                    .then(setLoading(true))

                    // console.log(loginRes);
              
                    setUserData({
                      token: loginRes.data.token,
                      user: loginRes.data.user,
                    });
              
                    localStorage.setItem("auth-token", loginRes.data.token);
                
        
                    if(loginRes.data.user.usertype === "admin" && loginRes.data.user.status === "Authorized Admin"){
                      history.push("/admindash");
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

                    <div className="form-group">
                       
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="email" placeholder="Email Address"/>
                        
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>


                    <div className="form-group">
                       
                        <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="password" placeholder="Password"/>
                        
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>

                   

                    
                    {!isLoading && (
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Submit
                      </button>
                    )}
                    {isLoading && (
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        disabled
                      >
                        Submitting... <i className="fas fa-spinner fa-spin"></i>
                      </button>
                    )}
                   

                </Form>
            )
            }
        </Formik >
                      <hr />
                      <div className="text-center">
                        {/* <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a> */}
                      </div>
                      <div className="text-center">
                        {/* <Link className="small" to="/register">
                          Create an Account!
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
