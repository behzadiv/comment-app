const Comment = ({name,email}) => {
    return ( 
        <div className="comment">
            <h5>name : {name}</h5>
            <p>Email : {email}</p>
        </div>
     );
}
 
export default Comment;