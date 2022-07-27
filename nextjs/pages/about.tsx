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
import FootSection from '../components/about/FootSection'
import Head from 'next/head'
const About: NextPage = () => {
  const scrollRef = useRef(null)
  const pageY = useMotionValue(0)
  return (
    <Scrollbars
      autoHide
      universal={true}
      onScroll={()=>{
        const scrollBars = scrollRef.current! as Scrollbars
        pageY.set(scrollBars.getScrollTop())
      }}
      style={{
        fontFamily:'youyuan'
      }}
      className={styles.container}
      ref={scrollRef}>
      <Head>
        <title>关于</title>
      </Head>
      <IntroSection />
      <CareerSection pageY={pageY} />
      <AssessmentSection pageY={pageY} />
      <ProjectSection pageY={pageY}/>
      <FootSection />
    </Scrollbars >
  )
}

export default About
