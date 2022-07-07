import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div className={styles.container} style={{background:'red'}}>
      <Link href={'/'}>
          跳到首页
      </Link>
    </div>
  )
}

export default About
