import styled from 'styled-components'
import { motion, MotionValue, ScrollMotionValues, useMotionValue, useViewportScroll } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const CareerHead = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100vw;
  text-align: center;
`
const HeadTitle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size:48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  height: calc(300vh - 100px);
  width: 100%;
  background: #f1efed;
  position: relative;
  border-top: 1px solid black;
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
const useScrollTop = (index:number,y:number,screenHeight:number)=>{
  const finalY = useMotionValue(index*100)
  const blockHeight = screenHeight - 400
  const min = screenHeight+index*blockHeight
  const max = min+blockHeight
  if (y<min){
    finalY.set(screenHeight-100-(3-index)*100)
  }else if (y>=min&&y<=max){
    const diff = y-min
    finalY.set(screenHeight-100-(3-index)*100 - diff)
  }else if (y > max){
    finalY.set(index*100)
  }
  return finalY
}
const CareerSection = ({pageY}:{pageY:ScrollMotionValues})=>{
  const [y,setY] = useState(0)
  const  [screenHeight,setScreenHeight] = useState(1080)
  const TitleSize = useMotionValue('48px')
  const TitleHeight = useMotionValue(100)
  useEffect(()=>{
    pageY.scrollY.onChange((y)=>{
      setY(y)
      const limit = 2*screenHeight - 400
      let percent = 1
      if (y<screenHeight){
        percent = 1
      }else if (y>=screenHeight&&y<=limit){
        percent = 1-(y-screenHeight)/(screenHeight - 400)
      }else{
        percent = 0
      }
      TitleSize.set(48+96*percent+'px')
      TitleHeight.set(100+percent*(screenHeight-400))
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
  const blockScroll1 = useScrollTop(0,y,screenHeight)
  const blockScroll2 = useScrollTop(1,y,screenHeight)
  const blockScroll3 = useScrollTop(2,y,screenHeight)
  return<Container>
    <CareerHead>
      <HeadTitle style={{fontSize:TitleSize,height:TitleHeight}}>
        CAREER
      </HeadTitle>
    </CareerHead>
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
