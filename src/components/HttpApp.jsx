import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios"


const HttpApp = () => {
  const[comments,setComments]=useState(null)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
      setComments(response.data.slice(0,4))
    }).catch((error)=>{
      console.log(error);
    })
    
  },[])
  console.log(comments);
  return (
    <div>
      <section className="commentSection">
        {comments ? comments.map((comment)=>
          <Comment 
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          />
        ): <p>loading....</p>}
      </section>
      <section>
          <FullComment />
      </section>
      <section>
          <NewComment/>
      </section>
    </div>
  );
};

export default HttpApp;