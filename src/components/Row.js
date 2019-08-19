import React from 'react'
import PropTypes from 'prop-types'
import Image from './elements/Image'
import Button from './elements/Button'

const Row = ({ data, reverse, color }) => {
  const {image, alt, title, text, cta, link} = data
  return (
    <div className={`row row--${color || "default"}`}>
      <div className="container is-fullhd">
        <div
          className="columns is-tablet is-vcentered is-0"
          style={{flexDirection: reverse ? 'row-reverse' : 'row'}}
        >
          <div className="column is-4-tablet is-half-desktop">
            <Image src={image} alt={alt} children />
          </div>
          <div className={`column is-8-tablet is-half-desktop is-5-widescreen ${reverse && 'is-offset-1-widescreen'}`} >
            <div
              className="content"
              style={{padding: '10%'}}
            >
              {title &&
                <h2>
                  <span className="title is-spaced is-size-3-mobile is-size-2-tablet">
                    {title}
                  </span>
                </h2>
              }
              {text &&
                <p className="description">
                  {text}
                </p>
              }
              {cta && link &&
                <Button
                  text={cta}
                  link={link}
                  styles={`cta cta-large`}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Row.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    cta: PropTypes.string,
    link: PropTypes.string,
  }),
}

export default Row
