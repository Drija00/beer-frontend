import React, {useContext} from 'react'
import "../Styles/TransactionPage.css"
import Context from '../Components/Context';
import { useEffect } from 'react'
import { useState } from 'react';
import {createReceipt} from "../Services/AxiosService";

const TransactionPage = ({cartData,subTotal}) => {
    const context = useContext(Context);
    const user = context.user;
    console.log(user.email)

    const [loading, setLoading] = useState(false);

    const beerIds = cartData.map(beer=>beer.id);
    console.log(beerIds + " id piva");

    const addReceipt = ()=>{
        console.log(user.id);
        createReceipt(user,subTotal);
    }
    useEffect(()=>{
        addReceipt();
    },[]);
    

    useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    },2000)
    },[])

    


return (
    <div className='transaction-page-wrapper'>
    {loading?(
        <div className='loader-wrapper'>
            {/* <MoonLoader  loading={loading} size={80} color="#e6a10e"/> */}
        </div>
        )
        :(
        <div className='transaction-page-container'>
            {cartData.map(beer=>
            <div>
                <label className='transaction-beer-price' key={beer.id}>Beer name: {beer.name}</label>
                <label className='transaction-beer-price' key={beer.id}>Price: <span>$</span>{beer.price}</label>
                <label className='transaction-beer-price' key={beer.id}>Quantity: {beer.qt}</label>
                <br></br>
            </div>
            )}
            <hr className='hr-tp'></hr>
            <p className='subtotal-transaction'>Subtotal: <span>$</span>{subTotal}</p>
        </div>
        )
    }
    </div>
)
}

export default TransactionPage