import React, { Component } from "react";
import Terminal from "./Terminal.jsx";
import ToolBar from "./ToolBar.jsx";
import CodeEditor from "./CodeEditor.jsx";
import Password from "./Password";
import * as io from "../../node_modules/socket.io-client/dist/socket.io.js";

let socket;
import "./css/codeeditor.css"

class Bin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            terminalText: "",
            webWorker: null,
            socket: null,
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateTerminal= this.updateTerminal.bind(this);
        this.setSocket = this.setSocket.bind(this);
        this.passwordCheck = this.passwordCheck.bind(this);
        this.handleGet = this.handleGet.bind(this)
    }

   handleChange(e) {
        this.state.socket.emit('updatedCode', e.target.value);
        this.setState({socket: this.state.socket, terminalText: this.state.terminalText, webWorker: this.state.webWorker, code: e.target.value});
    }

    handleTab(e) {
        if(e.keyCode === 9) {
            e.preventDefault();
            e.target.value += "   ";
        }
    }

   handleClick(event) {
       let worker = new Worker('/webworker/' + window.location.href.split('/')[window.location.href.split('/').length - 1]);
       this.setState({socket: this.state.socket, terminalText: this.state.terminalText, code: this.state.code, webWorker: worker});
   }

   updateCode(updateCode) {
    this.setState({socket: this.state.socket, terminalText: this.state.terminalText, webWorker: this.state.webWorker, code: updateCode});
   }

   updateTerminal(terminalText) {
    this.setState({socket: this.state.socket, terminalText: terminalText, code: this.state.code, webWorker: this.state.webWorker});
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

    killWorker () {
        this.state.webWorker.terminate();
        this.setState({socket: this.state.socket, terminalText: this.state.terminalText, code: this.state.code, webWorker: null});
    }

    componentDidMount () {
        socket = io.connect('http://localhost:3000/bin/' + window.location.href.split('/')[window.location.href.split('/').length - 1]);
        this.setSocket(socket);
    }
    passwordCheck() {
        fetch('http://localhost:3000/bin/:name')
        .then((res =>{
            res.json()
        } ))
        .then(res => {
            this.setState({ password: res})
        })
        .catch(err => console.log('Error grabbing bins ', err))
    }
    handleGet(e){
        this.setState({password: e.target.value})
    }
    
    render () {
        if(this.state.webWorker !== null){
            this.state.webWorker.onmessage = (event) => {
                socket.emit('updatedTerminal',  event.data);
                this.updateTerminal(this.state.terminalText + event.data);
            }

            this.state.webWorker.onerror = (event) => {
                socket.emit('updatedTerminal',  event.message);
                this.updateTerminal(this.state.terminalText + event.message + ' \n');
            }
        }

        return (
            <div>
                <div class="code">
                    <CodeEditor onChange={this.handleChange} code={this.state.code} handleTab={this.handleTab}/>
                    <Terminal terminalText={this.state.terminalText} />
                </div>
                <ToolBar onClick={this.handleClick} killWorker={this.killWorker} code={this.state.code} />
                <Password passwordCheck={this.passwordCheck} password={this.handleGet}/>
            </div>
        )
    }
}
export default Bin;