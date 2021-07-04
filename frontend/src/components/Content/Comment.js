import "./Comment.css";
import serverApi from "../../API/serverAPI";
import { useRef } from "react";
const Comment = (props) => {
  const commentText = useRef(null);
  const postId = props.id;
  const addCommentHandler = async (event) => {
    event.preventDefault();
     if (commentText.current.value.trim() === '') {
      return;
    }
    const commentObj = { 
      comment : commentText.current.value,
    }
    const response = await serverApi.addComment(commentObj, postId);
    if(response.status === 200) {
      props.onAddComment(commentObj);
    }
    commentText.current.value = '';
  };

  return (
    <div className="comment">
      <form className="comment-form">
        <input type="text" placeholder="Type your comment here!" ref={commentText}/>
        <button onClick={addCommentHandler}>Add Comment</button>
      </form>
    </div>
  );
};

export default Comment;
