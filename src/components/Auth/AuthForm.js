import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import appiphone from "../../pictures/app-iPhone.png";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    console.log(isLogin);

    setIsLogin((prevState) => !prevState);
    console.log(isLogin);
    // setIsLogin(!isLogin);
  };

  const submitHanlder = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvIC8oR2kLMCYK6JqaIdwELabLYAZPCUo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvIC8oR2kLMCYK6JqaIdwELabLYAZPCUo";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());

        history.replace("/Chefs");
        //redirecting to starting opage and using replace whihc will aloow user to not use Go back option
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.girder}>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHanlder}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending Request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <section className={classes.rightmain}>
        <div className={classes.cen}>
          <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className={classes.divi}>
          <div className={classes.centering}>
            <figure>
              <img
                src={appiphone}
                alt="app phone"
                className={classes.appscreen}
              />
            </figure>
          </div>
          <div className={classes.stepbox}>
            <div className={classes.worksteps}>
              <div>1</div>
              <p className={classes.urpara}>
                Choose the Food that best fits your needs and sign up today.
              </p>
            </div>

            <div className={classes.worksteps}>
              <div>2</div>
              <p className={classes.urpara}>
                Order your delicious meal using our mobile app or website. Or
                you can even call us!
              </p>
            </div>

            <div className={classes.worksteps}>
              <div>3</div>
              <p className={classes.urpara}>
                Enjoy your meal after less than 20 minutes. See you the next
                time!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
