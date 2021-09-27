import http from "./httpServices"

export const getAllComments =()=>{
     return http.get("/comments")
}