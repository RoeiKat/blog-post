import { useEffect, useState } from "react";
import serverApi from "../../API/serverAPI";
import AddPost from "./AddPost";
import OnePost from "./OnePost";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const bringDataHandler = async () => {
    const data = await serverApi.fetchPosts();
    setPosts(data);
  };
  const addPostHandler = (newPost) => {
    const newPostsArr = [...posts, newPost];
    setPosts(newPostsArr);
  };

  useEffect(() => {
    bringDataHandler();
  }, []);

  return (
    <div>
      {props.loggedIn && <AddPost onAddPost={addPostHandler} />}
      {posts.map((post) => (
        <OnePost loggedIn={props.loggedIn} key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
