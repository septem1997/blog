import styled from 'styled-components'
import { Variants } from 'framer-motion'
import { m } from 'framer-motion'

const Wrap = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .printer {
    border: 2px solid black;
    border-radius: 4px;
    width: 36px;
    height: 20px;
    background: rgb(205, 233, 244);
    position: relative;

    .line {
      position: absolute;
      top: 4px;
      left: -1px;
      width: calc(100% + 2px);
      height: 1px;
      background: black;
    }

    .output {
      position: absolute;
      top: 10px;
      left: 7px;
      width: 18px;
      height: 3px;
      background: black;
    }
  }

  .paper1 {
    position: absolute;
    left: 15px;
    bottom: 30px;
    height: 20px;
    width: 16px;
    background: white;
    border: 1px solid black;
    z-index: 3;
    box-sizing: content-box;
  }
  .paper2 {
    position: absolute;
    left: 15px;
    top: 28px;
    height: 0px;
    width: 18px;
    background: white;
    border: 1px solid black;
    z-index: 3;
    transform: perspective(45px) rotateX(30deg);
    display: flex;
    flex-direction: column;
  }

  .panel {
    background: rgb(205, 233, 244);
    width: 24px;
    height: 6px;
    z-index: 1;
    border: 2px solid black;
    border-bottom: transparent;
    position: relative;
  }
`
const PrintIcon = () => {
  const paper1: Variants = {
    'hover': {
      height: ['20px','0px','0px'],
      transition: {
        duration: 4,
        times: [0, 0.6, 1],
        repeat: Infinity,
        repeatDelay:1
      },
    },
  }
  const paper2: Variants = {
    'hover': {
      height: ['0px', '0px', '20px'],
      transition: {
        duration: 4,
        times: [0, 0.4, 1],
        repeat: Infinity,
        repeatDelay:1
      },
    },
  }
  return <Wrap>
    <div className={'panel'}></div>
    <div className={'printer'}>
      <div className={'line'}></div>
      <div className={'output'}></div>
    </div>
    <m.div
      className={'paper1'}
      variants={paper1}
    />
    <m.div
      initial={{ height:'0px' }}
      className={'paper2'}
      variants={paper2}
    />
  </Wrap>
}

export default PrintIcon
