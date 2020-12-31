import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
 



  render(){
    
    return (
      <React.Fragment>
        <CssBaseline />
       
    
        <Layout>
         
        </Layout>
        <BurgerBuilder />
       
      </React.Fragment>
    );
  }
 
}

export default App;
