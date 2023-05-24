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
    // return axios.delete(`${baseUrl}/${id}`);
    return Promise.resolve();
}


export const loginUser = (username, password) =>{
        const params = new URLSearchParams([['email', username],['password', password]]);
        return axios.get(`${baseUrl}/api/v1/auth/user-email-pass`, {params});
}


// const createBeer = (data) =>{
//     return axios.post(`${baseUrl}`,data);
// }

// export {getAllBeers,getBeerById};