import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/about/FoldingGradient'), {
  ssr: false,
})
const About: NextPage = () => {
  // todo 链接指针跟着鼠标
  // todo 打字效果
  // todo 经历模块参考https://www.appart.agency/
  // todo 开源作品模块参考RocketAir | Design + Strategy,往下滑动滚动的块一个个上来
  return (
    <div className={styles.container}>
      <DynamicHeader />
    </div>
  )
}

export default About
