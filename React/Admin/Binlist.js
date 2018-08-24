import React, { Component } from 'react';
import ActiveBins from './Activebins.js';

class Binlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBins: []
    }
  }

  render() {

    const displayBins = this.state.activeBin.map((bin, i) => (
      
    ))

    return (
      <div>
        
      </div>
    )
  }

}

export default Binlist;