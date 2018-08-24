import React from "react";

const CodeEditor = (props) => {
    return (
    <div>
        <textarea class ="textarea" onChange={props.onChange} value={props.code}/>
    </div>);
}

export default CodeEditor;