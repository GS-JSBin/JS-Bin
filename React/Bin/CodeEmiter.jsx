import React from "react";
// let delay = waitUntilCall(1000, (props) => {
//     props.socket.emit('updatedCode', props.code);
// });

function CodeEmiter (props) {
    if(!!props.socket && props.code.length !== 0) {
        // console.log(props)
        // delay(props);
        props.socket.emit('updatedCode', props.code);
    }
    return (
        <div style={{hidden: true}}></div>
    )
}

// function waitUntilCall(time, callback) {
//     let run = false;

//     function inner(props) {
//         if(!run) {
//             callback(props);
//             setTimeout(() => run = true, time);
//             run = true;
//         }
//     }

//     return inner;
// }

export default CodeEmiter;