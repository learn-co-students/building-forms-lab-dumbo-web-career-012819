// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
  	name: ''
  }

  handleChange = event => {
	event.preventDefault()
	this.setState({
	  name: event.target.value
	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} placeholder="band name" type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
