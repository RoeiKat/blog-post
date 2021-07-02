import Comment from './Comment';
import './OnePost.css'

const OnePost = (props) => {
    return (
        <div className="single-post">
        <p className="post-title">{props.post.title}</p>
        <p className="post-content">{props.post.content}</p>
        {props.loggedIn && <Comment />}
        </div>
    )
}

export default OnePost;