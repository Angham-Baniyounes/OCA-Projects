import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Foods from "../FoodsData";
import FoodCard from "./FoodCard";
import DrinkList from './DrinkList'
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
function FoodList() {
  const Food = Foods.map((x) => (
    <Grid item xs={12} sm={6} md={3}>
      <FoodCard
        foodImg={x.foodImg}
        foodName={x.foodName}
        foodDesc={x.foodDesc}
        price={x.price}
      />
    </Grid>
  ));
  const classes = useStyles();
  return (
    <div>
    <h2 style={{textAlign:"center", margin:"2rem"}}>Our Meals</h2>
    <div className="food__container">

      <Grid container spacing={6} className={classes.gridContainer}>

        {Food}
      </Grid>
    </div>
    <hr/>
    <h2 style={{textAlign:"center", margin:"2rem"}}>Our Drinks</h2>
    <DrinkList/>
    </div>
  );
}

export default FoodList;
