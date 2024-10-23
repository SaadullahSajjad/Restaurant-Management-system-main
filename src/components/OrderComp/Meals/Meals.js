import React, { Fragment } from "react";
//import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Fragment>
      {/* <MealsSummary /> */}
      <div className={classes.backerrr}>
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
