import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TabPanel from './tabs';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: '#656fa5',
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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
    margin: 20,
    border: '1px solid',
    '& h3':{
       padding: 10,
       margin: 0,
       textAlign: 'left',
       borderBottom: '1px solid',
       textAlign: 'center'
    },
    '& .MuiTextField-root':{
      width: 400,
      margin: '15px 10px'
    },
    '& .MuiLink-root': {
      display: 'flex',
      margin: 'auto',
      paddingBottom: '10px',
      color: '#656fa5',
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
    background: '#656fa5',
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
    <div>
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
    </div>
  );
}
export default SubmitDialogBox;