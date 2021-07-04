import { useEffect, useState } from "react";
import serverApi from "../../API/serverAPI";
import AddPost from "./AddPost";
import OnePost from "./OnePost";
import "./Posts.css";

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
    return () => {}
  }, [posts]);

  return (
    <div className="posts">
      {props.loggedIn && <AddPost onAddPost={addPostHandler} />}
      {posts.length === 0 && <p>No posts found / Server failure</p>}
      {posts.map((post) => (
        <OnePost
          loggedIn={props.loggedIn}
          key={post._id || 'temp'}
          post={post}
          comments={post.comments}
        />
      ))}
      
    </div>
  );
};

export default Posts;
