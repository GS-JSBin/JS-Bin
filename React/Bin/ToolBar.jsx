import React from "react";

const ToolBar = (props) => {
    return(
        <div class="buttons">
            <button class="button" onClick={props.onClick} value={props.value}>Run Code</button>
            <button class="button" onClick={props.killWorker}>Kill</button>
        </div>
    )
}
export default ToolBar;