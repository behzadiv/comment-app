import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios"


const HttpApp = () => {
  const[comments,setComments]=useState(null)
  const[selectedId,setSelectedId]=useState(null)
  
  useEffect(()=>{
    axios.get("http://localhost:3003/comments").then((response)=>{
      setComments(response.data)
    }).catch((error)=>{
      console.log(error);
    })
    
  },[comments ])
  //console.log(comments);
  const showComment=(id)=>{
   console.log(id);
    setSelectedId(id) 
  }
  const deleteCommentHandler=()=>{
    axios.delete(`http://localhost:3003/comments/${selectedId}`)
    .then(
      axios.get("http://localhost:3003/comments")
      .then((res)=> setComments(res.data))
    )
    .catch((error)=>console.log(error))
  }

  const addComment=(data)=>{
    // setComments([...comments,data])
    axios.get("http://localhost:3003/comments").then((res)=>setComments(res.data))
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
          <NewComment addComment={addComment}/>
      </section>
    </div>
  );
};

export default HttpApp;