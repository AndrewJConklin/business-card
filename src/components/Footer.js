import React from 'react';
import twitter from '../assets/Twitter Icon.png'
import facebook from '../assets/Facebook Icon.png'
import instagram from '../assets/Instagram Icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://www.linkedin.com/in/andrew-john-conklin'><img src={twitter} alt="Twitter Link" /></a>
      <a href='https://www.linkedin.com/in/andrew-john-conklin'><img src={facebook} alt="Facebook Link" /></a>
      <a href='https://www.linkedin.com/in/andrew-john-conklin'><img src={instagram} alt="Instagram Link" /></a>
    </div>
  )
}