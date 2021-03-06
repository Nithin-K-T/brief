import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TabPanel from './tabs';
import ViewList from './viewList';
import SubmitDialogBox from './submit_modal';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,   
  },
  box: {
    background: '#656fa5',
    minHeight: '105vh',
    marginTop: 0,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: 5,
    color: '#fff',
    display: 'none'
  },
  title:{
    padding: '10px 25px',
    textAlign: 'left',
    fontWeight: '500',
    borderBottom: '1px solid',
    fontSize: '20px'
  },
  subTitle:{
    margin: 20,
    border: '1px solid',
    '& h3':{
       padding: 10,
       margin: 0,
       textAlign: 'left',
       borderBottom: '1px solid',
    },
    '& .MuiTextField-root':{
      width: 400,
      margin: '15px 10px'
    },
    '& .MuiLink-root': {
      display: 'block',
      margin: 'auto',
      paddingBottom: '10px',
      color: '#fff'
    }
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: 10,
    bottom: 0,
    '& .MuiButton-root': {
      margin: '0px 15px',
      width: 100
    }
  }
}));

const SubmitForm = () => {

  const classes = useStyles();

  return (
    <Grid>
    <Grid container justify="center">
      <Grid item lg={4} className={classes.box}>
         <header className={classes.title}>Submit</header>
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
      </Grid>
    </Grid>
    <ViewList/>
    <SubmitDialogBox />
    </Grid>
  );
}

export default SubmitForm;
