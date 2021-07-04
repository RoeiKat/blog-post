import { useRef, useState, Fragment } from "react";
import serverApi from "../../API/serverAPI";
import "./AddPost.css";

const AddPost = (props) => {
  const [show, setShow] = useState(false);
  const postContent = useRef(null);
  const postTitle = useRef(null);
  const addPostHandler = async (event) => {
    event.preventDefault();
    const title = postTitle.current.value;
    const content = postContent.current.value;
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    const newPost = {
      title,
      content,
    };
    await serverApi.addPost(newPost);
    props.onAddPost(newPost);
    postTitle.current.value = "";
    postContent.current.value = "";
  };
  const hideInputHandler = (event) => {
    event.preventDefault();
    setShow(false);
  };
  const showInputHandler = () => {
    setShow(true);
  };

  const form = (
    <form className="add-post-form">
      <button className="show-less" onClick={hideInputHandler}>
        -
      </button>
      <input type="text" placeholder="Title" ref={postTitle} />
      <textarea placeholder="Content" ref={postContent} rows="8" />
      <button className="add-post-form-btn" onClick={addPostHandler}>Add a Post!</button>
    </form>
  );
  const add = (
    <div className="add-post">
      <span>Add a post!</span>
      <button className="show-more" onClick={showInputHandler}>
        +
      </button>
    </div>
  );
  return (
    <Fragment>
      {!show ? add : form}
    </Fragment>
  );
};

export default AddPost;
