import axios from "axios";

const getData = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useReqLink = () => {
    return getData
};

export default useReqLink;