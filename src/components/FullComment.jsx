import axios from "axios";
import { useEffect, useState } from "react";

const FullComment = ({selectedId,deleteHandler}) => {
    //console.log(selectedId);
    const[selectedComment,setSelectedComponent]=useState(null)
    useEffect(()=>{
        if(selectedId)
        {const selectedComment=async()=>{
            try{
                const {data} = await axios.get(`http://localhost:3003/comments/${selectedId}`)
                //console.log(data);
                setSelectedComponent(data)
            } 
            catch(error){
                console.log(error);
            }  
        }
        selectedComment() }
    },[selectedId])
    
    const onDeleteHandler =()=>{
        deleteHandler()
        setSelectedComponent(null)
    }
    //console.log(selectedComment);
    if(!selectedComment)return <p>No comment selected !</p>
    return ( 
        <div className="fullcomment">
            <h5>{selectedComment.name}</h5>
            <p>{selectedComment.email}</p>
            <p style={{color: "black",marginTop:"10px"}}>{selectedComment.body}</p>
            <button onClick={onDeleteHandler}>Delete</button>
        </div>
     );
}
 
export default FullComment;