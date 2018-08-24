import React, { Component } from 'react';
import ActiveBins from './Activebins.js';

class Binlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBins: [],
    }

    this.deleteBin = this.deleteBin.bind(this);
  }

  deleteBin(e) {
    // create a copy of the array to pass into set state, don't mutate directly. 
    const activeBins = this.state.activeBins.slice(); 
    // splice the active Bins array
    activeBins.splice(e.target.key, 1);
    // set state
    this.setState({ activeBins });
    // remove from the database 

  }

  render() {
    let displayBins;
    if (this.state.activeBins.length !== 0) {
      displayBins = this.state.activeBin.map((bin, i) => (
        <ActiveBins key={i} binName={this.state.activeBins} deleteBin={this.deleteBin}/>
      ))
    }

    return (
      <div>
        {displayBins}
      </div>
    )
  }

}

export default Binlist;