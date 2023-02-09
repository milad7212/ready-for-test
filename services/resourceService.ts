import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const getResource = (exam:object) => {
    const url =`${BASE_URL}/resource/`;
    console.log(exam);
    return axios.post(url,exam)
};
