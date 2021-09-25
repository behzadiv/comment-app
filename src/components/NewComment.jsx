const NewComment = () => {
    return ( 
        <div className="newComment">
            <div>
            <label>name</label>
            <input type="text"/>
            </div>
            <div>
            <label>Email</label>
            <input type="email" name="" id=""/>
            </div>
            <div>
            <label>content</label>
            <textarea name="" id="" cols="20" rows="10"></textarea>
            </div>
            <button>Add</button>
        </div>
     );
}
 
export default NewComment;