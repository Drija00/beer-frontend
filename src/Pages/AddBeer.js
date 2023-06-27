import React, {useContext, useEffect, useState} from 'react'
import "../Styles/Login.css"
import Context from '../Components/Context';
import { useNavigate } from 'react-router';
import {addBeer} from "../Services/AxiosService";

const AddBeer = () => {

    const context = useContext(Context);
    const user = context.user;
    const setUser = context.setUser;
    const navigate = useNavigate();

    const[name,setName] = useState("");
    const[price,setPrice] = useState(0);
    const[tagline,setTagline] = useState("");
    const[description,setDescription] = useState("");
    const[image_url,setImageUrl] = useState("");

    useEffect(()=>{

    },[]);

    const addNewBeer = ()=>{
        const beer = {
            "name": name,
            "tagline": tagline,
            "description": description,
            "imageUrl": image_url,
            "price": price
        }
        addBeer(beer).then(res => {
            navigate("/home");
        }).catch(res => {
            //doLogout();
        });
    }


    return (
        <div>
            <div className='login-wrapper'>
                    <div className='login-container'>
                        <h1 className='login-heading'>AddBeer</h1>

                        <input type="text" placeholder="Name..." id="name" onChange={(event)=>setName(event.target.value)}></input>
                        <input type="text" placeholder="Price..." id="price" onChange={(event)=>setPrice(parseFloat(event.target.value))}></input>
                        <input type="text" placeholder="Tagline..." id="tagline" onChange={(event)=>setTagline(event.target.value)}></input>
                        <input type="text" placeholder="Description..." id="description" onChange={(event)=>setDescription(event.target.value)}></input>
                        <input type="text" placeholder="Image url..." id="imageUrl" onChange={(event)=>setImageUrl(event.target.value)}></input>

                        <button className='login-btn' onClick={()=>addNewBeer()}>Add Beer</button>
                    </div>
            </div>
        </div>
    )
}

export default AddBeer