import style from '../../../styles/CreatePost.module.css'

export default function CreatePost(props) {

    return (
        <span style={props.style}>
        <div className={style.container}>
            {/* <button className={style.closeButton}>
                <img className={style.closeIcon} src="/assets/x.svg"></img>
            </button> */}

            <h1 className={style.sectionTitle}>{props.function} Post</h1>

            <form className={style.form}>
                <label className={style.label} htmlFor="title">Phone Number</label>
                <input className={style.input} type="text" name="title" placeholder="The phone number that called you."></input>

                <label className={style.label} htmlFor="description">Description</label>
                <textarea className={style.textarea} name="description" placeholder="Write a description of what happened when this number called you."></textarea>
                
                <input className={style.submit} type="submit" value="Submit"></input>
            </form>
        </div>

        <div className={style.bgfade}></div>
        </span>
    )
}