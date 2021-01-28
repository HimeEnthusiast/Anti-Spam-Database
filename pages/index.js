import PostCard from "../pages/components/posts/PostCard"
import style from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={style.root}>
            <div className={style.recentSection}>
                <h1 className={style.sectionTitle}>
                    Recent Near You
                </h1>

                <div className={style.cardGrid}>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                </div>
            </div>

            <div className={style.popularSection}>
                <h1 className={style.sectionTitle}>
                    Popular Near You
                </h1>

                <div className={style.cardGrid}>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                </div>
            </div>
        </div>
    )
}