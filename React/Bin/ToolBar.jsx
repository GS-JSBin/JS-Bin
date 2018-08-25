import React from "react";

const ToolBar = (props) => {
    return(
        <div>
            <button onClick={props.onClick}>Run Code</button>
            <button>Kill</button>
        </div>
    )
}
export default ToolBar;