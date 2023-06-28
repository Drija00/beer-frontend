import React, {useContext, useEffect, useState} from 'react'
import "../Styles/Login.css"
import Context from '../Components/Context';
import { useNavigate } from 'react-router';
import {loginUser} from "../Services/AxiosService";

const Login = () => {

    const context = useContext(Context);
    const user = context.user;
    const setUser = context.setUser;
    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState("");

    useEffect(()=>{

    },[]);

    const doLogin = ()=>{
        // API call for login
        loginUser(username, password).then(res => {
            const user = { id: res.data.id, firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, role: res.data.role };
            console.log(user+" IDIOT");
            localStorage.setItem("user",user);
            setUser(user);
            console.log(user+" RAARAAA");
            setError("");
            navigate("/home");
        }).catch(res => {
            setError("Please try again!")
            doLogout();
        });
    }

    // "id": 1102,
    // "firstname": "Pera",
    // "lastname": "Peric",
    // "email": "pera@gmail.com",
    // "role": "ADMIN"

    const doLogout = () =>{
        // todo add API call for logout
        localStorage.setItem("user","");
        setUser("");
        navigate("/");
    }

    const register = () =>{
        navigate("/register");
    }

    return (
        <div>
            <div >
                {user ?
                    <div className='form-logout'>
                        <h1 className='heading'>Logout</h1>
                        <button className='logout-btn' onClick={()=>doLogout()}>Logout</button>
                    </div>
                :
                <div className='form'>
                    <div className='login-container'>
                        <h1 className = "heading">Login</h1>
                        <p className="error">{error}</p>
                        <button className='login-btn' onClick={()=>register()}>Register</button>
                    </div>
                    <div className='login-container'>
                        <input type="text" class = "input" placeholder="Username..." id="email" onChange={(event)=>setUsername(event.target.value)}></input>
                    </div>
                    <div className='login-container'>
                        <input type="password" class = "input" placeholder="Password..." id="password" onChange={(event)=>setPassword(event.target.value)}></input>
                    </div>
                    <div className='login-container'>
                        <button className='login-btn' onClick={()=>doLogin()}>Login</button>
                    </div>
                    </div>}
            </div>
        </div>
    )
}

export default Login