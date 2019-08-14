import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Image = ({ src, alt, children, styles }) => {
  let image
  if(!!src) {
    image = !!src.childImageSharp ? src.childImageSharp.fluid.src : src
  } else {
    image = '/img/placeholder.png'
  }

  return (
    <>
      { !!children
        ? <div
            className={!!styles ? styles : "Image asBackground"}
            style={{backgroundImage: `url(${image})`}}
            title={alt}
          >
            {children}
          </div>

        : <img
            className={!!styles ? styles : "Image asTag"}
            src={image}
            alt-image={alt}
          />
      }
    </>
  )
}

Image.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
  styles: PropTypes.string,
}

export default Image
