import React from "react";

const CodeEditor = (props) => {
    console.log(props.code)
    return (
        <div>
            <textarea class ="textarea" onChange={props.onChange} value={props.code}/>
        </div>
    );
}

export default CodeEditor;