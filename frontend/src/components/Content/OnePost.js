import Comment from './Comment';

const OnePost = (props) => {
    return (
        <div>
        <p>{props.post.title}</p>
        <p>{props.post.content}</p>
        {props.loggedIn && <Comment />}
        </div>
    )
}

export default OnePost;