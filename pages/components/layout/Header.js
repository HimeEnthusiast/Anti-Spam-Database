import Link from 'next/link';
import { useState } from 'react';
import OutsideClickandler from 'react-outside-click-handler';

import Dropdown from '../layout/Dropdown';
import style from '../../../styles/Header.module.css';

function Header() {
    const [notifVisible, setNotifVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    
    function toggleNotif() {
        setNotifVisible(!notifVisible);
    }

    function toggleProfile() {
        setProfileVisible(!profileVisible);
    }

    function toggleSearch() {
        setSearchVisible(!searchVisible);
    }

    const dropdownNotifStyle = {
        right: 0,
        display: notifVisible?"block":"none"
    }

    const dropdownProfileStyle = {
        right: "5px",
        display: profileVisible?"block":"none"
    }

    const dropdownSearchStyle = {
        right: -17,
        top: 40,
        display: searchVisible?"block":"none"
    }

    return (
        <header className={style.header}>
            <Link href="/">
                <a>
                    <img className={style.logo} src="/assets/AntiPhoneLogo.svg" alt="Logo"></img>
                </a>
            </Link>

            <span className={style.search}>
                <OutsideClickandler onOutsideClick={() => {setSearchVisible(false)}}>
                    <button id={style.searchArrowButton} className={style.clearButton} onClick={toggleSearch}>
                        <img id={style.searchArrowIcon} src="/assets/DownArrow.svg" alt="Search Bar Arrow"></img>
                    </button>
                    <Dropdown style={dropdownSearchStyle} items={[["Search by Phone Number", ""], ["Search by Location", ""]]}/>
                </OutsideClickandler>

                <input id={style.searchInput} type="text" placeholder="Search"></input>
            </span>

            <span className={style.account}>
                <div className={style.notifDiv}>
                    <OutsideClickandler onOutsideClick={() => {setNotifVisible(false)}}>
                        <button className={style.clearButton} onClick={toggleNotif}>
                            <img id={style.notifIcon} src="/assets/Bell.svg" alt="Notification Bell"></img>
                        </button>
                        <Dropdown style={dropdownNotifStyle} items={[["Notifications go here.", "link"], ["HimeEnthusiast liked your post.", "link"], ["ScuffedFox commented on your post.", "link"]]}/>
                    </OutsideClickandler>
                </div>

                <button className={style.clearButton}>
                    <img id={style.addIcon} src="/assets/Plus.svg" alt="Add Post"></img>
                </button>

                <div className={style.profileDiv}>
                    <OutsideClickandler onOutsideClick={() => {setProfileVisible(false)}}>
                    <button className={style.clearButton} onClick={toggleProfile}>
                        <img id={style.userIcon} src="/assets/UserCircle.svg" alt="User Image"></img>
                        <img id={style.userDownIcon} src="/assets/DownArrowFilled.svg" alt="User Account Arrow"></img>
                    </button>
                    <Dropdown style={dropdownProfileStyle} items={[["Profile", "/profile"], ["Log Out", "/logout"]]}/>
                </OutsideClickandler>
                </div>
            </span>
        </header>
    );
}

export default Header;