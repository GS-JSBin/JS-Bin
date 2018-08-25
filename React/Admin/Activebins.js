import React, { Component } from 'react';

const Activebins = props => {
  console.log('activebins', props)
  let displayPassword;
  if (props.password !== '' || props.password !== undefined) {
    displayPassword = <button id="displayPassword" disabled="true">{props.password}</button>
  } 

  console.log('checking display', displayPassword)
  return (
    <div className="bins">
      <span>{props.name}</span>
      <br/>
      <button id={props.name} onClick={(e) => props.deleteBin(e)}>Delete</button>
      <button id={props.name} onClick={(e) => props.redirectToBinPage(e)}>Open</button>
      {displayPassword}
    </div>
  )
}

export default Activebins;
