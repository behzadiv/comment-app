import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios"


const HttpApp = () => {
  const[comments,setComments]=useState(null)
  const[selectedId,setSelectedId]=useState(null)
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
      setComments(response.data.slice(0,4))
    }).catch((error)=>{
      console.log(error);
    })
    
  },[])
  //console.log(comments);
  const showComment=(id)=>{
    setSelectedId(id) 
  }
  const deleteCommentHandler=()=>{
    axios.delete(`https://jsonplaceholder.typicode.com/comments/${selectedId}`)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
  }
  return (
    <div>
      <section className="commentSection">
        {comments ? comments.map((comment)=>
          <Comment 
          id={comment.id}
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          showComment={()=>showComment(comment.id)}
          />
        ): <p>loading....</p>}
      </section>
      <section>
         <FullComment
            selectedId={selectedId}
            deleteHandler={deleteCommentHandler}
          />
      </section>
      <section>
          <NewComment/>
      </section>
    </div>
  );
};

export default HttpApp;