import React from 'react'
import PropTypes from 'prop-types'

import './image.css'

const Image = ({ src }) => (
  <div className="image">
    <img src={src} alt="photo" />
  </div>
)

Image.propTypes = {
  src: PropTypes.string
}

export default Image
