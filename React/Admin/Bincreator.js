import React, { Component } from 'react';
import Activebins from './Activebins.js';

class Bincreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      binName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.createBin = this.createBin.bind(this);
  }

  handleChange(e) {
    // update state with the value user has placed in. 
    this.setState({ binName: e.target.value })
  }

  createBin() {
    // do post call here to store bin name in the database. 
    // get call will be in binList, in the component did mount to display bins in binlist. 
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.binName} />
        <button onClick={() => this.createBin()}>Create</button>
      </div>
    )
  }
}

export default Bincreator;