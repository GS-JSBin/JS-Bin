import React from "react";

const CodeEditor = (props) => {
    return (
        <div>
        <h3>JS-Bin</h3>
            <textarea class ="textarea" onChange={props.onChange} value={props.code}/>
        </div>
    );
}

export default CodeEditor;