import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'

class LovSearchGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: this.props.searchTerm,
      selectedValues: {},
      searchData: []
    }

    autobind(this)
  }

  componentDidMount () {
    if (this.props.handleFind) {
      this.setState({
        searchData: this.props.handleFind()
      })
    }
  }

  handleOk () {
    console.log('LovSearchGrid handleOk...')
    this.props.handleOk(this.state.selectedValues)
  }

  handleSearchTermChange (event) {
    console.log('LovSearchGrid handleSearchTermChange', event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleListValueSelection (rowObj) {
    console.log('LovSearchGrid handleListValueSelection...', rowObj.id)
    let allSelectedValues = Object.assign({}, this.state.selectedValues)

    if (allSelectedValues[rowObj.id]) {
      delete allSelectedValues[rowObj.id]
    } else {
      allSelectedValues[rowObj.id] = rowObj
    }

    this.setState({
      selectedValues: allSelectedValues
    })
  }

  handleFind () {
    console.log('LovSearchGrid handleFind...', this.state.searchTerm)
    this.props.handleFind()
  }

  handleCancle () {
    console.log('LovSearchGrid handleCancle...')
    this.props.handleCancle()
  }

  renderSearchGrid () {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Description</th>
        </tr>
        {
          this.state.searchData && this.state.searchData.map((row) => {
            let selectedRow = this.state.selectedValues[row.id] || null
            let rowColor = selectedRow === null ? 'non-selected-lov' : 'selected-lov'
            return (
              <tr key={row.id} className={rowColor} onClick={() => { this.handleListValueSelection(row) }}>
                <td>{row.name}</td>
                <td>{row.class}</td>
                <td>{row.desc}</td>
              </tr>
            )
          })
        }
      </table>
    )
  }

  render () {

    return (
      <div className='modal-content-body'>
      
        <div className='lov-search-container'>
          <div className='lov-search-box'>
            <input style={{width: '100%'}} type='text' name='searchTerm' onBlur={this.handleSearchTermChange} />
          </div>

          <div className='lov-search-results'>
            {this.renderSearchGrid()}
          </div>
        </div>

        <div className='modal-footer'>
          <button onClick={this.handleFind}>Find</button>
          <button onClick={this.handleOk}>Ok</button>
          <button onClick={this.handleCancle}>Cancle</button>
        </div>

      </div>
    )
  }
}

LovSearchGrid.propTypes = {
  item: PropTypes.object.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancle: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

LovSearchGrid.defaultProps = {
  item: { },
  searchTerm: ''
}

export default LovSearchGrid
