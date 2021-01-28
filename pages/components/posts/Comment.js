import style from '../../../styles/Comment.module.css'

export default function Post(props) {
    return (
        <div className={style.root}>
            <div className={style.userTitle}>
                Username
            </div>

            <div className={style.comment}>
                Enim ea labore qui enim non cupidatat aliquip occaecat. Consequat consectetur magna dolor amet sunt ad aute labore irure deserunt esse.
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

            <hr className={style.ruleLine}></hr>
        </div>
    )
}