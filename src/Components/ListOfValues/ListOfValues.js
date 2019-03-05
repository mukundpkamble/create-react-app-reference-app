import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'

import LovModal from './LovModal'
import LovSearchGrid from './LovSearchGrid'


class ListOfValues extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedValFromLov: null
    }

    autobind(this)
  }

  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleOk (selectedValues) {
    console.log('ListOfValues handleOk..', selectedValues)
    this.setState({
      selectedValFromLov: selectedValues
    })
    this.toggleModal()
  }

  handleFind () {
    console.log('ListOfValues handleFind...', this.state.searchTerm)
    //this.props.handleFind() //coming from reducer for find network calls

    return (
      [
        {
          id: 1,
          name: 'Carve Out - Invoice',
          desc: 'Carve Out - Invoice',
          class: 'Invoice'
        },
        {
          id: 2,
          name: 'Carve Out - MAINT',
          desc: 'Carve Out - Invoice for Maintenence',
          class: 'Invoice'
        },
        {
          id: 3,
          name: 'Carve Out - MAINT-CM',
          desc: 'Carve Out - Invoice',
          class: 'Credit Memo'
        },
        {
          id: 4,
          name: 'Carve Out - PS',
          desc: 'Carve Out - Prof. Service',
          class: 'Credit Memo'
        },
        {
          id: 5,
          name: 'Carve Out - Invoice',
          desc: 'Carve Out - Invoice',
          class: 'Invoice'
        },
        {
          id: 6,
          name: 'Carve Out - MAINT',
          desc: 'Carve Out - Invoice for Maintenence',
          class: 'Invoice'
        },
        {
          id: 7,
          name: 'Carve Out - MAINT-CM',
          desc: 'Carve Out - Invoice',
          class: 'Credit Memo'
        },
        {
          id: 8,
          name: 'Carve Out - PS',
          desc: 'Carve Out - Prof. Service',
          class: 'Credit Memo'
        },
        {
          id: 9,
          name: 'Carve Out - Invoice',
          desc: 'Carve Out - Invoice',
          class: 'Invoice'
        },
        {
          id: 10,
          name: 'Carve Out - MAINT',
          desc: 'Carve Out - Invoice for Maintenence',
          class: 'Invoice'
        },
        {
          id: 11,
          name: 'Carve Out - MAINT-CM',
          desc: 'Carve Out - Invoice',
          class: 'Credit Memo'
        },
        {
          id: 12,
          name: 'Carve Out - PS',
          desc: 'Carve Out - Prof. Service',
          class: 'Credit Memo'
        }
      ]
    )
  }

  handleCancle (selectedValue) {
    this.toggleModal()
  }

  render () {
    return (
      <div>
        <b>List Of Values Control:</b>
        <div className='lov-input' onFocus={this.toggleModal}>
            <input style={{width: '100%'}} type='text' name='lovInput' value={this.state.selectedValFromLov ? Object.keys(this.state.selectedValFromLov).map((objId) => {return (this.state.selectedValFromLov[objId]).name}).join(',') : 'Please Select'} />
        </div>
        <LovModal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          item={{ }}
          title={'Transaction Types'}
          style={{
            width: '600px',
            height: '500px'
          }}>
          <LovSearchGrid
            handleCancle={this.handleCancle}
            handleFind={this.handleFind}
            handleOk={this.handleOk}
            item={{ }} />
        </LovModal>
      </div>
    )
  }
}

ListOfValues.propTypes = {
  itam: PropTypes.object.isRequired
}

ListOfValues.defaultProps = {
  item: { }
}

export default ListOfValues
