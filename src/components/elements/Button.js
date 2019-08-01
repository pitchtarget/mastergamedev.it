import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Button = ({
    text,
    link,
    local,
    target,
    style,
    icon,
  }) => {
  return (
    <>
      { local
        ? <Link
            to={link ? `${link}` : "#"}
            className={style}
          >
            <span className="text">{text}</span>
            <span className="icon is-large">
              <i className={icon ? `${icon}` : "fas fa-arrow-right fa-3x"}></i>
            </span>
          </Link>
        : <a
            href={link ? `${link}` : "#"}
            target={target ? "_blank" : "_self"}
            className={`${style}`}
          >
            <span className="text">{text}</span>
            <span className="icon is-large">
              <i className={icon ? `${icon}` : "fas fa-arrow-right fa-3x"}></i>
            </span>
          </a>
      }
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  local: PropTypes.bool,
  target: PropTypes.bool,
  style: PropTypes.string,
}


export default Button
