import dayjs from 'dayjs'
import styles from './style.module.scss'
import { useEffect, useState } from 'react'
import { SunIcon,MoonIcon } from './Weathers'
import NavButton from './NavButton'

const MenuNavigator = function() {
  const [timeText,setTimeText] = useState({
    date:'',
    hour:''
  })
  const [weatherIcon,setWeatherIcon] = useState(SunIcon)
  const initWeather = ()=>{
    const now = dayjs()
    const hour = now.hour()
    let icon = SunIcon
    if (hour >= 6 && hour < 18) {
      icon = SunIcon
    } else if (hour >= 18 || hour < 6) {
      icon = MoonIcon
    }
    setWeatherIcon(icon)
  }
  const initDate = ()=>{
    const now = dayjs()
    const hour = now.hour()
    let final = ''
    if (hour >= 0 && hour < 6) {
      final = '凌晨'
    } else if (hour >= 6 && hour < 8) {
      final = '早晨'
    } else if (hour >= 8 && hour < 12) {
      final = '上午'
    } else if (hour >= 12 && hour < 14) {
      final = '午间'
    } else if (hour >= 14 && hour < 17) {
      final = '下午'
    } else if (hour >= 17 && hour < 20) {
      final = '傍晚'
    } else {
      final = '夜间'
    }
    const date = now.format(`MM/DD ${['日', '一', '二', '三', '四', '五', '六'][now.day()]}`)
    setTimeText({
      hour: final,
      date: date
    })
  }
  useEffect(()=>{
    initDate()
    initWeather()
    setInterval(initDate,3600*1000)
  },[])
  return (
    <div className={styles.wrapper + ' fixed right-0 top-0 z-20'}>
      <div className={styles['rainbow-circle']}>
        {['c1', 'c2', 'c3', 'c4', 'c5'].map(c =>
          <div key={c} className={styles[c]} />,
        )}
      </div>
      <div className={styles['weather-box']}>
        {weatherIcon}
      </div>
      <NavButton />
      <div className={styles.date}>
        {timeText.date}
      </div>
      <div className={styles.hour}>{timeText.hour}</div>
    </div>
  )
}

export default MenuNavigator
