import React, { useState } from "react";
import HandleLogin from "./HandleLogin";

function FirstLogin() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();



  const {Handle,message} = HandleLogin(email,pass);

  

  return (
    
    <div className="form">
                <h3>First Login </h3>


    <div className="input-container">
      <label>Username </label>
      <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
    </div>

    <div className="input-container">
      <label>Password </label>
      <input type="password" name="pass" onChange={e => setPass(e.target.value)} required />
    </div>
    <div className="button-container">

    <button style={{backgroundColor:'green'}} onClick={Handle}>Login</button>

    </div>
    <div>{message}</div>

</div>
  );
}

export default FirstLogin;