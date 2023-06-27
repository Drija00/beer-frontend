import React, {useContext, useEffect, useState} from 'react'
import "../Styles/Login.css"
import Context from '../Components/Context';
import { useNavigate } from 'react-router';
import {register} from "../Services/AxiosService";
import {loginUser} from "../Services/AxiosService";

const Register = () => {

    const context = useContext(Context);
    const user = context.user;
    const setUser = context.setUser;
    const navigate = useNavigate();

    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    useEffect(()=>{

    },[]);

    const registerUser = ()=>{
        const newUser = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        }
        register(newUser).then(res => {
            loginUser(email, password).then(res => {
            const user = { id: res.data.id, firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, role: res.data.role };
            console.log(user+" IDIOT");
            localStorage.setItem("user",user);
            setUser(user);
            console.log(user+" RAARAAA");
            navigate("/home");
        }).catch(res => {
            doLogout();
        });
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
        navigate("/");
    }


    return (
        <div>
            <div className='login-wrapper'>
                    <div className='form'>
                        <div>
                        <h1 className = "heading">Register</h1>
                        </div>
                        <div>
                            <input class = "input" type="text" placeholder="Firstname..." id="firstname" onChange={(event)=>setFirstname(event.target.value)}></input>
                        </div>
                        <div>
                            <input class = "input" type="text" placeholder="Lastname..." id="lastname" onChange={(event)=>setLastname(event.target.value)}></input>
                        </div>
                        <div>
                            <input class = "input" type="text" placeholder="Email..." id="email" onChange={(event)=>setEmail(event.target.value)}></input>
                        </div>
                        <div>
                            <input class = "input" type="text" placeholder="Password..." id="password" onChange={(event)=>setPassword(event.target.value)}></input>
                        </div>
                        <div>
                            <button class='login-btn' onClick={()=>registerUser()}>Register</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register