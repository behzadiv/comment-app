import http from "./httpService"

export const deleteComment =(selectedId)=>{
     return http.delete(`/comments/${selectedId}`)
}