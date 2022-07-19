import MyIcon from '../../../general/MyIcon'
import {motion} from 'framer-motion'
import styled from 'styled-components'
const Pole = styled.div`
  position: absolute;
  height: 60%;
  width: 7%;
  border-radius: 10px;
  background: currentColor;
  left: 0;
  right: 0;
  bottom: -10%;
  margin: auto;
  z-index: 1;
`
const Circle = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: #f7f820;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid black;
  z-index: 3;
`
const Leaves = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  border-radius: 50%;
  transform-origin: center center;
  .leaf{
    border: 1px solid black;
    width: 40%;
    height: 15%;
    border-radius: 60%;
    background: currentColor;
    position: absolute;
    left: 50%;
    top: 44%;
    transform-origin: left;
  }
`
const WindIcon = ()=>{
  return <>
      <Pole >
      </Pole>
      <Leaves
        animate={{
          rotate:['0deg','120deg','240deg','360deg']
        }}
        transition={{
          ease:'linear',
          duration:0.5,
          repeatDelay:0,
          repeat:Infinity
        }}
      >
        <div
          style={{
            transform:'rotate(0deg)'
          }}
          className={'leaf'}></div>
        <div
          style={{
            transform:'rotate(120deg)'
          }}
          className={'leaf'}></div>
        <div
          style={{
            transform:'rotate(240deg)'
          }}
          className={'leaf'}></div>
      </Leaves>

      <Circle>

      </Circle>
    </>
}

export default WindIcon
