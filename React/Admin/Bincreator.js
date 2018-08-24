import React, { Component } from 'react';

const Bincreator = props => {
  // may not need binName for the button because the value is already being captured in state by the input bar. 
  return (
    <div>
      <input type="text" onChange={(e) => props.handleChange(e)} value={props.binName} />
      <button binName={props.binName} onClick={(e) => props.createBin(e)}>Create</button>
    </div>
  )
}

export default Bincreator;