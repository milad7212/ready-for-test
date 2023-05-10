import axios  from "axios";

const BASE_URL = "http://localhost:3333";

export const getTest = (id:String) => {
    const url =`${BASE_URL}/tests/${id}`;
    
    return axios.get(url)
};






