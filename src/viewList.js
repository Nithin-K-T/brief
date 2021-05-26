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
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    width: '75%'
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
  label: {
    fontSize: '20px',
    fontWeight: 500,
    padding: '10px',
    position: 'relative',
    top: '20px'
  },
  tableList: {
    margin: 10,
    '& .MuiTableCell-stickyHeader': {
      backgroundColor: '#656fa5',
      color: '#fff'
    }
  },
  exportBtn: {
    textAlign: 'right',
    paddingRight: 10
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
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const columns = [
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'postal', label: 'Postal', minWidth: 50 },
  {
    id: 'street',
    label: 'Street',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'landmark',
    label: 'LandMark',
    minWidth: 120,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, postal, street, landmark) {
  return { name, postal, street, landmark };
}

const rows = [
  createData('Delhi', 12100, 'Rajpath' , 'Rajpath'),
  createData('Delhi', 12105, 'Tilak Marg', 'Tilak Marg'),
  createData('Delhi', 12105, 'Gali', 'Gali'),
  createData('Delhi', 12145, 'Tughlaq Road', 'Tughlaq Road')
];

const ViewList = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShow(false);
  }; 
  const handleClickShow = () => {
    setShow(true);
  }

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
        View List
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          View List
        </DialogTitle>
        <DialogContent dividers>
        <label className={classes.label}>City</label>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">City Name</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              label="City Name"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>Delhi</option>
              <option value={2}>Noida</option>
              <option value={3}>Pune</option>
              <option value={4}>Bangalore</option>
            </Select>
        </FormControl>
        <div className={classes.btnGroup}>
          <Button variant="contained">
            Cacel
          </Button>
          <Button variant="contained" color="primary" onClick={handleClickShow}>
            Run
          </Button>
        </div>
        {show ?
        <>
        <Paper className={classes.tableList} >
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>       
        <Grid className={classes.exportBtn}>
          <Button variant="contained" color="primary">
            Export
          </Button>
        </Grid>
        </>
        : null }      
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
export default ViewList;