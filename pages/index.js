import PostCard from "../pages/components/posts/PostCard"
import CreatePost from '../pages/components/posts/CreatePost'
import style from "../styles/Home.module.css"
import { useState } from 'react';

export default function Home() {
    const [visible, setVisible] = useState(false);

    const postStyle = {
        display: visible?"block":"none"
    }

    return (
        <div className={style.root}>
            {/* <CreatePost style={postStyle} function={"Create"}/> */}

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