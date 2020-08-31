import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";

const AuthRoutes: React.FC = () => (
  <>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/forgot-password" component={ForgotPassword} />
  </>
);

export default AuthRoutes;
