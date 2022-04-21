import React, { useState } from "react";

const Login = () => {
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const[msnError, setMsnError] = useState("")

    const users = [{email: "santiago", password: "alulema"}
                    ,{email:"pablo", password:"123456"}]

    const validateUser =() =>{
        const user = users.find(x => x.email === email && x.password === password);
        if (user === undefined){
            setMsnError("Usuario o password invalido")
        } else{
            setMsnError(`Usuario ${user.email} encontrado`)
        }
    }
  return (
    <div className="container">
        <h3>LOGIN</h3>
        <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="email">@</span>
            <input type="email" 
                   className="form-control" 
                   placeholder="email" 
                   aria-label="email" 
                   onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-group flex-nowrap">
            <span className="input-group-text" 
                    id="password">Ps</span>
            <br></br>
            <input type="password" 
                    className="form-control" 
                    placeholder="password" 
                    aria-label="password"
                    onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div  className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary btn-lg" onClick={validateUser}>Primary</button>
        </div>
        <div className="alert alert-warning mt-3" role="alert">
            {msnError}
        </div>
    </div>
  )
}

export default Login