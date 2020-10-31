import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Icon, Label, Menu } from 'semantic-ui-react'


const DashNavBar = () => {
  const navToHome = () => {
    navigate('dashboard')
  }
  const navToCalender = () => {
    navigate('dashboard')
  }
  const navToPayments = () => {
    navigate('payments')
  }
  const navToSignOut = () => {
    navigate('payments')
  }

  return (
    <>
      <div class="ui menu">
        <div onClick={navToHome} class="ui medium header item">
          For-Tutors
        </div>
        <Menu.Item position='right' as='a'onClick={navToCalender}>
          Calender
        </Menu.Item>
        <Menu.Item as='a'onClick={navToPayments}>
          Payments
          <Label circular color='red'>
          1
          </Label>
        </Menu.Item>
        <Menu.Item as='a'onClick={navToSignOut}>
          Sign-Out
        </Menu.Item>
      </div>
    </>
  );
};

export default DashNavBar;