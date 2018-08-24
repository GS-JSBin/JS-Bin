import React, { Component } from "react";
import Terminal from "./Terminal.jsx";
import ToolBar from "./ToolBar.jsx";
import CodeEditor from "./CodeEditor.jsx";

class Bin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            terminalText: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(e) {
       this.setState({terminalText: this.state.terminalText, code: e.target.value});
   }

render () {
    return (
        <div>
            <h1>Hello From Bin</h1>
            <CodeEditor onChange={this.handleChange} code={this.state.code} />
            <Terminal />
        </div>
    )
}
}

export default Bin;