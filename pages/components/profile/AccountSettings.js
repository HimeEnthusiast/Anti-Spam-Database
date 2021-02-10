import style from '../../../styles/AccountSettings.module.css'

export default function AccountSettings(props) {
    return (
        <div className={style.root} style={props.style}>
            <h1 className={style.title}>Account Settings</h1>

            <div className={style.settingsContainer}>
                <div className={style.setting}>
                    <h3 className={style.settingsTitle}>Username</h3>

                    <div className={style.innerDiv}>
                        <span className={style.settingsData}>HimeEnthusiast</span>
                        <button className={style.changeButton}>Change</button>
                    </div>
                    <hr className={style.ruleLine}></hr>
                </div>

                <div className={style.setting}>
                    <h3 className={style.settingsTitle}>Email</h3>

                    <div className={style.innerDiv}>
                        <span className={style.settingsData}>isabellapiantoni@hotmail.com</span>
                        <button className={style.changeButton}>Change</button>
                    </div>
                    <hr className={style.ruleLine}></hr>
                </div>

                <div className={style.setting}>
                    <h3 className={style.settingsTitle}>Password</h3>

                    <div className={style.innerDiv}>
                        <span className={style.settingsData}>*****************</span>
                        <button className={style.changeButton}>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}