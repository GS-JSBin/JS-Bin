import React, { Component } from 'react';

const Bincreator = props => {
  return (
    <div class="wrapper">
      <label>Bin Name</label>
      <input placeholder="Enter Bin Name Here" type="text" onChange={(e) => props.handleChange(e)} value={props.binName} />
      <button id="createBin" onClick={(e) => props.createBin(e)}>Create Bin</button>
      <br/>
      <br/>
      <br/>
      <label>Password</label>
      <input type="text" onChange={(e) => props.typePassword(e)} value={props.password} />
      <button id='filler' disabled='true'></button>
    </div>
  )
}

export default Bincreator;