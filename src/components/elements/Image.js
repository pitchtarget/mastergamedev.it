import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, children, styles, rounded }) => {
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
            className={!!styles ? styles : "image--background"}
            style={{backgroundImage: `url(${image})`}}
            title={alt}
          >
            {children}
          </div>

        : <figure className={`image ${!!styles? styles : "is-fullwidth"}`}>
            <img
              className={!!rounded ? "is-rounded" : ""}
              src={image}
              alt-image={alt}
            />
          </figure>
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
