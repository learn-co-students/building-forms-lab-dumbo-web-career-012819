import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {

  	const allBands = this.props.bands.map(band => {
  	  return <li>{band}</li>
  	})

    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {allBands}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
