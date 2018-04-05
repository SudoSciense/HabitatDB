import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    textAlign: 'center',
  },
});

let id = 0;
function createData(category, description) {
  id += 1;
  return { id, category, description };
}


var text = "This is some longer text to indicate some longer text that will be taking up some more space in a column. Still need to take up some more space so here we go. Hot Mulligan's new album came out today which is totally awesome!";
var habitatData = [];

const data = [
  createData('Kingdom', ''),
  createData('Short description', ''),
  createData('Long Description', ''),
  createData('Food', ''),
  createData('Exercise', '')
];

function DataTable(props) {
  const { classes, habitatDataFromParent } = props;
    
    
    
  const data = [
  createData('Kingdom', props.habitatDataFromParent[0].kingdom),
  createData('Short description', props.habitatDataFromParent[0].shortdesc),
  createData('Long Description', props.habitatDataFromParent[0].longdesc),
  createData('Food', props.habitatDataFromParent[0].food),
  createData('Exercise', props.habitatDataFromParent[0].exercise)
];

    
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.category}</TableCell>
                <TableCell>{n.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);