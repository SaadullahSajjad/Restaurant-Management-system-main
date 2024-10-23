import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./Global/MainHeader";
import AboutUs from "./pages/AboutUs";
//import Menu from "./pages/Menu";
import Home from "./pages/Home";
//import Services from "./pages/Services";
import Chefs from "./pages/Chefs";
import Order from "./pages/Order";
import AuthPage from "./pages/AuthPage";
import "./App.css";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Footer from "./Global/Footer";
//<Footer />

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <MainHeader />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>

        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        {!authCtx.isLoggedIn && (
          <Route path="/home">
            <Home></Home>
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/Aboutus">
            <AboutUs></AboutUs>
          </Route>
        )}

        {/* <Route path="/Menu">
          {authCtx.isLoggedIn && <Menu />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route> */}
        {/* <Route path="/Services">
          {authCtx.isLoggedIn && <Services />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route> */}

        <Route path="/Chefs">
          {authCtx.isLoggedIn && <Chefs />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>

        <Route path="/Order">
          {authCtx.isLoggedIn && <Order />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

/**
 * 
 * 
 * <Route path="/Menu">
          {authCtx.isLoggedIn && <Menu />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>
        <Route path="/Services">
          {authCtx.isLoggedIn && <Services />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>

        <Route path="/Chefs">
          {authCtx.isLoggedIn && <Chefs />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>

        <Route path="/Order">
          {authCtx.isLoggedIn && <Order />}
          {!authCtx.isLoggedIn && <Redirect to="auth" />}
        </Route>



 */

/*
         {authCtx.isLoggedIn && (
          <Route path="/Menu">
            <Menu />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/Services">
            <Services />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/Chefs">
            <Chefs />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/Order">
            <Order />
          </Route>
        )}
        */
