import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import IntroSection from '../components/about/IntroSection'
import CareerSection from '../components/about/CareerSection'
import { Scrollbars } from 'react-custom-scrollbars';
import ProjectSection from '../components/about/ProjectSection'
import { useEffect, useRef, useState } from 'react'
import { motion, useElementScroll, useMotionValue, useScroll, useViewportScroll } from 'framer-motion'
import styled from 'styled-components'
import AssessmentSection from '../components/about/AssessmentSection'
import FootSection from '../components/about/FootSection'
const About: NextPage = () => {
  const scrollRef = useRef(null)
  // const pageY = useScroll({container:scrollRef})
  const pageY = useMotionValue(0)
  return (
    <Scrollbars
      autoHide
      universal={true}
      onScroll={()=>{
        const scrollBars = scrollRef.current! as Scrollbars
        pageY.set(scrollBars.getScrollTop())
      }}
      className={styles.container}
      ref={scrollRef}>
      <IntroSection />
      <CareerSection pageY={pageY} />
      <AssessmentSection pageY={pageY} />
      <ProjectSection pageY={pageY}/>
      <FootSection />
    </Scrollbars >
  )
}

export default About
