import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, children, styles, rounded, size, vertical }) => {
  let media
  if(!!src) { media = !!src.childImageSharp ? src.childImageSharp.fluid.src : src.publicURL }
  else { media = '/img/placeholder.png' }

  let videoSize
  if (size === 'sm') { videoSize = {w: 400, h: 300} }
  else if (size === 'md') { videoSize = {w: 1024, h: 768} }
  else if (size === 'lg') { videoSize = {w: 1440, h: 1080} }
  else { videoSize = {w: 800, h: 600} }

  if(!!vertical) {videoSize = {w: videoSize.h, h: videoSize.w} }
  // console.log(src.extension)
  // debugger

  return (
    <>
      { src.extension === "mp4"
        ? <video className={styles} autoPlay loop muted width={`${videoSize.w}`} height={`${videoSize.h}`}>
            <source src={media} type="video/mp4"/>
            Sorry, your browser doesn't support embedded videos.
          </video>
        : <>
          { !!children
            ? <div
                className={!!styles ? styles : "image--bg is-md"}
                style={{backgroundImage: `url(${media})`}}
                title={alt}
              >
                {children}
              </div>

            : <figure className={`image ${!!styles? styles : "is-fullwidth"}`}>
                <img
                  className={!!rounded ? "is-rounded" : ""}
                  src={media}
                  alt={alt}
                />
              </figure>
          }
        </>
      }
    </>
  )
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  alt: PropTypes.string,
  styles: PropTypes.string,
  size: PropTypes.string,
}

export default Image
