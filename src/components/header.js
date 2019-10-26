import React, {Component} from 'react';
import {HeaderDiv, BlackSplitter, NavbarItem, SemiCircle, WhiteSpace} from './styles';
import {Link} from '@reach/router'

class Header extends Component {
  render(){
  return(
      <>
        <HeaderDiv>
            <BlackSplitter></BlackSplitter>
            <SemiCircle>
                <WhiteSpace>
                </WhiteSpace>
                <WhiteSpace>    
                </WhiteSpace>
            </SemiCircle>
            <BlackSplitter></BlackSplitter>
        </HeaderDiv>
      </>
    );
  }
}

export default Header;