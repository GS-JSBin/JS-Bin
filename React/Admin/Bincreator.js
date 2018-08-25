import React, { Component } from 'react';

const Bincreator = props => {
  return (
    <div class="wrapper">
      <input placeholder="Enter Bin Name Here" type="text" onChange={(e) => props.handleChange(e)} value={props.binName} />
      <button id="createBin" onClick={(e) => props.createBin(e)}>Create</button>
    </div>
  )
}

export default Bincreator;