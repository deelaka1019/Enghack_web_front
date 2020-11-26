import React,{useContext} from 'react';
import {Route,useHistory} from 'react-router-dom';
import Adminsidebar from './Sidebar';
import UserContext from '../Context/userContext';
import MainContent from './AdminComponents/MainContent';
import AdminReg from './AdminComponents/AdminRegister';
import AdminDetails from './AdminComponents/AdminDetails';
import StudentSearch from './Student/StudentSearch';
import Addreading from './Reading/AddReadings';
import ViewReading from './Reading/ViewReadings';
import Addpodcast from './Listening/Addpodcast';
import ViewPods from './Listening/Viewpodcast';
import Grammermcq from './Grammer/Grammer';
const Admindash=() =>{
  
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

return(
 
    <div id="wrapper">
        <Adminsidebar/>
  {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column">
    {/* Main Content */}
    <div id="content">
      {/* Topbar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
           <div className="nav-link dropdown-toggle"  id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
           </div>
            {/* Dropdown - Messages */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Nav Item - Alerts */}
         
          {/* Nav Item - Messages */}
         
         
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
           <div className="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="img"/>
           </div>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
             {/* <div className="dropdown-item" >
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
             </div> */}
             {/* <div className="dropdown-item" >
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
             </div> */}
             {/* <div className="dropdown-item" >
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
             </div> */}
              <div className="dropdown-divider"/>
             <div className="dropdown-item"  data-toggle="modal" data-target="#logoutModal" onClick={logout}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
             </div>
            </div>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
      {/* Begin Page Content */}
      <div className="container-fluid">
      
      
     {/* routes */}
     <Route path="/admindash/grammermcq" component={Grammermcq}/>
     <Route path="/admindash/viewpodcast" component={ViewPods}/>
     <Route path="/admindash/addpodcast" component={Addpodcast}/>
     <Route path="/admindash/viewreadings" component={ViewReading}/>
     <Route path="/admindash/addreadings" component={Addreading}/>
     <Route path="/admindash/studentdata" component={StudentSearch}/>
     <Route path="/admindash/admindetails" component={AdminDetails}/>
     <Route path="/admindash/adminreg" component={AdminReg}/>
     <Route path="/admindash" exact component={MainContent}/>
     
      {/* /.container-fluid */}
    </div>
    {/* End of Main Content */}
  </div>
  {/* End of Content Wrapper */}
</div>
</div>


);
}

export default Admindash;