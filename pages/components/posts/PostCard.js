import Post from '../posts/Post'
import { useState } from 'react';
import OutsideClickandler from 'react-outside-click-handler';
import style from "../../../styles/PostCard.module.css"

export default function PostCard() {
    const [visible, setVisible] = useState(false);

    const postStyle = {
        display: visible?"block":"none"
    }

    return (
        <div className={style.root}>
            <OutsideClickandler onOutsideClick={() => setVisible(false)}>
                <Post style={postStyle}></Post>
            </OutsideClickandler>
                <div className={style.bgfade} style={postStyle}></div>

            <button className={style.postButton} onClick={() => setVisible(true)}>
                <div className={style.title}>
                    Number
                </div>

                <div className={style.byline}>
                    By User
                </div>

                <div className={style.description}>
                    Ullamco enim laborum excepteur qui magna commodo veniam do incididunt ad adipisicing. Eiusmod excepteur amet elit adipisicing exercitation deserunt anim aliqua nulla culpa. Consectetur reprehenderit duis enim laboris ea pariatur esse veniam velit aliqua duis.
                </div>
            </button>

            <div className={style.buttonLine}>
                <button className={style.clearButton}>
                    <img className={style.icon} id={style.thumbUpIcon} src="/assets/ThumbUp.svg" alt="Like"></img>
                    <span className={style.numValue}>10</span>
                </button>

                <button className={style.clearButton}>
                    <img className={style.icon} id={style.thumbDownIcon} src="/assets/ThumbDown.svg" alt="Dislike"></img>
                    <span className={style.numValue}>2</span>
                </button>

                <button className={style.clearButton} id={style.commentButton}>
                    <img className={style.icon} id={style.commentIcon} src="/assets/Comment.svg" alt="Comment"></img>
                    <span className={style.numValue}>3</span>
                </button>
            </div>
        </div>
    )
}