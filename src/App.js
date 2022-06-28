import React from 'react';
import headshot from './Headshot2.jpg'
import twitter from './Twitter Icon.png'
import facebook from './Facebook Icon.png'
import instagram from './Instagram Icon.png'
import github from './GitHub Icon.png'
import linkedin from './Linkedin Icon.png'

export default function App() {
  return (
    <div className="main-card">
      <img src={headshot} alt="Headshot" className='headshot' />
      <div className='main-content'>
        <h1>Andrew Conklin</h1>
        <h3>Full Stack Web Developer</h3>
        <h4>conklinandrewj@gmail.com</h4>
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
        <div className='description'>
          <h2>About</h2>
          <p>I am a full-stack developer with a particular interest in the finance industry. I enjoy learning new technology and staying up to date with Agile practices. If you wish to connect, please do not hesitate to reach out!</p>
          <h2>Interests</h2>
          <p>I love to try just about anything! My top interests have to be working through the entire Netflix streaming collection with my wife, hitting the gym, going for jogs, and kayaking/paddleboarding.  </p>
        </div>
        <div className='footer'>
          <img src={twitter} alt="Headshot" />
          <img src={facebook} alt="Headshot" />
          <img src={instagram} alt="Headshot" />
        </div>
      </div>
    </div>
  )
}