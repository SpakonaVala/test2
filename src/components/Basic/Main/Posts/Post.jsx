import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    
    let PostElement = props.mainHallPage.postsData.map(p => <NewPost message={p.post} likeCount={p.likeCount} />);

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (text) => {
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.item}>
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={styles.posts}>
                {PostElement}
            </div>
        </div>
    )

};


const NewPost = (props) => {
    return (
        <div>
            <img src='https://avatars.mds.yandex.net/i?id=9992d5f751b39020957ec9668c0a7b53475bb1f8-9857494-images-thumbs&n=13' alt='avatar'></img>
            {props.message}
            <div>
                <span>Like</span> {props.likeCount}
            </div>
        </div>

    )
}

export default Post;