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

export default function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deletestuaccount = async (stuid) => {
  try {
   
    await Axios.delete(
      "http://localhost:5000/user/deletestu/" + stuid
    )
      .then((response) => response.json)
      .then(setLoading(true));
      toast.success(`Student Deleted Successfully`);

      setTimeout(() => {
        // setOpen(false);
         props.callback();
      }, 2000);

  } catch (err) {
    setLoading(false);
    toast.error(err.response.data.msg);
  }

}

  return (
    <div>
     
<ToastContainer/>
      <button className="btn btn-danger"  onClick={handleClickOpen}>
                                Delete Account
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-danger">{"Are you sure to Delete this Student permenently ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         If you delete this Student, the all details are removed from the system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
         
          {!isLoading && (
                      <Button
                        color="primary" autoFocus
                        onClick={() => deletestuaccount(props.stuid)}
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
