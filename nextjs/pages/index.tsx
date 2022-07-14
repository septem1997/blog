import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{background:'blue'}}>
      <div className={'flex items-center flex-col'}>
        <img
          style={{width:'500px',height:'auto'}}
          src={"https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/processing2.jpg"}/>
        <h1 style={{color:'white',fontSize:'48px'}}>
          在搬了
        </h1>
      </div>
    </div>
  )
}

export default Home
