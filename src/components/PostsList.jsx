import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from "./NewPost";
function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Dairan" body="React is amazing!"/>
                <Post author="Pepe" body="I love React!"/>
                <Post author="Lara" body="React is the best!"/>
            </ul>
        </>
    );
}

export default PostsList;