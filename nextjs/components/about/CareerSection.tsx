import styled from 'styled-components'
import { motion, MotionValue, ScrollMotionValues, useMotionValue, useViewportScroll } from 'framer-motion'
import { MutableRefObject, useEffect, useRef } from 'react'

const CareerHead = styled.div`
  position: sticky;
  top: 0;
  height: 50vh;
  width: 100vw;
  text-align: center;
  border-top: 1px solid black;
  font-size:48px;
`
const Container = styled.div`
  height: 200vh;
  width: 100%;
  background: #f1efed;
  position: relative;
`
const CareerBlock = styled(motion.div)`
  width: 100%;
  height: 50vh;
  border-top: 1px solid black;
  background:white;
  position: absolute;
`
const BlockWrap = styled.div`
  position: sticky;
  top: 100px;
`
const useScrollTop = (index:number,pageScrollY:ScrollMotionValues)=>{
  // todo vh to px
  const finalY = useMotionValue(index*100)
  const min = index*100+540
  const max = index*100+840
  pageScrollY.scrollY.onChange((y)=>{
    if (y>=min&&y<=max){
      const diff = max - y
      finalY.set(diff)
    }
  })
  return finalY
}
const CareerSection = ({pageY}:{pageY:ScrollMotionValues})=>{
  const scroll = useScrollTop(1,pageY)
  return<Container>
    <CareerHead>Career</CareerHead>
    <BlockWrap>
      <CareerBlock style={{top:scroll,zIndex:1}} />
      {/*<CareerBlock style={{top:'calc(50vh + 200px)',zIndex:2}} />*/}
      {/*<CareerBlock style={{top:'calc(50vh + 300px)',zIndex:3}} />*/}
    </BlockWrap>
  </Container>
}
export default CareerSection
