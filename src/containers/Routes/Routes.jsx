import React from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

import SignUp from "../../components/SignUpPage"
import AboutUs from "../../components/AboutUs"
import Dashboard from "../../components/DashBoard"
import NavBar from "../../components/NavBar"
import Payments from "../../components/DashBoard/Payments"

const Routes = () => {
  return (
    <>
    <Router>
      <SignUp path="/"/>
      <AboutUs path="about-us" />
      <Dashboard path="dashboard"/>
      <Payments path="payments"/>
    </Router>
    </>
  );
};

export default Routes;
