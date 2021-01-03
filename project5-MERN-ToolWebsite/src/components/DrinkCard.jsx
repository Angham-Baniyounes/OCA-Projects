import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./FoodO.css";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { Popup } from "./Popup";

const useStyles = makeStyles((theme) => ({
  root: { minWidth: 200, height: 400 },
  formControl: {
    minWidth: 120,
  },
}));

export default function DrinkCard(props) {
  let userData = localStorage.getItem("username");
  console.log(`the data is ${userData}`);
  const [size, setSize] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [submited, setSubmit] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const classes = useStyles();
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const Close = () => setSubmit(false);

  console.log(size);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const AddItem = async (e) => {
    e.preventDefault();

    const newName = userData || "anything";

    if (size !== "" && userInfo) {
      let newJSON = await {
        username: newName,
        cardName: props.drinkName,
        cardDesc: props.drinkDesc,
        cardImg: props.drinkImg,
        quantity: 1,
        size: size,
        price: props.price,
      };
      axios.post("http://localhost:5000/api/orders", newJSON).then(() => {});
    } else {
      setSubmit(true);
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.drinkImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.drinkName}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h3">
            Price: {props.price} <small>JOD</small>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.drinkDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="Space__bet">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={size}
              onChange={handleChange}
            >
              <MenuItem value={"small"}>Small</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"large"}>Large</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={AddItem}
            disabled={size ? false : true}
            variant="contained"
          >
            Order now
          </Button>
          <Popup show={submited} onHide={Close} />
        </div>
      </CardActions>
    </Card>
  );
}
