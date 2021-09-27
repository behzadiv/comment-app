import axios from "axios"

const http ={
    get:axios.get,
    put:axios.put,
    post:axios.post,
    delete:axios.delete
}
export default http;

// this service help us when we want use other library instead of axios 
// just we must change axios of this httpServices to another