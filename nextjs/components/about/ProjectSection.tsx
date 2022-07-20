import useWindowSize from '../../hooks/useWindowSize'
import { motion, MotionValue, ScrollMotionValues, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useMouse from "@react-hook/mouse-position";

const SectionBox = styled.div`
  height: 400vh;
  position: relative;
  background: black;
  cursor: none;
`
const TitleBlock = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 128px;
  z-index: 1;
  @media screen and (max-width: 420px) {
    font-size: 48px;
  }
`
const ProjectWrap = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row-reverse;

  .project {
    margin: 0 24px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28px;
    a{
      cursor: none;
    }
    .img-box {
      max-width: 400px;
      width: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`
const Line = styled(motion.div)`
  height: 10px;
  border-radius: 5px;
  width: 0%;
  background: currentColor;
`
const ProjectSection = ({ pageY }: { pageY: MotionValue<number> }) => {
  const windowSize = useWindowSize()
  const progress = useMotionValue('0%')
  const translate = useMotionValue('translateX(-25%)')
  useEffect(() => {
    pageY.onChange((y) => {
      const screenHeight = windowSize.height
      const minHeight = 7 * screenHeight - 100
      const maxHeight = minHeight + 3 * screenHeight
      let percent = 0
      if (y < minHeight) {
        percent = 0
      } else if (y >= minHeight && y <= maxHeight) {
        percent = (y - minHeight) / (3 * screenHeight)
      } else {
        percent = 1
      }
      progress.set(percent * 100 + '%')
      const minHeightForTitle = minHeight - 0.5*screenHeight
      if (y < minHeightForTitle) {
        percent = 0
      } else if (y >= minHeightForTitle && y <= minHeight) {
        percent = (y - minHeightForTitle) / (0.5 * screenHeight)
      } else {
        percent = 1
      }
      translate.set(`translateX(-${percent*25}%) scale(${0.5+(1 - percent)/2})`)
    })
  }, [windowSize.height])
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  });

  let mouseXPosition = -10;
  let mouseYPosition = -10;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX!;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY!;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32
    }
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  function projectEnter() {
    setCursorText("查看");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return <SectionBox ref={ref}>
    <motion.div
      variants={variants}
      className="circle"
      animate={cursorVariant}
      transition={spring}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
    <TitleBlock style={{transform:translate}}>
      <div>
        <div style={{textAlign:'center',lineHeight:'80%',marginBottom:'24px'}}>
          PERSONAL<br/>
          PROJECT
        </div>
        <Line style={{ width: progress }} />
      </div>
    </TitleBlock>
    {[
      {
        name:'共享弹幕',
        img:'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/talk.png',
        href:'https://github.com/septem1997/barrage-room'
      },{
        name:'每日一文',
        img:'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/read.jpg',
        href:'https://apps.microsoft.com/store/detail/%E6%AF%8F%E6%97%A5%E4%B8%80%E6%96%87-uwp/9NBLGGH51W0R?hl=zh-cn&gl=CN'
      },{
        name:'公交到哪了',
        img:'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/bus.png',
        href:'https://github.com/septem1997/findBus'
      }
    ].map(item =>
      <ProjectWrap key={item.name}>
        <div
          className={'project'} >
          <a
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            className={'img-box'} href={item.href} target={'_blank'} rel="noreferrer">
            <img src={item.img} />
          </a>
          <div>{item.name}</div>
        </div>
      </ProjectWrap>
    )}
  </SectionBox>
}

export default ProjectSection
