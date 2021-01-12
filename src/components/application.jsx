import React from 'react'
import Image from './image/image'

import photo from '../../public/photo.jpeg'

import './application.css'

const Application = () => (
  <div className="application">
    <div className="grid">
      <div className="column">Boop!</div>
    </div>
    <div className="grid">
      <div className="column">
        <Image src={photo} />
        <Image src={photo} />
      </div>
    </div>
  </div>
)

export default Application
