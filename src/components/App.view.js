import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Results from "components/Results"
import Login from "components/auth/Login";
import css from "resources/css/App.module.css";

const AppView = () =>
  <div class={css.module}>
    <BrowserRouter>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  </div>;

AppView.propTypes = {};

export default AppView;