import AuthForm from "../components/Auth/AuthForm";
import React from "react";
import classes from "./AuthPage.module.css";
const AuthPage = () => {
  return (
    <React.Fragment>
      <div className={classes.main}>
        <AuthForm />
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
