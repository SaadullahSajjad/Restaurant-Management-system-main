import classes from "./HeaderPhoto.module.css";
//import aboutpic from "../../pictures/blog-2.jpg";

import pic1smal from "../../pictures/nat-1.jpg";
import pic1larg from "../../pictures/nat-1-large.jpg";
import pic2smal from "../../pictures/nat-2.jpg";
import pic2larg from "../../pictures/nat-2-large.jpg";
import pic3smal from "../../pictures/nat-3.jpg";
import pic3larg from "../../pictures/nat-3-large.jpg";

const HeaderPhoto = () => {
  return (
    <>
      <div>
        <div className={classes.heading}>
          <h1>about us</h1>
        </div>
      </div>
      <section className={classes.about}>
        <div className={classes.image}>
          <div className={classes.composition}>
            <img
              srcset={`${pic1smal} 300w, ${pic1larg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="food 1"
              className={`${classes.compositionphoto} ${classes.compositionphotop1}`}
              src={pic1larg}
            />
            <img
              srcset={`${pic2smal} 300w, ${pic2larg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="food 1"
              className={`${classes.compositionphoto} ${classes.compositionphotop2}`}
              src={pic2larg}
            />
            <img
              srcset={`${pic3smal} 300w, ${pic3larg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="food 1"
              className={`${classes.compositionphoto} ${classes.compositionphotop3}`}
              src={pic3larg}
            />
          </div>
        </div>

        <div className={classes.content}>
          <h3 className={classes.head3}>why choose us?</h3>
          <p className={classes.para3}>
            At our restaurant, we take great pride in providing our customers
            with an unparalleled dining experience. From our menu to our
            atmosphere, we aim to create a welcoming and comfortable environment
            that leaves a lasting impression.
          </p>
          <p className={classes.para3}>
            Not only do we prioritize the quality of our food, but we also place
            great emphasis on exceptional customer service. Our friendly and
            knowledgeable staff are always on hand to offer recommendations.
          </p>
          <div className={classes.iconscontainer}>
            <div className={classes.icons}>
              <i
                className={` ${classes.iconmain} ${classes.fas} ${classes.famap}`}
              ></i>
              <span className={classes.spaner}>top Restaurent</span>
            </div>
            <div className={classes.icons}>
              <i
                className={` ${classes.iconmain}${classes.fas} ${classes.famap}`}
              ></i>
              <span className={classes.spaner}>affordable price</span>
            </div>
            <div className={classes.icons}>
              <i
                className={` ${classes.iconmain}${classes.fas} ${classes.famap}`}
              ></i>
              <span className={classes.spaner}>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeaderPhoto;

/* <div className={classes.image}>
          <img className={classes.imgmain} src={aboutpic} alt="demopic" />
        </div> */
