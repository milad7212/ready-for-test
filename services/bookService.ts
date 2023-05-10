import axios  from "axios";
const BASE_URL =process.env.NODE_ENV !== "production"? "http://localhost:3333":"http://node.readyfortest.ir"; 

export const getBook = (id:String) => {
    const url =`${BASE_URL}/book/${id}`;
    
    return axios.get(url)
};
