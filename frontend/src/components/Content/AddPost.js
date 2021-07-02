import { useRef } from "react";
import serverApi from '../../API/serverAPI';

const AddPost = (props) => {
  const postContent = useRef(null);
  const postTitle = useRef(null);
  const addPostHandler = async (event) => {
    event.preventDefault();
    const title = postTitle.current.value;
    const content = postContent.current.value;
    const newPost = {
        title,
        content
    };
    await serverApi.addPost(newPost);
    props.onAddPost(newPost);
    postTitle.current.value = '';
    postContent.current.value = '';
  };
  return (
    <form>
      <input
        className="form-title"
        type="text"
        placeholder="Title"
        ref={postTitle}
      />
      <input
        className="form-content"
        type="text"
        placeholder="Content"
        ref={postContent}
      />
      <button onClick={addPostHandler}>Add a Post!</button>
    </form>
  );
};

export default AddPost;
