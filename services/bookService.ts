import axios  from "axios";
const BASE_URL = "http://localhost:3333";

export const getBook = (id:String) => {
    const url =`${BASE_URL}/book/${id}`;
    
    return axios.get(url)
};
