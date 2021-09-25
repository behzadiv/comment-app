import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({selectedId}) => {
    console.log(selectedId);
    const[selectedComment,setSelectedComponent]=useState(null)
    useEffect(()=>{
        if(selectedId)
        {const selectedComment=async()=>{
            try{
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments/${selectedId}`)
                //console.log(data);
                setSelectedComponent(data)
            } 
            catch(error){
                console.log(error);
            }  
            }
        selectedComment() }
    },[selectedId])
    console.log(selectedComment);
    if(!selectedComment)return <p>No comment selected !</p>
    return ( 
        <div className="fullcomment">
            <h5>{selectedComment.name}</h5>
            <p>{selectedComment.email}</p>
            <p>{selectedComment.body}</p>
        </div>
     );
}
 
export default FullComment;