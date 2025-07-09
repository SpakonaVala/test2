import React from "react";
import { addPost, updateNewPostText } from "../../../../redux/mainHallPage-reducer";
import styles from "./Post.module.css";
import { useSelector, useDispatch } from "react-redux";


const PostContainer = () => {
    const dispatch = useDispatch();
    const { postsData, newPostText } = useSelector(state => state.mainHall);

    let PostElement = postsData.map(p => <NewPost key={p.id} id={p.id} message={p.post} likeCount={p.likeCount} />);

   
    const onAddPost = () => {
        dispatch(addPost());
      };

    const onPostChange = (e) => {
        dispatch(updateNewPostText(e.target.value));
    };

    return (
        <div className={styles.item}>
            <div>
                My posts
                <div>
                    <textarea 
                    value={newPostText}
                    onChange={onPostChange}
                    placeholder="Enter post"/>
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

export default PostContainer;
