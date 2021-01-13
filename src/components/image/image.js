import React from 'react'
import PropTypes from 'prop-types'

import './image.css'

const Image = ({ src, style }) => {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow(!show)

  return (
    <figure className={'image' + style}>
      <img src={src} alt="photo" onClick={toggle} />
      <div className={show ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={toggle}></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </p>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={toggle}
        ></button>
      </div>
    </figure>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.string
}

export default Image
