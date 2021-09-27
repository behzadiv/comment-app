import http from "./httpService"

export const addNewComment=(comment)=>{
    return http.post("/comments",{...comment,userId:10})
}