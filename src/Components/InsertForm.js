import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class InsertForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInsert = () => {
      var insertData = {};
      insertData.name = document.getElementById("name").value;
      insertData.kingdom = document.getElementById("kingdom").value;
      insertData.shortdesc = document.getElementById("shortdesc").value;
      insertData.longdesc = document.getElementById("longdesc").value;
      insertData.food = document.getElementById("food").value;
      insertData.exercise = document.getElementById("exercise").value;
      insertData.image_url = document.getElementById("image_url").value;
      insertData.password = document.getElementById("password").value;
      this.props.insert(insertData);
      this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="add">+</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Habitat</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is where you are able to insert more habitats! Please note that you need admin password to successfully do this.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Animal Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="kingdom"
              label="Kingdom"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="shortdesc"
              label="Short Description"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="longdesc"
              label="Full Description"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="food"
              label="Food"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="exercise"
              label="Exercise"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="image_url"
              label="Image URL"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Admin Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleInsert} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}