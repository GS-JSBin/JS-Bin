import React, { Component } from "react";
import Terminal from "./Terminal.jsx";
import ToolBar from "./ToolBar.jsx";
import CodeEditor from "./CodeEditor.jsx";
import "./css/codeeditor.css"

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
           <div class="code">
            <CodeEditor onChange={this.handleChange} code={this.state.code} />
            <Terminal terminalText={this.state.terminalText} />
            </div>
            <ToolBar onChange={this.handleChange} code={this.state.code} />
        </div>
    )
}
}
export default Bin;