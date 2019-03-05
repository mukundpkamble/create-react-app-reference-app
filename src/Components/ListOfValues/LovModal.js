import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'
import './lov-css.css'

class LovModal extends React.Component {
  constructor (props) {
    super(props)

    autobind(this)
  }

  render () {
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      display: this.props.show ? 'block' : 'none',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)'
    }

    const modalContainer = {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px'
    }

    const modalContentContainer = {
      backgroundColor: '#fff',
      width: this.props.style.width,
      height: this.props.style.height
    }

    return (
      <div id='lov-modal-id' className='backdrop' style={backdropStyle}>
        <div className='lov-modal' style={modalContainer}>

          <div style={modalContentContainer}>

            <div className='modal-header'>
              <span style={{fontSize: '20px', width: '97%', float: 'left', textAlign: 'left'}}>{this.props.title}</span>
              <span style={{fontSize: '20px', width: '3%', float: 'right', textAlign: 'left', cursor: 'pointer'}} onClick={this.props.onClose}>&#10006;</span>
            </div>

            {this.props.children}

          </div>
        </div>
      </div>
    )
  }
}

LovModal.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

LovModal.defaultProps = {
  item: { },
  title: 'Modal Title',
  style: {
    width: '200px',
    height: '300px'
  },
  show: false
}

export default LovModal
