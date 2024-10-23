import React from "react";
import classes from "./HomePopular.module.css";
import pic1 from "../../pictures/img_cat_home_1.jpg";
import pic2 from "../../pictures/img_cat_home_2.jpg";
import pic3 from "../../pictures/img_cat_home_3.jpg";
import pic4 from "../../pictures/img_cat_home_4.jpg";
import pic5 from "../../pictures/img_cat_home_5.jpg";
import pic6 from "../../pictures/img_cat_home_6.jpg";

const HomePopular = () => {
  return (
    <React.Fragment>
      <section className={classes.main}>
        <div className={`${classes["main-title"]} ${classes.center}`}>
          <h2 className={classes.heading2}>Popular Categories</h2>
          <p className={classes.para1}>Enjoy our best Dishes</p>
        </div>
      </section>

      <section className={classes.imagesmain}>
        <figure className={`${classes["gallery-item"]} ${classes.item1}`}>
          <img src={pic1} alt="pizza" className={classes.galimg} />
        </figure>
        <figure className={`${classes["gallery-item"]} ${classes.item2}`}>
          <img src={pic2} alt="sushi" className={classes.galimg} />
        </figure>
        <figure className={`${classes["gallery-item"]} ${classes.item3}`}>
          <img src={pic3} alt="Burger" className={classes.galimg} />
        </figure>

        <figure className={`${classes["gallery-item"]} ${classes.item4}`}>
          <img src={pic4} alt="sweets" className={classes.galimg} />
        </figure>
        <figure className={`${classes["gallery-item"]} ${classes.item5}`}>
          <img src={pic5} alt="sweets" className={classes.galimg} />
        </figure>
        <figure className={`${classes["gallery-item"]} ${classes.item6}`}>
          <img src={pic6} alt="sweets" className={classes.galimg} />
        </figure>
      </section>
    </React.Fragment>
  );
};
export default HomePopular;

/*
<section className={classes.main}>
        <div className={`${classes["main-title"]} ${classes.center}`}>
          <span className={classes.spaner}>
            <em className={classes.emz}></em>
          </span>
          <h2 className={classes.heading2}>Popular Categories</h2>
          <p className={classes.para1}>Enjoy our best Dishes</p>
        </div>
      </section>
      */
