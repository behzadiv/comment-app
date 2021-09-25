const Comment = ({name,email,showComment}) => {
   
    
   
    return ( 
        <div className="comment" onClick={showComment}>
            <h5>name : {name}</h5>
            <p>Email : {email}</p>
        </div>
     );
}
 
export default Comment;