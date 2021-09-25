import { useEffect } from "react";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";

const HttpApp = () => {
   
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