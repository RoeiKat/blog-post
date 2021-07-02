const Comment = () => {
  const addCommentHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Type your comment here!" />
        <button onClick={addCommentHandler}>Add Comment</button>
      </form>
    </div>
  );
};

export default Comment;
