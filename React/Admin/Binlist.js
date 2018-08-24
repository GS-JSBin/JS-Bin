import React, { Component } from 'react';
import ActiveBins from './Activebins.js';

const Binlist = props => {
    let displayBins;
    if (props.activeBins.length !== 0) {
      displayBins = props.activeBin.map((bin, i) => (
        <ActiveBins key={i} binName={props.binName} deleteBin={this.deleteBin}/>
      ))
    }

    return (
      <div>
        {displayBins}
      </div>
    )
}

export default Binlist;