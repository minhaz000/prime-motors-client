import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom'
function Layout(props) {
  return (
    <>

      <Header> </Header>
         <Outlet></Outlet>
      <Footer> </Footer>


    </>
  );
}

export default Layout;