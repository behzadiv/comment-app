import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import http from "../services/httpServices"
import { toast } from 'react-toastify';

const HttpApp = () => {
  const[comments,setComments]=useState(null)
  const[selectedId,setSelectedId]=useState(null)
  const[error,setError]=useState(false)
  useEffect(()=>{
    http.get("/comments").then((response)=>{
      setComments(response.data)
    }).catch((error)=>{
      setError(true)
    })
    
  },[comments ])
  //console.log(comments);
  const showComment=(id)=>{
   console.log(id);
    setSelectedId(id) 
  }
  const deleteCommentHandler=async()=>{
    try{
      await http.delete(`/comments/${selectedId}`)
      const {data}=await http.get("/comments")
      
      setComments(data)
      toast.warn("your comment deleted")
    }
    
    catch{}
  }

  const submitHandler=async(comment)=>{
    console.log(comment);
    try{
      await http.post("/comments",{...comment,userId:10})
      const {data} = await http.get("/comments")
      setComments(data)
      toast.success("Your Comment Added")
    }
    catch{}
  }
  const renderComments =()=>{
    let renderValue = <p>loading....</p>
    if(error){
      renderValue= <p>Fetching data failed</p>;
      toast.error("Can not get data!");
    }
    if(comments && !error){
      renderValue = comments.map((comment)=>
      <Comment 
      id={comment.id}
      key={comment.id}
      name={comment.name}
      email={comment.email}
      showComment={()=>showComment(comment.id)}
      />
      )}
    
    return  renderValue
  }
  return (
    <div>
      <section className="commentSection">
        {renderComments()}
      </section>
      <section>
         <FullComment
            selectedId={selectedId}
            deleteHandler={deleteCommentHandler}
          />
      </section>
      <section>
          <NewComment submitHandler={submitHandler}/>
      </section>
    </div>
  );
};

export default HttpApp;