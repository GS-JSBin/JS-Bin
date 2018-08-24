import React, { Component } from 'react';

const Activebins = props => {
  return (
    <div>
      <span>{props.name}</span>
      <button id={props.name} onClick={props.deleteBin(props.elementId)}>Delete</button>
      <button id={props.name} onClick={(e) => props.redirectToBinPage(e)}>Open</button>
    </div>
  )
}

export default Activebins;
