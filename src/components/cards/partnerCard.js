import React from 'react'

const PartnerCard = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      partner: this.partner,
      styles: this.styles,
      active: false,
      modalActiveClass: '',
    }
  }

  toggleModal = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
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

  render() {
    const {partner, styles} = this.props

    let validatedImage
    if(!!partner.image) {
      validatedImage = !!partner.image.childImageSharp ? partner.image.childImageSharp.fluid.src : partner.image
    } else {
      validatedImage = '/img/azienda.png'
    }

    return (
      <div>
        <div
          className={`partnerCard ${styles ? styles : ''}`}
          onClick={() => this.toggleModal()}
        >
          <img
            className="image"
            src={`${validatedImage}`}
            alt={partner.altImage}
          />
          <h4 className="text">
            {partner.name}
          </h4>
        </div>
        { this.state.active &&
          <div className={`modal ${this.state.modalActiveClass}`}>
            <div className="modal-background" onClick={() => this.toggleModal()}></div>
            <div className="modal-card">
              <section className="modal-card-body">
                <h3 className="title">{partner.name}</h3>
                <p style={{marginBottom: '1rem'}}>{partner.description}</p>
                <a target="_blank" href={partner.link}>Vai al sito</a>
              </section>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default PartnerCard
