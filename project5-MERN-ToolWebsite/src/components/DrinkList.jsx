import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drink from "../DrinkData";
import DrinkCard from "./DrinkCard";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
function DrinkList() {
  const Drinks = Drink.map((x) => (
    <Grid item xs={12} sm={6} md={3}>
      <DrinkCard
        drinkImg={x.drinkImg}
        drinkName={x.drinkName}
        drinkDesc={x.drinkDesc}
        price={x.price}
      />
    </Grid>
  ));
  const classes = useStyles();
  return (
    <div className="food__container">
      <Grid container spacing={6} className={classes.gridContainer}>
        {Drinks}
      </Grid>
    </div>
  );
}

export default DrinkList;
