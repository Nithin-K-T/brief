import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
}));

const SummaryTab = () => {
  const classes = useStyles();
  return (
    <Grid>Summary page...</Grid>
  );
}
export default SummaryTab;