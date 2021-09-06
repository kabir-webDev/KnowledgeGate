import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import './DirectionModal.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 500,
    maxHeight: 242,
    backgroundColor: '#82E0AA',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: '#1A5276',
    borderRadius: 20,
  },
  tagLine: {
    textAlign: 'center',
    marginBottom: '1%',
  },
  steps: {
    marginTop: 10,
    marginBottom: 10,
    color: '#2E4053',
  },
}));

export default function DirectionModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const open = () => {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    };
    open();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className='mod'>
      <div className={classes.paper}>
        <h2 className={classes.tagLine} id='simple-modal-title'>
          <u>Only Two Steps to Follow</u>
        </h2>
        <div className={classes.steps}>
          <h3 id='simple-modal-description'>
            Step-1: Select the Category and Difficulty level then Hit 'LOCK'
            Button
          </h3>
          <h3 id='simple-modal-description'>
            Step-2: Hit the 'Play Now' Button
          </h3>
        </div>
        <br />
        <div className={classes.tagLine}>
          <Button variant='contained' onClick={handleClose}>
            Ready? 😃
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}
