import styled from 'styled-components'
import { motion, ScrollMotionValues, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const SectionBox = styled.div`
  height: 300vh;
  position: relative;
  background: #cd570d;
`
const TextBox = styled(motion.div)`
  height: 100vh;
  display: flex;
  line-height: 100vh;
  margin: 0 48px;
  position: sticky;
  top: 0;
  left: 0;
  font-size: 98px;
  letter-spacing: 4px;
  white-space: nowrap;
  color: white;
`
const AssessmentSection = ({pageY}:{pageY:ScrollMotionValues})=>{
  // todo 封装成useWindow
  const  [screenHeight,setScreenHeight] = useState(1080)
  const translateX = useMotionValue('0px')
  const textRef = useRef(null)
  useEffect(()=>{
    pageY.scrollY.onChange((y)=>{
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
        const diff = div.scrollWidth - div.clientWidth
        console.log(diff,percent)
        translateX.set(`translateX(-${percent*diff}px)`)
      }
    })
    if (typeof window !== 'undefined') {
      const handleResize = ()=> {
        setScreenHeight(window.innerHeight);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  },[])
  return <SectionBox>
    <TextBox ref={textRef} style={{transform:translateX}}>
      这里用一句话评价下自己，别太长，也别太短短短短短短短短短短短短~
    </TextBox>
  </SectionBox>
}
export default AssessmentSection
