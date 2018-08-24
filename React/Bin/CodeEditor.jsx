import React from "react";

const CodeEditor = (props) =>{
    <div>
        <textarea class ="textarea" handleChange={props.handleChange} value={props.code}/>
    </div>
}