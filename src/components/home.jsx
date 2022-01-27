import React from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';

const Home = () =>{
  return (
    <div>
      <Header/>
      <p>this is home page</p>
      <Content />
      <Footer/>
    </div>
  )
}

export default Home;
