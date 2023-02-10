import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const getResource = (exam:object) => {
    const url =`${BASE_URL}/resource/`;
    
    return axios.post(url,exam)
};

export const getCountResource = () => {
    const url =`${BASE_URL}/resource/count/`;
    
    return axios.get(url)
};
