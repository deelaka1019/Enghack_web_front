import React,{useState}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminDeleteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deleteadminaccount = async (ademail) => {
  try {
   
    await Axios.delete(
      "http://localhost:5000/user/deleteadmin/" + ademail
    )
      .then((response) => response.json)
      .then(setLoading(true));
      props.callback();
      toast.success(`Admin Account Deleted Successfully`);
    setLoading(false);
    setOpen(false);

  } catch (err) {
    setLoading(false);
    toast.error(err.response.data.msg);
  }

}

  return (
    <div>
     
<ToastContainer/>
      <button className="btn btn-danger mt-2"  onClick={handleClickOpen}>
                                Delete Account
                              </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-danger">{"Are you sure to Delete this admin permenently ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         If you delete this admin the all details are removed from the system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
         
          {!isLoading && (
                      <Button
                        color="primary" autoFocus
                        onClick={() => deleteadminaccount(props.admail)}
                      >
                        Confirm
                      </Button>
                    )}
                    {isLoading && (
                      <Button  color="primary">
                        <i className="fas fa-spinner fa-spin"></i>
                      </Button>
                    )}


        </DialogActions>
      </Dialog>
    </div>
  );
}
