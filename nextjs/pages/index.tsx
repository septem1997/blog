import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import Link from "next/link";
const Home: NextPage = () => {
  // todo 链接指针跟着鼠标
  // todo 打字效果
  // todo 经历模块参考https://www.appart.agency/
  // todo 开源作品模块参考RocketAir | Design + Strategy,往下滑动滚动的块一个个上来
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
