import axios from "axios";
import { useState } from "react";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  
  const changeHandler = (e) => {
    //console.log(e.target.id,e.target.value);
    setComment({...comment,[e.target.id]:e.target.value})
  };

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/comments",comment)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
  } 
  return (
    <div className="newComment">
      <form action="" onSubmit={submitHandler}>
        <h1>Add New Comment</h1>
        <div>
          <label>name</label>
          <input type="text" id="name" onChange={changeHandler} required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="" id="email" onChange={changeHandler} required/>
        </div>
        <div>
          <label>body</label>
          <textarea id="body" onChange={changeHandler} required></textarea>
        </div>
        <button type="submit" className="formBtn">Add New One</button>
      </form>
    </div>
  );
};

export default NewComment;
