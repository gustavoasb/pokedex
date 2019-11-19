import React, {Component} from 'react';
import {HeaderDiv, BlackSplitter, Circle, Red, HalfHeader, White, HeaderTop} from './styles';
import {Link} from '@reach/router';
import pokedeximg from '../images/pokedex.png'

class Header extends Component {
  render(){
  return(
      <>
        <HeaderTop>
          <img src = {pokedeximg} width="250vw" alt="Pokédex"/>
        </HeaderTop>
        <HeaderDiv>
          <HalfHeader>
            <Red></Red>
            <BlackSplitter></BlackSplitter>
            <White></White>
          </HalfHeader>
          <Link to='/login' style={{ textDecoration: 'none' }}><Circle>LOGIN</Circle></Link>
          <HalfHeader>
            <Red></Red>
            <BlackSplitter></BlackSplitter>
            <White></White>
          </HalfHeader>
        </HeaderDiv>
      </>
    );
  }
}

export default Header;