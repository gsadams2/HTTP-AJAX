import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    border: "2px solid black",
    width: "60px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Friends(props) {
  const classes = useStyles();
  // let itemYo = props.okay.find(
  //   thing => `${thing.id}` === props.match.params.id
  // );

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Name: {props.friend.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Age: {props.friend.age}
        </Typography>
        <Typography variant="body2" component="p">
          Email: {props.friend.email}
        </Typography>
      </CardContent>
      <CardActions>
        <h4>Dude... These cards are sweet</h4>
      </CardActions>
      <button onClick={e => props.setUpdateForm(e, props.friend)}>Edit</button>
    </Card>
  );
}
