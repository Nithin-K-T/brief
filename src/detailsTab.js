import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title:{
    margin: 0,
    textAlign: 'left'
  },
  text:{
    width: '100%'
  },
  status:{
    display: 'flex',
    '& .MuiFormLabel-root':{
      textAlign: 'left',
      paddingTop: 10
    }
  },
  listContainer: {
     display: 'flex',
     justifyContent: 'center'
  },
  listBox: {
    minHeight: '15vh',
    background: '#f3f2f2',
    borderRight: '1px solid'
  }
}));

const DetailsTab = () => {

  const classes = useStyles();
  return (
    <Grid>
       <h3 className={classes.title}>Notes</h3>
       <TextareaAutosize className={classes.text} 
       aria-label="minimum height" rowsMin={3} placeholder="" />
       <FormControl component="fieldset" className={classes.status}>
        <FormLabel component="legend">Status</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
        </RadioGroup>
      </FormControl>
      <Grid container className={classes.listContainer}>
        <Grid item xs={6} className={classes.listBox}>
        </Grid>
        <Grid item xs={6} className={classes.listBox}>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default DetailsTab;