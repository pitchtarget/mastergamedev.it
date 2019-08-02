import React from 'react'
import Button from '../components/elements/Button'

const SignupBox = ({ contents, color, id }) => {
  const style = color === "invert"
  return (
    <div id={id} className={`signupBox signupBox${style ? "__invert" : "__regular"}`}>
      <div
        className="signupBox--image"
        style={{
          backgroundImage: `url(${
            !!contents.image.childImageSharp ? contents.image.childImageSharp.fluid.src : contents.image
          })`
        }}
      />

      <div className={`signupBox--text signupBox--text${style ? "__invert" : "__regular"}`}>
        <h2 className="title is-4">{contents.heading}</h2>
        <p className="subtitle is-6">{contents.subheading}</p>
      </div>
      <div className="signupBox--cta">
        <Button
          text={contents.cta}
          link={contents.link}
          local={true}
          styles={`cta cta${!style ? "__invert" : "__regular"}`}
        />
      </div>
    </div>
  )
}

export default SignupBox