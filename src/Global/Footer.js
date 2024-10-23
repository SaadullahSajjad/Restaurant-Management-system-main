import React from "react";
import classes from "./Footer.module.css";
import logo from "../pictures/logo.png";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const aboutUsHandler = (event) => {
    event.preventDefault();
    history.replace("/Aboutus");
  };
  const menuHandler = (event) => {
    event.preventDefault();
    alert("To gain access to this page, please login or register an account.");
    history.replace("/auth");
  };

  const chefHandler = (event) => {
    event.preventDefault();
    alert("To gain access to this page, please login or register an account.");
    history.replace("/auth");
  };

  const privacyPHandler = (event) => {
    event.preventDefault();
    alert("Working hard to bring you this page. Please check back soon!");
  };

  const servicesHandler = (event) => {
    event.preventDefault();
    alert("Working hard to bring you this page. Please check back soon!");
  };

  const footerLogoHandler = (event) => {
    event.preventDefault();
    history.replace("/home");
  };
  return (
    <React.Fragment>
      <footer>
        <div onClick={footerLogoHandler} className={classes.footerlogobox}>
          <figure>
            <img src={logo} alt="logo" className={classes.footerlogo} />
          </figure>
        </div>
        <div className={classes.flexer}>
          <div className={classes.footernavigation}>
            <ul className={classes.footerlist}>
              <li className={classes.footeritem}>
                <a
                  onClick={menuHandler}
                  href="##"
                  className={classes.footerlink}
                >
                  Menu
                </a>
              </li>
              <li className={classes.footeritem}>
                <a
                  onClick={aboutUsHandler}
                  href="##"
                  className={classes.footerlink}
                >
                  About us
                </a>
              </li>
              <li className={classes.footeritem}>
                <a
                  onClick={chefHandler}
                  href="##"
                  className={classes.footerlink}
                >
                  Chefs
                </a>
              </li>
              <li className={classes.footeritem}>
                <a
                  onClick={privacyPHandler}
                  href="##"
                  className={classes.footerlink}
                >
                  Privacy policy
                </a>
              </li>
              <li className={classes.footeritem}>
                <a
                  onClick={servicesHandler}
                  href="##"
                  className={classes.footerlink}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.rightf}>
            <p className={classes.footercopyright}>
              Built by
              <a
                href="https://www.linkedin.com/in/ghufran-ullah-b36b411b9/"
                className={classes.footerlink}
              >
                Ghufran Ullah
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/muhammad-ali-mian-3bab711b9/"
                className={classes.footerlink}
              >
                Ali Mian
              </a>
              ,
              <a
                href="https://www.linkedin.com/in/ali-nawab-khan-265ba9221/"
                className={classes.footerlink}
              >
                Ali Nawab
              </a>
              <p>
                . Copyright &copy; by Ghufran. developed this project for Web
                Engineering Lab Course. The aim of this project is to deliver a
                good and proper webpage on Restaurent Managment System where
                anyone can see the menu and order accoridng to their likings.
              </p>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
