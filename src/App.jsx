import React, { Component } from 'react'
import styles from './App.module.scss'
import SignUpPage from './components/SignUpPage'
import Routes from './containers/Routes'

import { Button } from 'semantic-ui-react'

function App() {
  return (
    <>
    <section>
      <Routes />
    </section>
    </>
  );
}

export default App;
