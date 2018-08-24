import React from "react";

const Terminal = (props) =>{
   return (
        <div>
            <textarea class ="terminal" value={props.terminalText}/>
        </div>
    );
}

export default Terminal;
