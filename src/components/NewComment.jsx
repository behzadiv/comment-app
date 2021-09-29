import { useState } from "react";
import { addNewComment } from "../services/addCommentService";

const NewComment = ({ onAddComment }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    //console.log(e.target.id,e.target.value);
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };
  return (
    <div className="newComment">
      <h1>Add New Comment</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            id="name"
            onChange={changeHandler}
            required
            value={comment.name}
            placeholder="Name..."
          />
        </div>
        <div>
          <input
            type="email"
            name=""
            id="email"
            onChange={changeHandler}
            required
            value={comment.email}
            placeholder="Email..."
          />
        </div>
        <div>
          <textarea
            id="body"
            onChange={changeHandler}
            required
            value={comment.body}
            placeholder="Message..."
          ></textarea>
        </div>
        <button type="submit" className="formBtn">
          <span>
            <span>
              <span>ADD</span>
            </span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default NewComment;
