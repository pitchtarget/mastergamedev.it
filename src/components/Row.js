import React from 'react'
import PropTypes from 'prop-types'
import Button from './elements/Button'

const ctaStyle = (color) => {
  let style
  switch (color) {
    case 'primary': style='invert'; break;
    case 'invert': style='primary'; break;
    case 'dark': style='light'; break;
    case 'light': style='dark'; break;
    default: style='invert';
  }
  return style
}

const Row = ({ data, reverse, color }) => {
  const {image, alt, title, text, cta, link} = data
  if(!data) {
    return  null
  } else {
    return (
      <div className={`row row__${color || "default"}`}>
        <div className="container is-fullhd">
          <div
            className="row-wrapper"
            style={{flexDirection: reverse ? 'row-reverse' : 'row'}}
          >
            <div className="row--image" title={alt} style={{backgroundImage: `url(${image.childImageSharp.fluid.src})`}}>
            </div>
            <div className="row--content" >
              <div className="content" style={{padding: '5%'}}>
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
                    text={cta} link={link}
                    styles={`cta cta-large cta__${ctaStyle(color)}`}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
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
