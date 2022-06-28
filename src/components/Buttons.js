import React from 'react';
import github from '../assets/GitHub Icon.png'
import linkedin from '../assets/Linkedin Icon.png'

export default function Buttons() {
  return (
    <div className='buttons'>
      <button>
        <img src={github} alt="GitHub Icon"></img>
        <a href='https://github.com/AndrewJConklin'>GitHub</a>
      </button>
      <button>
        <img src={linkedin} alt="LinkedIn Icon"></img>
        <a href='https://www.linkedin.com/in/andrew-john-conklin'>LinkedIn</a>
      </button>
    </div>
  )
}