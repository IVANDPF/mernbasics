import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState("");

    const users = [{
        userName: "santiago",
        password: "alulema"
    }, {
        userName: "pablo",
        password: "123456"
    }]

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const user = users.find(x => x.userName === userName && x.password === password);

        if (user === undefined) {
            setMsgError("Usuario o password invalido");
        } else {
            setMsgError(`Usuario ${user.userName} encontrado.`);
        }

        setUserName("");
        setPassword("");
    }

    return (
        <form className='container-fluid'>
            {msgError !== null && msgError.length > 0 && (
                <div className='alert alert-warning mt-3'>{msgError}</div>
            )}

            <div className='row mb-4'>
                <label htmlFor='userName' className='form-label'>Nombre de usuario:</label>
                <input type='text'
                    className='form-control'
                    name='userName'
                    id='userName'
                    placeholder='Ingrese el nombre de usuario.'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <div className='row mb-4'>
                <label htmlFor='pass' className='form-label'>Contraseña:</label>
                <input type='password'
                    className='form-control'
                    name='pass'
                    id='pass'
                    placeholder='Ingrese la contraseña.'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='row mb-4'>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Ingresar</button>
            </div>
        </form>
    );
}

export default Login;