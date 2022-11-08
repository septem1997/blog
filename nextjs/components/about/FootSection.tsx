import styled from 'styled-components'
import { MouseEventHandler, useRef } from 'react'
import useMouse from '@react-hook/mouse-position'
import Link from 'next/link'
import MyIcon from '../general/MyIcon'
import { motion, useMotionValue } from 'framer-motion'

const SectionBox = styled.div`
  height: 50vh;
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .href {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid black;
    border-color: #000;
    span{
      font-size: 24px;
    }
  }
`
const FootSection = () => {
  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  })
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)
  const leftArrowRotate = useMotionValue('rotate(0deg)')
  const rightArrowRotate = useMotionValue('rotate(0deg)')
  return (
    <SectionBox ref={ref} onMouseMove={(e) => {
      const lefArrow = leftArrowRef.current! as HTMLSpanElement
      const rightArrow = rightArrowRef.current! as HTMLSpanElement
      const x1 = mouse.pageX!
      const y1 = mouse.pageY!
      // const x2 = lefArrow.getBoundingClientRect().x
      // const y2 = lefArrow.getBoundingClientRect().y
      const x3 = rightArrow.getBoundingClientRect().x
      const y3 = rightArrow.getBoundingClientRect().y
      // const radian = Math.atan2(y2 - y1, x2 - x1);
      // const angle = 180 / Math.PI * radian;
      const radian2 = Math.atan2(y3 - y1, x3 - x1);
      const angle2 = 180 / Math.PI * radian2;
      // leftArrowRotate.set(`rotate(${angle - 135}deg)`)
      rightArrowRotate.set(`rotate(${angle2 - 135}deg)`)
    }}>
      {/*<a href={'https://github.com/septem1997'}>*/}
      {/*  <motion.div*/}
      {/*    whileHover={{*/}
      {/*      borderColor:'#fff'*/}
      {/*    }}*/}
      {/*    className={'href'}>*/}
      {/*    <span>访问Github</span>*/}
      {/*    <motion.span*/}
      {/*      style={{transform:leftArrowRotate,marginLeft:'12px'}}*/}
      {/*      ref={leftArrowRef}><MyIcon name={'icon-arrow'} /></motion.span>*/}
      {/*  </motion.div>*/}
      {/*</a>*/}
      <Link href={'/resume'} legacyBehavior>
        <motion.div
          whileHover={{
            borderColor:'#fff'
          }}
          className={'href'}>
          <span>查看纸质简历</span>
          <motion.span
            style={{transform:rightArrowRotate,marginLeft:'12px'}}
            ref={rightArrowRef}><MyIcon name={'icon-arrow'} /></motion.span>
        </motion.div>
      </Link>
    </SectionBox>
  );
}

export default FootSection
