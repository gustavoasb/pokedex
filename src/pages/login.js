import React, {Component} from 'react';
import {BackgroundStyleRed, FormDiv} from "../components/styles"
import LoginForm from '../components/loginform'

class Login extends Component {
  render(){
  return(
      <>
        <BackgroundStyleRed/>
        <FormDiv>
          <LoginForm/>
        </FormDiv>
      </>
    );
  }
}

export default Login;
