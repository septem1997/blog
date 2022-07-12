import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import dynamic from 'next/dynamic'
import NavTitle from '../components/navigations/NavTitle'
const DynamicStripe = dynamic(() => import('../components/about/StripeGradient'), {
  ssr: false,
})
const About: NextPage = () => {
  // todo 链接指针跟着鼠标
  // todo 打字效果
  // todo 经历模块参考https://www.appart.agency/
  // todo 开源作品模块参考RocketAir | Design + Strategy,往下滑动滚动的块一个个上来
  return (
    <div className={styles.container}>
      <DynamicStripe
        style={{width:'100vw',height:'100vh'}}
        colors={['#ef008f','#6ec3f4','#7038ff','#ffba27']} />
      <NavTitle>关于</NavTitle>
    </div>
  )
}

export default About
