import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form } from 'formik';
import Axios from "axios";


const AdminReg = () => {

    const [isLoading, setLoading] = useState(false);


    const validateForm = values => {
        const errors = {};

        if(!values.userid){
            errors.userid = 'required';
        }

        if (!values.fname) {
            errors.fname = 'required';
        } else if (values.fname.length < 4) {
            errors.fname = 'First name too short';
        }

        if (!values.lname) {
            errors.lname = 'required';
        } else if (values.lname.length < 4) {
            errors.lname = 'Last name too short';
        }


        if (!values.email) {
            errors.email = 'required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.address) {
          errors.address = 'required';
      }
      if (!values.mobile) {
        errors.mobile = 'required';
        }else if(values.mobile.length !== 10){
        errors.mobile = 'Invalid Mobile';
        }

        if (!values.nic) {
            errors.nic = 'required';
        } else if (!/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/i.test(values.nic)) {
            errors.nic = 'Invalid NIC';
        }


        if (!values.password) {
            errors.password = 'required';
        } else if (values.password.length < 6) {
            errors.password = 'password too short';
        }

        if (!values.passwordCheck) {
            errors.passwordCheck = 'required';
        }else if(values.password !== values.passwordCheck){
            errors.passwordCheck = 'two passwords not matched';
        }
       
        return errors;
    };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-8">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              New Admin Registration
            </h6>
          </div>
          <div className="container card-body py-5">
            <ToastContainer />
            {/* form */}
            <Formik
            initialValues={{ userid:'',fname: '',lname:'',address:'',mobile:'', email: '',nic: '', password: '', passwordCheck: '',  usertype:"admin" }}
            onSubmit={async (values,{resetForm}) => {

                try {
                  if(values){
                    await Axios.post("http://localhost:5000/user/registeruser", values)
                      .then((response) => response.json)
                      .then(setLoading(true))
                      resetForm();
                      toast.success("New Admin Registered Successfully");
                      setLoading(false);
                     
                  }  
                  } catch (err) {
                    setLoading(false)
                    toast.error(err.response.data.msg);
                  }
            
                    
                //   alert(JSON.stringify(values, null, 2));
               
            }}
            validate={validateForm}
        >
            {(formik) => (
                <Form className="user">



<div className="form-group">
                      <Field name="userid" className={(formik.touched.userid && formik.errors.userid) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Index no"/>
                        
                        {formik.touched.userid && formik.errors.userid ? (
                            <div className="invalid-feedback">{formik.errors.userid}</div>
                        ) : null}
                    </div>


            <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                       
                        <Field name="fname" className={(formik.touched.fname && formik.errors.fname) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="First Name"/>
                        
                        {formik.touched.fname && formik.errors.fname ? (
                            <div className="invalid-feedback">{formik.errors.fname}</div>
                        ) : null}

                      </div>

                      <div className="col-sm-6">
                      <Field name="lname" className={(formik.touched.lname && formik.errors.lname) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Last Name"/>
                        
                        {formik.touched.lname && formik.errors.lname ? (
                            <div className="invalid-feedback">{formik.errors.lname}</div>
                        ) : null}
                    
                      </div>
                    </div>


                    <div className="form-group">
                      <Field name="nic" className={(formik.touched.nic && formik.errors.nic) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="NIC"/>
                        
                        {formik.touched.nic && formik.errors.nic ? (
                            <div className="invalid-feedback">{formik.errors.nic}</div>
                        ) : null}
                    </div>


                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                       
                        <Field name="address" className={(formik.touched.address && formik.errors.address) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Address"/>
                        
                        {formik.touched.address && formik.errors.address ? (
                            <div className="invalid-feedback">{formik.errors.address}</div>
                        ) : null}

                      </div>

                      <div className="col-sm-6">
                      <Field name="mobile" className={(formik.touched.mobile && formik.errors.mobile) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="text"  placeholder="Mobile"/>
                        
                        {formik.touched.mobile && formik.errors.mobile ? (
                            <div className="invalid-feedback">{formik.errors.mobile}</div>
                        ) : null}
                    
                      </div>
                    </div>





                    <div className="form-group">
                       
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="email" placeholder="Email Address" autoComplete="email"/>
                        
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

                    <div className="form-group">
                       
                        <Field name="passwordCheck" className={(formik.touched.passwordCheck && formik.errors.passwordCheck) ? 'form-control form-control-user border-left-danger is-invalid' : 'form-control form-control-user border-left-primary'} type="password" placeholder="Confirm password"/>
                        
                        {formik.touched.passwordCheck && formik.errors.passwordCheck ? (
                            <div className="invalid-feedback">{formik.errors.passwordCheck}</div>
                        ) : null}
                    </div>


                    {/* <div className="form-group">
                    <Field
                      name="role"
                      as="select"
                      className={(formik.touched.role && formik.errors.role) ? 'form-control newp border-left-danger is-invalid' : 'form-control newp border-left-primary'}
                    >
                      <option value="">--Select User Type--</option>
                      <option value="physicist">Physicist</option>
                      <option value="clerk">Clerk</option>
      
                    </Field>
                    {formik.touched.role && formik.errors.role ? (
                      <div className="invalid-feedback">
                        {formik.errors.role}
                      </div>
                    ) : null}
                  </div> */}



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
                   

                </Form>
            )
            }
        </Formik >
          </div>
        </div>
        </div>
      </div>
        
    
    </React.Fragment>
  );
};

export default AdminReg;
