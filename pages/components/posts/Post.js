import Comment from '../posts/Comment'
import style from '../../../styles/Post.module.css'
import { Scrollbars } from 'react-custom-scrollbars'

export default function Post(props) {

    return (
        <span style={props.style}>
            <div className={style.container}>
                <Scrollbars style={{ width: 740, height: 500 }} >
                    <div className={style.innerContainer}>
                        <h1 className={style.sectionTitle}>{props.number}Number</h1>

                        <div className={style.description}>
                            Consectetur nisi non non irure magna qui id tempor aliquip aliqua non voluptate amet. Sit amet aliqua Lorem officia sint tempor in est esse incididunt id veniam commodo. Quis ex nostrud ex tempor minim labore in quis. Aliqua ea anim cupidatat ullamco fugiat anim sint aliquip ullamco veniam velit exercitation. Labore officia qui sit ad veniam laborum pariatur cillum esse. Tempor culpa ut do culpa anim in incididunt et. Ex aute eiusmod dolor reprehenderit eiusmod officia et aliqua sint quis quis pariatur.
                        </div>

                        <div className={style.buttonLine}>
                            <button className={style.clearButton}>
                                <img className={style.icon} id={style.thumbUpIcon} src="/assets/ThumbUp.svg" alt="Like"></img>
                                <span className={style.numValue}>10</span>
                            </button>

                            <button className={style.clearButton}>
                                <img className={style.icon} id={style.thumbDownIcon} src="/assets/ThumbDown.svg" alt="Dislike"></img>
                                <span className={style.numValue}>2</span>
                            </button>
                        </div>

                        <div className={style.commentSection}>
                            <span className={style.commentTitle}>
                                10 Comments
                            </span>
                            <hr className={style.ruleLine}></hr>
                            <div className={style.comments}>
                                <Comment></Comment>
                                <Comment></Comment>
                                <Comment></Comment>
                                <Comment></Comment>
                                <Comment></Comment>
                                <Comment></Comment>
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </div>
            {/* <div className={style.bgfade}></div> */}
        </span>
    )
}