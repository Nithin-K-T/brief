import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ViewList from './viewList';
import SubmitDialogBox from './submit_modal';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 10,
    background: '#656fa5',
    color: '#fff',
    '& .MuiTypography-h6': {
      paddingLeft: '10px'
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: 5,
    color: '#fff',
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem',
      border: '1px solid',
      borderRadius: '10px'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  testBtn: {
    marginTop: 50
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 250,
    textAlign: 'center',
    '& .MuiButton-root': {
      width: 150,
      margin: 10
    }
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const TestProject = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.testBtn}>
        Test Project
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Test Project
        </DialogTitle>
        <DialogContent dividers>    
        <SubmitDialogBox />
        <ViewList/>
        <Button variant="contained" color="primary">
          Help
        </Button>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
export default TestProject;