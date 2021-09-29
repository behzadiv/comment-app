import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import http from "../services/httpService"
import { toast } from 'react-toastify';
import Navbar from "./Navbar"
import {getAllComments} from "../services/getAllCommentsService"
import {deleteComment} from "../services/deleteCommentService"
import {addNewComment} from "../services/addCommentService"


const HttpApp = () => {
  const[comments,setComments]=useState(0)
  const[selectedId,setSelectedId]=useState(null)
  const[error,setError]=useState(false)
  useEffect(()=>{
    getAllComments().then((response)=>{
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
      await deleteComment(selectedId)
      const {data}=await getAllComments()
      
      setComments(data)
      toast.warn("your comment deleted")
    }
    
    catch{}
  }

  const addComment=async(comment)=>{
    console.log(comment);
    try{
      await addNewComment({...comment,userId:10})
      const {data} = await getAllComments()
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
        <Navbar comments={comments}/>
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
          <NewComment onAddComment={addComment}/>
      </section>
    </div>
  );
};

export default HttpApp;