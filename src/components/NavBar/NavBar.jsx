import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { NavLink, withRouter } from 'react-router-dom'
import { Link } from "@reach/router";
import { Button } from 'semantic-ui-react';
import { navigate } from "@reach/router";


const NavBar = () => {
  const navToHome = () => {
    navigate('/')
  }
  const navToAboutUs = () => {
    navigate('about-us')
  }
  const navToSignUp = () => {
    navigate('/')
  }

  return (
    <>
      <div class="ui menu">
        <div onClick={navToHome} class="ui medium header item">
          For-Tutors
        </div>
        <a onClick={navToSignUp} class="ui right item md-opjjpmhoiojifppkkcdabiobhakljdgm_doc active">
          Sign-Up
        </a>
        <a onClick={navToAboutUs} class="item md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
            About Us
        </a>
        <a class="item md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
          Tutors Login
        </a>
      </div>
    </>
  );
};

export default NavBar;
