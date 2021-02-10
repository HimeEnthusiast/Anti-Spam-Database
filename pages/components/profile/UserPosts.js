import PostCard from '../posts/PostCard'
import Comment from '../posts/Comment'
import style from '../../../styles/UserPosts.module.css'

export default function UserPosts(props) {
    return (
        <div style={props.style}>
            <div className={style.postSection}>
                <h1 className={style.sectionTitle}>Posts</h1>
                <div className={style.cardGrid}>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                </div>
            </div>

            <div className={style.commentSection}>
            <h1 className={style.sectionTitle}>Comments</h1>
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
    )
}