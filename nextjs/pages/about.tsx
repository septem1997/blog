import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import IntroSection from '../components/about/IntroSection'
const About: NextPage = () => {
  // todo 链接指针跟着鼠标
  // todo 打字效果
  // todo 经历模块参考https://www.appart.agency/
  // todo 开源作品模块参考RocketAir | Design + Strategy,往下滑动滚动的块一个个上来
  return (
    <div className={styles.container}>
      <IntroSection />
    </div>
  )
}

export default About
