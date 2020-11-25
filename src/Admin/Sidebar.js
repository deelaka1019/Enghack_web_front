
import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import UserContext from '../Context/userContext';
const Adminsidebar = () => {


  const {setUserData} = useContext(UserContext);
const history = useHistory();


//logout function
const logout = () =>{
  setUserData({
    token:undefined,
    user:undefined,
  });
  localStorage.setItem("auth-token","");
  history.push('/'); 
}


    return (
      <React.Fragment>
        {/* Sidebar */}
        <ul
          className="navbar-nav sidebar-bg-color sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <div className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i class="fas fa-laugh-wink"></i> logo */}
            </div>
            <div className="sidebar-brand-text mx-3">EngLearn</div>
          </div>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link className="nav-link" to="/admindash">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Admin Dashboard</span>
            </Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Learning Materials</div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Articles</span>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="collapse-inner rounded submenu-bg">
            
                <Link className="collapse-item" to="/admindash/addreadings">
                  Add Articles
                </Link>
                <Link className="collapse-item" to="/admindash/viewreadings">
                  View Articles
                </Link>


              </div>
            </div>
          </li>


          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Listening</span>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionSidebar"
            >
              <div className="collapse-inner rounded submenu-bg">
                <Link className="collapse-item" to="/admindash/podcasts">
                  Podcasts
                </Link>


              </div>
            </div>
          </li>


          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsefive"
              aria-expanded="true"
              aria-controls="collapsefive"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Grammer</span>
            </div>
            <div
              id="collapsefive"
              className="collapse"
              aria-labelledby="headingfive"
              data-parent="#accordionSidebar"
            >
              <div className="collapse-inner rounded submenu-bg">
            
                <Link className="collapse-item" to="/admindash/grammer">
                  Grammer MCQ
                </Link>


              </div>
            </div>
          </li>




          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Student Data</div>



          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsesix"
              aria-expanded="true"
              aria-controls="collapsesix"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Student</span>
            </div>
            <div
              id="collapsesix"
              className="collapse"
              aria-labelledby="headingsix"
              data-parent="#accordionSidebar"
            >
              <div className="collapse-inner rounded submenu-bg">
              

                <Link className="collapse-item" to="/admindash/studentdata">
                  Student Details
                </Link>


              </div>
            </div>
          </li>



         
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Admin Profile</div>



          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsefour"
              aria-expanded="true"
              aria-controls="collapsefour"
            >
              <i className="fas fa-fw fa-cog" />
              <span>Admin</span>
            </div>
            <div
              id="collapsefour"
              className="collapse"
              aria-labelledby="headingfour"
              data-parent="#accordionSidebar"
            >
              <div className="collapse-inner rounded submenu-bg">
              
                <Link className="collapse-item" to="/admindash/adminreg">
                 Admin Registration
                </Link>

                <Link className="collapse-item" to="/admindash/admindetails">
                  Admin Details
                </Link>


              </div>
            </div>
          </li>

         
          

          <li className="nav-item">
            <div className="nav-link" onClick={logout}>
              <i className="fas fa-sign-out-alt" />
              <span>Logout</span>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
        </ul>
        {/* End of Sidebar */}
      </React.Fragment>
    );
  
}

export default Adminsidebar;
