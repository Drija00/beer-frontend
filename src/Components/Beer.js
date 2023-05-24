import React from 'react'
import {deleteBeerById} from "../Services/AxiosService";

const Beer = ({user,beers,navigate,setCount,count,setCartData,cartData,loadBears}) => {

const openBeerPage = (beerId) =>{
    navigate(`/${beerId}`);
}

const name = (beer) =>{
    return beer.slice(0,-1);
}

const lastLetter = (beer) =>{
    return beer.charAt(beer.length - 1);
}

const addBeerToCart= (beer)=>{
const isBeerInCart = cartData.find(el=>el.id===beer.id);
let newBeers;
if (isBeerInCart){
        newBeers = cartData.map(el=>{
        if(el.id===beer.id){
            return {...el,qt:el.qt+1,totalPrice:(el.price*(el.qt+1)).toFixed(1),buttonLabel:"Product added"};
        }else{
            return el;
        }
        })
    }else{
        newBeers = [...cartData,beer];
    }
    setCartData(newBeers);
    setCount(count+1);
    }

    const deleteBeer= (beer)=>{
    deleteBeerById(beer.id)
        .then(res => loadBears());
}

return (
    beers.map(beer => 
    <div className='beer-card' key={beer.id}>
        <div className='beer-img-box'>
        <img src={beer.imageUrl} alt="beers" className='beer-img' onClick={()=>openBeerPage(beer.id)}/>
        </div>
        <div className='beer-details'>
        <h1 className='beer-name'>{name(beer.name)}<span className='last-letter'>{lastLetter(beer.name)}</span></h1>
        <p className='beer-tagline'>{beer.tagline}</p>
        <p><span className='beer-card-price'>$</span><label className='beer-card-price'>{beer.price}</label></p>
        </div>
        <div className='button-box'>
        <button className='add-to-cart-btn' onClick={() => {addBeerToCart(beer)}}>Add to cart</button>
        {user.role == 'ADMIN' ? <button className='add-to-cart-btn' onClick={() => {deleteBeer(beer)}}>Delete</button> : null}
        </div>
    </div>
    )
)
}
export default Beer