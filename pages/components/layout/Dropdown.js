import Link from 'next/link';
import style from '../../../styles/Dropdown.module.css'

export default function Dropdown(props) {
    return (
        <div style={props.style} className={style.container}>
            <div className={style.triangle}></div>
            <div className={style.box}>
                {props.items.map((item)=>(
                    <Link href={item[1]}>
                        <a className={style.menuItem}>{item[0]}</a>
                    </Link>
                ))}
            </div>
        </div>
    )
}