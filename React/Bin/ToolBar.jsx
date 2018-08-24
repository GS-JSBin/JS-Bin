import React from "react";

const ToolBar = (props) => {
    return(
        <div>
            <button onClick={props.onChange} value={props.value}>Run Code</button>
            <button>Kill</button>
        </div>
    )
}
export default ToolBar;