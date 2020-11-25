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

export default function ActiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const activateaccount = async (stuid) => {
  try {
    const status = "Account Activated";

    const updatedstatus = { status };
    await Axios.post(
      "http://localhost:5000/user/updatependingstu/" + stuid,
      updatedstatus
    )
      .then((response) => response.json)
      .then(setLoading(true));
      toast.success(`Student Account activated Successfully`);

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
      <button class="btn btn-success"  onClick={handleClickOpen}>
                                Activate Account
                              </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Student Account Activation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Make sure that all the information given by the student is valid and correct.
          With Your Consent, this Student will become an Registered User on the System
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
         
          {!isLoading && (
                      <Button
                        color="primary" autoFocus
                        onClick={() => activateaccount(props.stuid)}
                      >
                        Agree
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
