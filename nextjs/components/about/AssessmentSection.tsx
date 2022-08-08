import styled from 'styled-components'
import { motion, MotionValue, ScrollMotionValues, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

const SectionBox = styled.div`
  height: 300vh;
  position: relative;
  background: #cd570d;
`
const TextBox = styled(motion.div)`
  height: 100vh;
  display: flex;
  line-height: 100vh;
  padding: 0 48px;
  position: sticky;
  top: 0;
  left: 0;
  overflow-x: hidden;
  div{
    font-size: 98px;
    letter-spacing: 4px;
    white-space: nowrap;
    color: white;
    @media screen and (max-width: 420px) {
      font-size: 48px;
    }
  }
`
const AssessmentSection = ({pageY}:{pageY:MotionValue<number>})=>{
  const windowSize = useWindowSize()
  const translateX = useMotionValue('0px')
  const textRef = useRef(null)
  useEffect(()=>{
    pageY.onChange((y)=>{
      const screenHeight = windowSize.height
      const minHeight = 4*screenHeight-100
      const maxHeight = minHeight + 2*screenHeight
      let percent = 0
      if (y<minHeight){
        percent = 0
      }else if (y>=minHeight&&y<=maxHeight){
        percent = (y-minHeight)/(2*screenHeight)
      }else{
        percent = 1
      }
      if (textRef.current){
        const div = textRef.current as HTMLDivElement
        const diff = div.children[0].clientWidth - div.clientWidth + windowSize.width/2
        translateX.set(`translateX(-${percent*diff}px)`)
      }
    })
  },[windowSize.height])
  return <SectionBox>
    <TextBox ref={textRef}>
      <motion.div style={{transform:translateX}}>
        热爱编程，擅长解决业务发展过程中的各种重难点问题，熟悉常见的数据结构和算法
      </motion.div>
    </TextBox>
  </SectionBox>
}
export default AssessmentSection
