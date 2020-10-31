import React from "react";
import NavBar from "../NavBar"
import styles from "./SignUpPage.module.scss";
import FormSignUp from "./FormSignUp"
import { Grid, Segment} from 'semantic-ui-react'
import { Link } from "@reach/router";

const SignUpPage = () => {
  return (
    <>
      <NavBar />
      <Grid centered columns={2} divided>
        <Grid.Column>
          <Segment textAlign='center'><h2>Sign Up</h2></Segment>
          <Segment>
            <FormSignUp/>
          </Segment>
        </Grid.Column>
      </Grid>

    </>
  );
};

export default SignUpPage;
