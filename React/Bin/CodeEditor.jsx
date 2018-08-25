import React, {Component} from "react";
import Parser from "../syntaxHightlight/Parser";
import TextareaDecorator from "../syntaxHightlight/TextareaDecorator";

let ldt;

class CodeEditor extends React.Component {
    render () {
        return(
        <div>
        <h3>JS-Bin</h3>
            <div class="highlightDiv">
            <textarea id='codeArea' class ="ldt" onChange={this.props.onChange} value={this.props.code}/>
            </div>
        </div>);
    }

    componentDidMount () {
        var parser = new Parser(
            { 	whitespace: /\s+/,
				comment: /\/\*([^\*]|\*[^\/])*(\*\/?)?|(\/\/|#)[^\r\n]*/,
				string: /"(\\.|[^"\r\n])*"?|'(\\.|[^'\r\n])*'?/,
				number: /0x[\dA-Fa-f]+|-?(\d+\.?\d*|\.\d+)/,
				keyword: /(console|and|as|case|catch|class|const|def|delete|die|do|else|elseif|esac|exit|extends|false|fi|finally|for|foreach|function|global|if|new|null|or|private|protected|public|published|resource|return|self|static|struct|switch|then|this|throw|true|try|var|void|while|xor|let|const)(?!\w|=)/,
				variable: /[\$\%\@](\->|\w)+(?!\w)|\${\w*}?/,
				define: /[$A-Z_a-z0-9]+/,
				op: /[\+\-\*\/=<>!]=?|[\(\)\{\}\[\]\.\|]/,
				other: /\S+/ });
          // get the textarea with $ (document.getElementById)
          // pass the textarea element and parser to LDT
        ldt = new TextareaDecorator(document.getElementById('codeArea'), parser);
    }

    componentDidUpdate () {
        ldt.update();
    }
}

export default CodeEditor;