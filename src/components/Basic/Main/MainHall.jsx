import React from "react";
import PostContainer from "./Posts/PostContainer";
import style from "./MainHall.module.css"


const MainHall = (props) => {
    return (
        <div className={style.MainHall}>
            <div>
                <PostContainer store={props.store} />
            </div>
        </div>
    )

}

export default MainHall;