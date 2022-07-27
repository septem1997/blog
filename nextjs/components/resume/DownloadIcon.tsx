import { m, motion, Variants } from 'framer-motion'
import styled from 'styled-components'
import MyIcon from '../general/MyIcon'

const Wrap = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(29, 122, 239);
  .arrow {
    font-size: 24px;
    transform-origin: center;
  }

  .line {
    background: currentColor;
    height: 4px;
    width: 60%;
    margin-top: 2px;
    border-radius: 2px;
  }
`
const DownloadIcon = () => {
  const line: Variants = {
    'hover': {
      translateY: ['0%', '5px', '-5px', '0px'],
      rotate: ['0deg', '0deg', '180deg', '360deg'],
      transition: {
        ease: 'linear',
        duration: 2.5,
        repeat: Infinity,
      },
    },
  }
  return <Wrap>
    <m.div
      variants={line}
      className={'arrow'}
    >
      <MyIcon name={'icon-paixu'} />
    </m.div>
    <div className={'line'}></div>
  </Wrap>
}

export default DownloadIcon
