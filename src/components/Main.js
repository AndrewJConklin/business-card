import React from 'react';
import Buttons from './Buttons';
import Description from './Description';
import Footer from './Footer';


export default function Main() {
  return (
    <div className='main-content'>
      <h1>Andrew Conklin</h1>
      <h3>Full Stack Web Developer</h3>
      <h4>conklinandrewj@gmail.com</h4>
      <Buttons />
      <Description />
      <Footer />
    </div >
  )
}