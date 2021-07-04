import Comment from "./Comment";
import "./OnePost.css";

const OnePost = (props) => {
  const addCommentHandler = (comment) => {
    props.comments.push(comment);
  }
  return (
    <div className="single-post">
      <p className="post-title">{props.post.title}</p>
      <p className="post-content">{props.post.content}</p>
      <div className="comment-container">
        <h4 className="comment-header">Comments:</h4>
        {props.comments &&
          props.comments.map((commentObj) => {
            return (
              <p className="comment-text" key={commentObj._id}>
                {commentObj.comment}
              </p>
            );
          })}
      </div>
      {props.loggedIn && (
        <Comment id={props.post._id} onAddComment={addCommentHandler}/>
      )}
    </div>
  );
};

export default OnePost;
