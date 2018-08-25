import React, { Component } from 'react';

const Activebins = props => {
  return (
    <div className="bins">
      <span>{props.name}</span>
      <br/>
      <button id={props.name} onClick={(e) => props.deleteBin(e)}>Delete</button>
      <button id={props.name} onClick={(e) => props.redirectToBinPage(e)}>Open</button>
    </div>
  )
}

export default Activebins;
