import React from 'react'
import Button from '../components/elements/Button'

const validateImages = (image) => {
  let newImage
  if(!!image) {
    newImage = !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  } else {
    newImage = '/img/placeholder.png'
  }
  return newImage
}

const Cover = ({ contents, clipImage }) => {
  const isClipped = clipImage ? "is-clipped" : ""
  return (
    <div className="columns is-desktop is-vcentered">
      <div className="column is-offset-1 is-8-tablet is-5-desktop">
        <div className="cover--content">
          <div>
            <h1 className="title is-spaced is-size-2-mobile is-size-1-tablet">{contents.heading}</h1>
            <p className="subtitle is-size-6-mobile is-size-4-tablet">{contents.subheading}</p>
            <Button
              text={contents.cta}
              link={contents.link}
              local={true}
              styles="cta cta-large cta__regular"
            />
          </div>
        </div>
      </div>
      <div
        className={`column cover--image ${isClipped}`}
        style={{
          backgroundImage: `url(${validateImages(contents.image)})`
        }}
      />
    </div>
  )
}

export default Cover
