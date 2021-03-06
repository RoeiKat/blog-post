const URL = "http://localhost:8080/";

const fetchPosts = async () => {
  const response = await fetch(`${URL}posts`);
  const posts = await response.json();
  return posts;
};

const addPost = async (newPost) => {
  const response = await fetch(`${URL}posts/add`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const addUser = async (newUser) => {
  const response = await fetch(`${URL}register`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

const logIn = async (loginInfo) => {
  const response = await fetch(`${URL}login`, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response;
}

const addComment = async(comment, id) => {
  const response = await fetch(`${URL}comments/${id}`, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response;
}


const serverApi = { fetchPosts, addPost, addUser, logIn, addComment };

export default serverApi;
