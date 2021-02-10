import { useState } from 'react';
import AccountSettings from '../pages/components/profile/AccountSettings'
import UserPosts from '../pages/components/profile/UserPosts'
import style from '../styles/Profile.module.css'

export default function Profile() {
    const [isSelected, setSelected] = useState(true);
    
    const buttonStyle = {
        fontWeight: "bold",
        color: "#2B44FF",
        transition: "0.5s"
    }

    const profileVisible = {
        display: isSelected?"block":"none"
    }

    const postsVisible = {
        display: !isSelected?"block":"none"
    }

    return (
        <div className={style.root}>
            <div className={style.selectionBar}>
                <button id={style.profileButton} className={style.selectionButton} style={isSelected ? buttonStyle : null} onClick={() => setSelected(true)}>Profile</button>
                <button id={style.postButton} className={style.selectionButton} style={!isSelected ? buttonStyle : null} onClick={() => setSelected(false)}>Posts</button>
                <hr className={style.ruleLine}></hr>
            </div>

            <AccountSettings style={profileVisible}></AccountSettings>
            <UserPosts style={postsVisible}></UserPosts>
        </div>
    )
}