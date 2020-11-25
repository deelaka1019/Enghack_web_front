import React, { useState, useEffect } from "react";
import Axios from "axios";
import AdminDeleteDialog from './Admindeletealert';
const AdminDetails = () => {
  const [user, setUsers] = useState([]);

  const getusers = async () => {
    const results = await Axios({
      method: "GET",
      url: "http://localhost:5000/user/loadusers",
    });

    setUsers(results.data);
  };

  useEffect(() => {
    getusers();
    return () => getusers;
  }, []);

  return (
    <div>
      {user.length > 0 ? (
       user.filter((r) => r.usertype === "admin")
        .map((value) => {
          return (
            <div key={value.email}>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Admin Name : {value.fname} {value.lname}
                  </h6>
                </div>
                <div className="card-body">
                  <div>
                    Admin Name : {value.fname} {value.lname}
                  </div>
                  <div>Admin Employee ID - {value.userid}</div>
                          <div>Name - {value.fname} {value.lname}</div>
                          <div>email - {value.email} </div>
                          <div>NIC - {value.nic} </div>
                          <div>Address - {value.address} </div>
                          <div>Mobile - {value.mobile}</div>
                          <AdminDeleteDialog admail={value.email} callback={getusers}/>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-primary font-weight-bold pt-2">Loading data....<i className="fas fa-spinner fa-spin"></i></div>
      )}
    </div>
  );
};

export default AdminDetails;
