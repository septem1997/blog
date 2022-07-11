import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Link href={'/about'}>
            跳到关于
        </Link>
        <div>
            <Link href={'/gallery'}>
                跳到相册
            </Link>
        </div>
    </div>
  )
}

export default Home
