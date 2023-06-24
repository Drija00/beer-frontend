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
            navigate("/home");
        }).catch(res => {
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
        navigate("/login");
    }

    return (
        <div>
            <div className='login-wrapper'>
                {user ?
                    <div className='login-container'>
                        <h1 className='login-heading'>Logout</h1>
                        <button className='logout-btn' onClick={()=>doLogout()}>Logout</button>
                    </div>
                :
                    <div className='login-container'>
                        <h1 className='login-heading'>Login</h1>

                        <input type="text" placeholder="Username..." id="email" onChange={(event)=>setUsername(event.target.value)}></input>
                        <input type="text" placeholder="Password..." id="password" onChange={(event)=>setPassword(event.target.value)}></input>

                        <button className='login-btn' onClick={()=>doLogin()}>Login</button>
                    </div>}
            </div>
        </div>
    )
}

export default Login