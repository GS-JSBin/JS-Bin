import React, { Component } from 'react';
import ActiveBins from './Activebins.js';

const Binlist = props => {

    let displayBins;
    if (!Object.keys(props.bins).length == 0) {
      const keysOfBinList = Object.keys(props.bins);
      displayBins = keysOfBinList.map((name, i) => (
        <ActiveBins 
          name={name}
          key={i} 
          password={name.password}
          elementId={i}
          deleteBin={props.deleteBin}
          redirectToBinPage={props.redirectToBinPage} />
      ))
    }

    return (
      <div className="display_bins">
        {displayBins}
      </div>
    )
}

export default Binlist;