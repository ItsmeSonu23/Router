import axios from "axios";

/**
 * A wrapped instance of axios, with a base URL pointing to the JSON placeholder API
 * @constant {AxiosInstance}
 */
const api = axios.create({
    baseURL :"https://jsonplaceholder.typicode.com/"
})

export const getPost = ()=>{
    return api.get("posts")
}

export const postData = (post)=>{
    return api.post("posts",post)
}