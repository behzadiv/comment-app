import http from "./httpService"

export function getOneComment(selectedId){
    return http.get(`/comments/${selectedId}`)
}