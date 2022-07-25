import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Link from "next/link";
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <div className={styles.container} style={{background:'red'}}>
      <Head>
        <title>相册</title>
      </Head>
      <div className={'flex items-center flex-col'}>
        <img
          style={{width:'500px',height:'auto'}}
          src={"https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/processing1.jpg"}/>
        <h1 style={{color:'white',fontSize:'48px'}}>
          施工中...
        </h1>
      </div>
    </div>
  )
}

export default About
