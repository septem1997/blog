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
const Scroller = styled.div`
  overflow-y:scroll;
  overflow-x:hidden;
  ::-webkit-scrollbar {

    display: none; /* Chrome Safari */
  }
`
const About: NextPage = () => {
  const scrollRef = useRef(null)
  const pageY = useScroll({container:scrollRef})
  return (
    <Scroller
      ref={scrollRef} className={styles.container}>
      <IntroSection />
      <CareerSection pageY={pageY} />
      <AssessmentSection pageY={pageY} />
      <ProjectSection pageY={pageY}/>
      <FootSection />
    </Scroller >
  )
}

export default About
