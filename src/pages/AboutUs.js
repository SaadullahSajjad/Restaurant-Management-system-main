import classes from "./AboutUs.module.css";
import React from "react";
import HeaderPhoto from "../components/AboutComp/HeaderPhoto";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={classes.back}>
        <HeaderPhoto />
      </div>
    </React.Fragment>
  );
};
export default AboutUs;
