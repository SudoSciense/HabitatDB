import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    marginTop: 5,
      maxWidth: 900,
      margin: "auto",
  },
  media: {
    height: 600,
    maxWidth: "100%",
  },
};

function AnimalCard(props) {
  const { classes } = props;
    console.log(props.habitatDataFromParent[0].image_url);
  return (  
    <div>
      <Card className={classes.card}>
        <div id="imageDiv">
      {(props.habitatDataFromParent[0].image_url != "") ? <img src={props.habitatDataFromParent[0].image_url}/> : <p>No Image</p>}
        </div>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.habitatDataFromParent[0].name}
          </Typography>
          <Typography component="p">
            {props.habitatDataFromParent[0].shortdesc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

AnimalCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnimalCard);