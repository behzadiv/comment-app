import http from "./httpService"

export const addNewComment=(data)=>{
    return http.post("/comments",data)
}