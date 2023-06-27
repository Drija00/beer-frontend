import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getAllBeers = () =>{
    return axios.get(`${baseUrl}/beers`);

}

export const getBeerById = (id) =>{
        return axios.get(`${baseUrl}/beers/${id}`);
}

export const deleteBeerById = (id) =>{
    return axios.delete(`${baseUrl}/delete/${id}`);
}

export const loginUser = (username, password) =>{
        const params = new URLSearchParams([['email', username],['password', password]]);
        return axios.get(`${baseUrl}/api/v1/auth/user-email-pass`, {params});
}

export const createReceipt = (receipt) =>{
    console.log(receipt);
    return axios.post(`${baseUrl}/add-receipt`,receipt);
}

export const addBeer = (beer) =>{
    console.log(beer);
    return axios.post(`${baseUrl}/add-beer`,beer);
}

export const register = (newUser) =>{
    console.log(newUser);
    return axios.post(`${baseUrl}/api/v1/auth/register`,newUser);
}

// export {getAllBeers,getBeerById};