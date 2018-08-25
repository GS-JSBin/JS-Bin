import React from "react";

const Password = (props) =>{
    console.log(props)
   return (
        <div>
         <h3>Password</h3>
         <input type="text" />
         <button class="button" onClick={props.passwordCheck} value={props.Password}>Password</button>
        </div>
    );
}
export default Password;