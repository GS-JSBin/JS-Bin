import React, { Component } from "react";
import Terminal from "./Terminal.jsx";
import ToolBar from "./ToolBar.jsx";
import CodeEditor from "./CodeEditor.jsx";
import * as io from "../../node_modules/socket.io-client/dist/socket.io.js";

let socket;

class Bin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            terminalText: "",
            webWorker: null,
            socket: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateTerminal= this.updateTerminal.bind(this);
        this.setSocket = this.setSocket.bind(this);
    }

   handleChange(e) {
        this.state.socket.emit('updatedCode', e.target.value);
        console.log('EMITING')
        this.setState({socket: this.state.socket, terminalText: this.state.terminalText, webWorker: this.state.webWorker, code: e.target.value});
   }

   handleClick(event) {
       console.log('RUNNING')
       let worker = new Worker('/webworker/' + window.location.href.split('/')[window.location.href.split('/').length - 1]);
       this.setState({socket: this.state.socket, terminalText: this.state.terminalText, code: this.state.code, webWorker: worker});
   }

   updateCode(updateCode) {
    this.setState({socket: this.state.socket, terminalText: this.state.terminalText, webWorker: this.state.webWorker, code: updateCode});
   }

   updateTerminal(terminalText) {
    this.setState({socket: this.state.socket, terminalText: this.state.terminalText + terminalText + '\n', code: this.state.code, webWorker: this.state.webWorker});
   }

   setSocket(socket) {
       this.setState({socket: socket, terminalText: this.state.terminalText, code: this.state.code, webWorker: this.state.webWorker})
       socket.on('terminalUpdate', (terminalText) => {
            this.updateTerminal(terminalText);
        });

        socket.on('codeUpdate', (newCode) => {
            this.updateCode(newCode);
        });
    }

componentDidMount () {
    console.log('connecting to ', 'http://localhost:3000/bin/' + window.location.href.split('/')[window.location.href.split('/').length - 1])
    socket = io.connect('http://localhost:3000/socket.io');
    this.setSocket(socket);
}

render () {

    if(!!this.state.webWorker) {
        this.state.webWorker.onmessage = (event) => {
            socket.emit('updatedTerminal', {bin: window.location.href.split('/')[window.location.href.split('/').length - 1], data: event.data});
            this.updateTerminal(event.data);
        }
    }

    return (
        <div>
            <h1>Hello From Bin</h1>
            <CodeEditor onChange={this.handleChange} code={this.state.code} />
            <Terminal terminalText={this.state.terminalText} webWorker={this.state.webWorker}/>
            <ToolBar onClick={this.handleClick} />
        </div>
    )
}
}
export default Bin;