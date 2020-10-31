import React from "react";
import styles from "./FormSignUp.module.scss";
import { Form, Input, Button, Select, TextArea, Checkbox } from 'semantic-ui-react'

const FormSignUp = () => {
  const genderOptions = [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
    { text: 'Other', value: 'other' },
  ]
  const studyOptions = [
    { text: 'A-level', value: 'alevel' },
    { text: 'GCSE', value: 'gcse' },
    { text: 'Other', value: 'other' },
  ]
  const stubjectOptions = [
    { text: 'Biology', value: 'biology' },
    { text: 'Chemistry', value: 'chemistry' },
    { text: 'Physics', value: 'physics' },
  ]
  return (
    <>
      <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />


    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
      />
      <Form.Field
        control={Select}
        options={studyOptions}
        label={{ children: 'Studying', htmlFor: 'form-select-control-studying' }}
        placeholder='Studying'
      />
      <Form.Field
        control={Select}
        options={stubjectOptions}
        label={{ children: 'Subject', htmlFor: 'form-select-control-subject' }}
        placeholder='Subject'
      />
    
    </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Information for you tutor'
        placeholder='1. Tell them what you are struggling with in your area subject? *Please explain in detail.'
      />    

      <Form.Group widths='equal'>
        <Form.Field
        id='form-input-control-email'
        control={Input}
        label='Email'
        placeholder='fortutors@school.com'
        />
        <Form.Input 
        label='Enter Password' 
        type='password' 
        />
      </Form.Group>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions ***Put link to terms and conditions****' />
      </Form.Field>
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Confirm'
      />
    </Form>
    </>
  );
};

export default FormSignUp;
