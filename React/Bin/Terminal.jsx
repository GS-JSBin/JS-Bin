import React from "react";

const Terminal = (props) =>{
   return (
        <div>
         <h3>Terminal</h3>
            <textarea class ="terminal" value={props.terminalText}/>
        </div>
    );
}

export default Terminal;
