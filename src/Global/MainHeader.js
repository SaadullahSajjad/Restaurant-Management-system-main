import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import logo from "../pictures/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";
//import HeaderCartButton from "../components/OrderComp/Cart/HeaderCartButton";
const MainHeader = () => {
  const [showHam, setIsShowHam] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const showHamBurger = () => {
    setIsShowHam(!showHam);
  };

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    //optional can redirect user to main poage after logout
    //but we can use new concept navigation guard,protecting pages
  };
  const logoHandler = (event) => {
    event.preventDefault();
    history.replace("/home");
  };

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.row}>
          <div onClick={logoHandler} className={classes.tip}>
            <img src={logo} alt="cheff logo" className={classes.LOGO} />
            <h5>FoodFrenzy</h5>
          </div>
          <div
            className={
              showHam
                ? `${classes.mainnav} ${classes.togglenav}`
                : `${classes.mainnav}`
            }
          >
            <ul>
              {!isLoggedIn && (
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <NavLink to="/Aboutus">About Us</NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <NavLink to="/auth">
                    <button className={`${classes.btn} ${classes.uni} `}>
                      <span>Login</span>
                    </button>
                  </NavLink>
                </li>
              )}
              {/* {isLoggedIn && (
                <li>
                  <NavLink to="/Menu">Menu</NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <NavLink to="/Services">Services</NavLink>
                </li>
              )} */}
              {isLoggedIn && (
                <li>
                  <NavLink to="/Chefs">Chefs</NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <NavLink to="/Order">Order</NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <button
                    className={`${classes.btn} ${classes.uni} `}
                    onClick={logoutHandler}
                  >
                    <span>Logout</span>
                  </button>
                </li>
              )}
            </ul>
            {showHam && <p onClick={showHamBurger} className={classes.pa}></p>}
          </div>

          <div className={classes.hamburger}>
            <div onClick={showHamBurger}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
