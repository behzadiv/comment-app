import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = ({name,email,showComment}) => {
   
    return (
        
        <div className="comment" onClick={showComment} >
            <h5><FontAwesomeIcon  icon="user-tie" style={{color:"green",fontSize:"large",margin:"3px"}}/> {name}</h5>
            <p><FontAwesomeIcon  icon="mail-bulk" style={{color:"blue",fontSize:"large",margin:"3px"}}/> {email}</p>
        </div>
        
     );
}
 
export default Comment;