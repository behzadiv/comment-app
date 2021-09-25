import { useEffect, useState } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios from "axios"


const HttpApp = () => {
  const[comments,setComments]=useState(null)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      setComments(response.data.slice(0,4))
    }).catch((error)=>{
      console.log(error);
    })
    
  },[])
  
  return (
    <div>
      <section className="commentSection">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
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