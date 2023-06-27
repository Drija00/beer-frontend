import axios from "axios";

// axios.get("https://api.punkapi.com/v2/beers");

// const baseUrl = "https://api.punkapi.com/v2/beers";
const baseUrl = "http://localhost:8080";

export const getAllBeers = () =>{
    return axios.get(`${baseUrl}/beers`);

}

export const getBeerById = (id) =>{
        return axios.get(`${baseUrl}/beers/${id}`);
}

export const deleteBeerById = (id) =>{
    console.log("MJAAAAUUUUU  " + id);
    return axios.delete(`${baseUrl}/delete/${id}`);
    //return Promise.resolve();
}


export const loginUser = (username, password) =>{
        const params = new URLSearchParams([['email', username],['password', password]]);
        return axios.get(`${baseUrl}/api/v1/auth/user-email-pass`, {params});
}


// export const createReceipt = (user,subTotal,items) =>{
//     console.log(user.id+ "axios")
//     const params = new URLSearchParams([['userID', user.id],['totalPrice', subTotal],['items', items]]);
//     //console.log(items[0].quantity);
//     return axios.post(`${baseUrl}/add-receipt`,params);
// }

export const createReceipt = (receipt) =>{
    console.log(receipt);
    return axios.post(`${baseUrl}/add-receipt`,receipt);
}

export const addBeer = (beer) =>{
    console.log(beer);
    return axios.post(`${baseUrl}/add-beer`,beer);
}

// export {getAllBeers,getBeerById};