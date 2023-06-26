import React, {useContext} from 'react'
import "../Styles/TransactionPage.css"
import Context from '../Components/Context';
import { useEffect } from 'react'
import { useState } from 'react';
import {createReceipt} from "../Services/AxiosService";
import { useNavigate } from 'react-router';

const TransactionPage = ({cartData,subTotal}) => {
    const context = useContext(Context);
    let setCartData = context.setCartData;
    const user = context.user;
    const navigate = useNavigate();
    let done = false;

    const [loading, setLoading] = useState(false);

    const beerIDs = cartData.map((beer)=>{ return beer.id});
    console.log(beerIDs.length + " id piva");

    //{ id: res.data.id, firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, role: res.data.role };

    const items = cartData.map((beer)=> {
        return {beerID: beer.id, quantity: beer.qt}
    });

    console.log(items[2].quantity);

    items.map((beer)=> {
        console.log("beerID:"+ beer.id+", quantity:"+ beer.qt);
    });

    const receipt = {
        "userID": user.id,
        "totalPrice": subTotal,
        "items": items
}

    const addReceipt = async () => {
    try {
        console.log(user.id);
        // const res = await createReceipt(user, subTotal, items);
        const res = await createReceipt(receipt);
        const idReceipt = res.data.id;
        console.log(idReceipt);
        done = true;
        return idReceipt;
    } catch (error) {
        // Handle the error appropriately
        console.error("GRESKA "+error);
    }
};
    useEffect(() => {
    const fetchData = async () => {
        let idReceipt = await addReceipt();
        cartData.map(el => {
            console.log("receiptID: " + idReceipt + " beerID: " + el.id + " qt: " + el.qt);
        });
        console.log(done);
    };

    fetchData();
    //setCartData([]);
}, []);
    

    useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    },2000)
    },[])

    const openHomePage = () =>{
    setCartData([]);
    navigate("/home");
}

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
            <button className='pay-btn' onClick={()=>openHomePage()}>Finish</button>
        </div>
        )
    }
    </div>
)
}

export default TransactionPage