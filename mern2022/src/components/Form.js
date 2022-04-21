import { useState } from 'react';
const Form = (props) => {
    const {state, setState} = props;
    const [fnTitle, setFnTitle] =  useState("");
    const [lnTitle, setLnTitle] =  useState("");
    const [eTitle, setETitle] =  useState("");
    const [tTitle, setTTitle] = useState("");
    const [pTitle, setPTitle] =  useState("");
    const [cPTitle, setCpTitle] =  useState("");

    const handleFirstName = (e)=>{
        setState({...state, 'firstName': e.target.value});
        if (state.firstName.length == 1){
            setFnTitle('First name must be different of null!');
        }else{
            setFnTitle("");
        }
    }

    const handleLastName = (e)=>{
        setState({...state, 'lastName': e.target.value});
        if (state.lastName.length == 1){
            setLnTitle('Last name must be different of null!');
        }else{
            setLnTitle("");
        }
    }

    const handleEmail = (e)=>{
        setState({...state, 'email': e.target.value});
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
            setETitle("");
        }else{
            setETitle('Incorrect email format!');
        }
    }

    const handleTelephone = (e) => {
        setState({...state, 'telephone': e.target.value});
        if (state.telephone.length == 1){
            setTTitle('Telephone must be different of null!');
        }else{
            setTTitle("");
        }
    }

    const handlePassword = (e)=>{
        setState({...state, 'password': e.target.value});
        if (state.password.length < 7){
            setPTitle('Password must have at least 8 characters!');
        }else{
            setPTitle("");
        }
    }
    const handleConfirmPassword = (e)=>{
        setState({...state, 'confirmPassword': e.target.value});
        console.log(e.target.value, state);
        if (state.password !== state.confirmPassword){
            setCpTitle('Password must match!');
        }else{
            setCpTitle("");
        }
    }  

    return(
        <form>
            <div className="input">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" size={30} onChange={handleFirstName}/>
                {
                    <p style={{color:'red'}}> {fnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" size={30} onChange={handleLastName}/>
                {
                    <p style={{color:'red'}}> {lnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email"  size={30} onChange={handleEmail}/>
                {
                    <p style={{color:'red'}}> {eTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="telephone">Telephone: </label>
                <input type="text" name="telephone"  size={30} onChange={handleTelephone}/>
                {
                    <p style={{color:'red'}}> {tTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" size={30} onChange={handlePassword}/>
                {
                    <p style={{color:'red'}}> {pTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="confirmPassword">Confirm password: </label>
                <input type="password" name="confirmPassword" size={30} onChange={handleConfirmPassword}/>
                {
                    <p style={{color:'red'}}> {cPTitle}</p>
                }
            </div>
            <div className='input'>
                <input type="submit" value="Register"></input>
            </div>
        </form>
    );
}

export default Form;