import styled from 'styled-components'
import { motion, MotionValue, ScrollMotionValues, useMotionValue, useViewportScroll } from 'framer-motion'
import { MutableRefObject, useEffect, useRef } from 'react'

const CareerHead = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100vw;
  text-align: center;
  border-top: 1px solid black;
  font-size:48px;
`
const Container = styled.div`
  height: calc(300vh - 100px);
  width: 100%;
  background: #f1efed;
  position: relative;
`
const CareerBlock = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 300px);
  border-top: 1px solid black;
  background:white;
  position: absolute;
`
const BlockWrap = styled.div`
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  overflow: hidden;
`
const BlockTitle = styled.div`
  height: 100px;
  width: 100%;
`
const useScrollTop = (index:number,pageScrollY:ScrollMotionValues)=>{
  let screenHeight = 1080;
  if (typeof window !== 'undefined'){
    screenHeight = window.innerHeight
  }
  const finalY = useMotionValue(index*100)
  const blockHeight = screenHeight - 400
  const min = screenHeight+index*blockHeight
  const max = min+blockHeight
  pageScrollY.scrollY.onChange((y)=>{
    console.log('y',y)
    if (y<min){
      finalY.set(screenHeight-100-(3-index)*100)
    }else if (y>=min&&y<=max){
      const diff = y-min
      finalY.set(screenHeight-100-(3-index)*100 - diff)
    }else if (y > max){
      finalY.set(index*100)
    }
  })
  return finalY
}
const CareerSection = ({pageY}:{pageY:ScrollMotionValues})=>{
  const blockScroll1 = useScrollTop(0,pageY)
  const blockScroll2 = useScrollTop(1,pageY)
  const blockScroll3 = useScrollTop(2,pageY)
  return<Container>
    <CareerHead>CAREER</CareerHead>
    <BlockWrap>
      <CareerBlock style={{top:blockScroll1,zIndex:1}} >
        <BlockTitle>
          深圳小笋
        </BlockTitle>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll2,zIndex:2}} >
        <BlockTitle>
          珠海金刚
        </BlockTitle>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll3,zIndex:3}} >
        <BlockTitle>
          珠海新海通
        </BlockTitle>
      </CareerBlock>
    </BlockWrap>
  </Container>
}
export default CareerSection
