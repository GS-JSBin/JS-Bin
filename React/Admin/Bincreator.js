import React, { Component } from 'react';

class Bincreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binName: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // update state with the value user has placed in. 
    this.setState({ binName: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)}>{this.state.binName}</input> 
        <button>Create</button>
      </div>
    )
  }
}

export default Bincreator;