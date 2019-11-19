import React, {Component} from 'react';
import {NavbarItem, NavbarDiv} from './styles'

class Navbar extends Component {
  render(){ 
  return(
      <>
        <NavbarDiv>
            Pokédex
            <NavbarItem>Login</NavbarItem>
        </NavbarDiv>
      </>
    );
  }
}

export default Navbar;