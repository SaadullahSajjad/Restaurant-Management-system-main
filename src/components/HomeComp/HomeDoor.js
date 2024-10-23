import React from "react";
import classes from "./HomeDoor.module.css";
//import img1 from "../../pictures/how_1.svg";
import img1 from "../../pictures/how_1.svg";
import img2 from "../../pictures/how_2.svg";
import img3 from "../../pictures/how_3.svg";
import img4 from "../../pictures/how_4.svg";

import { useHistory } from "react-router-dom";

const HomeDoor = () => {
  const history = useHistory();

  const registerHandler = (event) => {
    event.preventDefault();
    history.replace("/auth");
  };

  return (
    <React.Fragment>
      <section className={classes.main}>
        {/* Left portion */}
        <div className={classes.divider}>
          <div className={classes.box}>
            <figure>
              <img src={img1} alt="Orderonphone" />
            </figure>
            <h3 className={classes.hea_3}>Easly Order</h3>
            <p className={classes.para}>
              Just select food. Enter Details and click order.
            </p>
          </div>
          <div className={`${classes["item-3"]} ${classes.box}`}>
            <figure>
              <img src={img2} alt="QuickDelivery" />
            </figure>
            <h3 className={classes.hea_3}>Quick Delivery</h3>
            <p className={classes.para}>
              Our fast rider will bring food in front door with in 1 hour .
            </p>
          </div>
          <div className={classes.box}>
            <figure>
              <img src={img3} alt="EnjoyDelivery" />
            </figure>
            <h3 className={classes.hea_3}>Enjoy Food</h3>
            <p className={classes.para}>
              Cooked by our best chef and fastly delieverd will bring best
              taste.
            </p>
          </div>
          <div className={classes.box}>
            <figure>
              <img src={img4} alt="EnjoyDelivery" />
            </figure>
            <h3 className={classes.hea_3}>Enjoy at low</h3>
            <p className={classes.para}>
              Refrain from being pay high amount of money.
            </p>
          </div>
        </div>
        {/* right portion */}
        <div className={classes.flexer}>
          <div className={classes.content}>
            <h2 className={classes.heading2}>Start Ordering Now</h2>
            <p className={classes.sec2para1}>
              Register Now and start making orders.
            </p>
            <p className={classes.sec2para2}>
              To place any order please register first and be our food lover
              customer.
            </p>
            <a
              onClick={registerHandler}
              className={`${classes["btn-ghost"]} ${classes.btn}`}
              href="##"
            >
              Register
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeDoor;
