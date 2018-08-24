import React, { Component } from 'react';

const Bincreator = props => {
  return (
    <div>
      <input type="text" onChange={(e) => props.handleChange(e)} value={props.binName} />
      <button binName={props.binName} onClick={(e) => props.createBin(e)}>Create</button>
    </div>
  )
}

export default Bincreator;