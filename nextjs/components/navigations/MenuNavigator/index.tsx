import dayjs from "dayjs";
import MyIcon from "../../general/MyIcon";
import styles from './style.module.css'
import {MouseEventHandler} from "react";
const MenuNavigator = function ({className,onClick}:{className?:string,onClick?:MouseEventHandler}) {
    const now = dayjs()
    let hour = now.hour()
    let hourText = ''
    if (hour>=0&&hour<6){
        hourText = '凌晨'
    }else if (hour>=6&&hour<8){
        hourText = '早晨'
    }else if(hour>=8&&hour<12){
        hourText = '上午'
    }else if (hour>=12&&hour<14){
        hourText = '午间'
    }else if(hour>=14&&hour<17){
        hourText = '下午'
    }else if (hour>=17&&hour<20){
        hourText = '傍晚'
    }else {
        hourText = '夜间'
    }
    const date = now.format(`MM/DD ${['日','一','二','三','四','五','六'][now.day()]}`)
    return (
        <div className={styles.wrapper+' '+className}>
            <div style={{color:"white"}} onClick={onClick}>
                菜单
            </div>
            <div className={styles['rainbow-circle']}>
                {['c1','c2','c3','c4','c5'].map(c =>
                    <div key={c} className={styles[c]}/>
                )}
            </div>
            <div className={styles['weather-box']}>
                <MyIcon name={'icon-sun'} />
            </div>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.hour}>{hourText}</div>
        </div>
)}

export default MenuNavigator
