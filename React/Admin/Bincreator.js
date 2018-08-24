import React, { Component } from 'react';

const Bincreator = props => {
  return (
    <div>
      <input type="text" onChange={(e) => props.handleChange(e)} value={props.binName} />
      <button onClick={() => props.createBin()}>Create</button>
    </div>
  )
}

export default Bincreator;