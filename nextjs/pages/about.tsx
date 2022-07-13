import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import IntroSection from '../components/about/IntroSection'
import CareerSection from '../components/about/CareerSection'
import { Scrollbars } from 'react-custom-scrollbars';
import ProjectSection from '../components/about/ProjectSection'
import { useEffect, useRef, useState } from 'react'
import { motion, useElementScroll, useMotionValue, useViewportScroll } from 'framer-motion'
import styled from 'styled-components'
import AssessmentSection from '../components/about/AssessmentSection'
const Scroller = styled.div`
  overflow-y:scroll;
  overflow-x:hidden;
  ::-webkit-scrollbar {

    //display: none; /* Chrome Safari */
  }
`
const About: NextPage = () => {
  // todo 链接指针跟着鼠标
  // todo 打字效果
  // todo 经历模块参考https://www.appart.agency/
  // todo 开源作品模块参考RocketAir | Design + Strategy,往下滑动滚动的块一个个上来
  const scrollRef = useRef(null)
  const pageY = useElementScroll(scrollRef)
  return (
    <Scroller
      ref={scrollRef} className={styles.container}>
      <IntroSection />
      <CareerSection pageY={pageY} />
      <AssessmentSection pageY={pageY} />
      <ProjectSection />
    </Scroller >
  )
}

export default About
