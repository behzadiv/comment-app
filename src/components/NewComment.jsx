import { useState } from "react";

const NewComment = ({submitHandler}) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  
  const changeHandler = (e) => {
    //console.log(e.target.id,e.target.value);
    setComment({...comment,[e.target.id]:e.target.value})
  };

  
  return (
    <div className="newComment">
      
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
        <button onClick={()=>submitHandler(comment)} className="formBtn">Add New One</button>
      
    </div>
  );
};

export default NewComment;
