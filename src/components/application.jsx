import React from 'react'

import Hero from './hero/hero'
import Image from './image/image'

import photo from '../../public/photo.jpeg'

import './application.sass'

const Application = () => (
  <div className="application">
    <Hero />
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-2">
          {[...Array(20).keys()].map((index) => {
            return (
              <div className="column is-6" key={index}>
                <Image src={photo} style={'is-5by4'} key={index} />
                <i className="fas fa-camera-retro"></i>
                <span className="ml-2">Canon EOS Rp</span>
                <i className="fas fa-genderless ml-2"></i>
                <span className="ml-2">35.0 mm</span>
                <i className="ml-2 fas fa-stopwatch-20"></i>
                <span className="ml-2">1/80</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </div>
)

export default Application
