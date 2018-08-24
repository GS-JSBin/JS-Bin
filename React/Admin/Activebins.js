import React, { Component } from 'react';

const Activebins = props => {
  return (
    <div>
      <span>{props.binName}</span>
      <button id={props.binName} onClick={(e) => props.deleteBin(e)}>Delete</button>
      <button id={props.binName} onClick={(e) => props.redirectToBinPage(e)}>Open</button>
    </div>
  )
}

export default Activebins;
