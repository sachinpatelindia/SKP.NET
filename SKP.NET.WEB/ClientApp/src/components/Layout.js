import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu  from './NavMenu';

const Layout=()=> {

  return(
      <div> 
        <NavMenu />
        <Container tag="main">
         
        </Container>
      </div>
    );
}

export default Layout;
