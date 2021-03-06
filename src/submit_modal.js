import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Grid, Button, TextField} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TabPanel from './tabs';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 10,
    background: '#656fa5',
    color: '#fff',
    '& .MuiTypography-h6': {
      paddingLeft: '20px'
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
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: 10,
    bottom: 0,
    '& .MuiButton-root': {
      margin: '10px 15px',
      width: 100
    }
  },
  subTitle:{
    margin: '10px 10px 20px 10px',
    border: '1px solid',
    '& h3':{
       padding: 10,
       margin: 0,
       textAlign: 'left',
       borderBottom: '1px solid',
       fontWeight: 400
    },
    '& .MuiTextField-root':{
      width: 445,
      margin: '15px 10px'
    },
    '& .MuiLink-root': {
      display: 'flex',
      margin: 'auto',
      paddingBottom: '10px',
      color: '#fff',
      justifyContent: 'center'
    }
  },
  label: {
    fontSize: '20px',
    fontWeight: 500,
    padding: '10px',
    position: 'relative',
    top: '20px'
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
    background: '#8e97cc',
    color: '#fff',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const SubmitDialogBox = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Grid>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Submit
        </DialogTitle>
        <DialogContent dividers>
        <form>
           <Grid className={classes.subTitle}>
              <h3>Name</h3>
              <TextField className={classes.link} id="outlined-search" 
              label="Type..." type="search" variant="outlined" />
              <Link href="#">
                 Link
              </Link>
            </Grid>
            <TabPanel/>
            <Grid className={classes.btnGroup}>
              <Button variant="contained">
                Cacel
              </Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Grid>  
         </form>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
export default SubmitDialogBox;