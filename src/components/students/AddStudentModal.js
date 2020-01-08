import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

/*
FUTURE PLANS:
    Create an AddStudentForm Component to place in the Modal.
    When the AddStudentForm is submitted, the new data gets PUT into the database.
    It also gets pushed into the state of AllStudents.
    This casuses the Component to re-render so the new Student will appear on the UI and if you refresh the page,
    it will still be there because it has been placed in the database.
*/

export default function AddStudentModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleOpen}
        >
        Add A Student
        </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add a Student</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}