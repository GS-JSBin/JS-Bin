import React, { Component } from 'react';
import ActiveBins from './Activebins.js';

const Binlist = props => {
    let displayBins;
    if (props.bins.length !== 0) {
      displayBins = props.bins.map((bin, i) => (
        <ActiveBins 
          name={bin.binName}
          key={i} 
          deleteBin={props.deleteBin}
          redirectToBinPage={props.redirectToBinPage} />
      ))
    }

    return (
      <div>
        {displayBins}
      </div>
    )
}

export default Binlist;