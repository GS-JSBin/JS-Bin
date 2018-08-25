import React from "react";

const ToolBar = (props) => {
    return(
        <div class="buttons">
            <button class="button" onClick={props.onChange} value={props.value}>Run Code</button>
            <button class="button" >Kill</button>
        </div>
    )
}
export default ToolBar;