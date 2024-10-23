import React, { useState } from "react";
import classes from "./HomeSlider.module.css";
import { useHistory } from "react-router-dom";

const HomeSlider = () => {
  const [isFirstPic, setIsFirstPic] = useState(true);
  const [isSecondPic, setIsSecondPic] = useState(false);
  const history = useHistory();
  const picOneHandler = () => {
    setIsFirstPic(false);
    setIsSecondPic(true);
  };

  const picTwoHandler = () => {
    setIsFirstPic(true);
    setIsSecondPic(false);
  };

  const discoverMoreHandler = () => {
    history.replace("/Aboutus");
  };
  return (
    <React.Fragment>
      <section>
        <div className={`${classes["home-slider"]} ${classes.swiper}`}>
          <div className={classes["swiper-wrapper"]}>
            {isFirstPic && (
              <div
                className={`${classes["swiper-slide"]} ${classes["meal-photo"]} ${classes.slide} ${classes.backg1}`}
              >
                <div className={classes.content}>
                  <span className={classes.spa}>
                    The best Restaurants at the best price
                  </span>
                  <h3 className={classes.h3tag}>Discover and order</h3>
                  <a
                    onClick={discoverMoreHandler}
                    href="##"
                    className={` ${classes.btn} ${classes.btnwhite} ${classes.btnanimated}`}
                  >
                    discover more
                  </a>
                </div>
              </div>
            )}

            {isSecondPic && (
              <div
                className={`${classes["swiper-slide"]} ${classes["meal-photo"]} ${classes.slide} ${classes.backg2}`}
              >
                <div className={classes.content}>
                  <span className={classes.spa}>
                    Huge variety of food at the best price
                  </span>
                  <h3 className={classes.h3tag}>Enjoy A friends Dinner</h3>
                  <a
                    onClick={discoverMoreHandler}
                    href="##"
                    className={` ${classes.btn} ${classes.btnwhite} ${classes.btnanimated}`}
                  >
                    discover more
                  </a>
                </div>
              </div>
            )}
            <div></div>
          </div>
          <div
            className={classes["swiper-button-next"]}
            onClick={picOneHandler}
          >
            &gt;
          </div>
          <div
            className={classes["swiper-button-prev"]}
            onClick={picTwoHandler}
          >
            &lt;
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeSlider;
