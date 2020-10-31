import React from "react";
import styles from "./AboutUs.module.scss";
import NavBar from "../NavBar"
import { Grid, Segment} from 'semantic-ui-react'

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <Grid celled='internally'>
      <Grid.Row centered>
      <Grid.Column textAlign='center' width={10}>
          <h2>Hello Welcome to For-Tutors</h2>    
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={5}>
          <h3>The problem with tuition</h3> 
          <p>One-to-one tuition is proven to be one of the best ways to improve grades. And grades are directly linked to life chances and career progression. But until now, tuition has been out of reach for most families – it was too expensive, availability was low, or it relied on living near a good tutor.</p>   
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={5}>
          <h3>How we’re solving it</h3> 
          <p>For-Tutors was founded to offer life-changing tuition for all, and this mission makes us excited to get up and come to work every day. We’re proud that our online network of great tutors supports pupils from all walks of life. Lessons are tailored to each individual and fit the hectic schedule of any family.</p>   
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </>
  );
};

export default AboutUs;
