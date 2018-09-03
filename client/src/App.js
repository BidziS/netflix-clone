import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  }
}

export default App;
