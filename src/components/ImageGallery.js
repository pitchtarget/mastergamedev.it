import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Image from '../components/elements/Image'

const ImageGallery = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      index: null,
      imagesLength: this.props.images.length,
      modalActiveClass: '',
    }
  }

  changeImage = () => {
    const imagesLength = this.props.images.length-1
    let imageIndex = this.state.index
    this.setState({index: imageIndex < imagesLength ? imageIndex+1 : 0})
  }

  toggleModal = (index) => {
    // toggle the active boolean in the state
    if(!this.props.disableModal) {
      this.setState(
        {
          active: !this.state.active,
          index: index != null ? index : null,
        },
        // after state has been updated,
        (index) => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                modalActiveClass: 'is-active',
              })
            : this.setState({
                modalActiveClass: '',
              })
        }
      )
    }
  }

  render() {
    const images = this.props.images
    return (
      <>
        <div className="gallery">
          { images.length > 0 && images.map( (image, i) => {
            return (
              <div key={v4()} onClick={() => this.toggleModal(i)}>
                <Image
                  src={image.image}
                  alt={image.altImage}
                  styles="gallery--thumb"
                />
              </div>
            )})
          }
        </div>
        { this.state.active &&
          <div className={`modal  ${this.state.modalActiveClass}`}>
            <div className="modal-background" onClick={() => this.toggleModal()}></div>
            <div className="modal-card gallery--next" onClick={() => this.changeImage()}>
              <Image
                src={images[this.state.index].image}
                alt={images[this.state.index].altImage}
              />
              <p className="has-text-centered has-text-white" style={{marginTop: '1rem'}}>
                <small>{this.state.index + 1} / {this.state.imagesLength}</small>
              </p>
            </div>
          </div>
        }
      </>
    )
  }
}

ImageGallery.propTypes = {
  imges: PropTypes.arrayOf({
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
  })
}

export default ImageGallery
