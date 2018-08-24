import React, { Component } from 'react';
import Activebins from './Activebins.js';

class Bincreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.props.binName} />
        <button onClick={() => this.createBin()}>Create</button>
      </div>
    )
  }
}

export default Bincreator;