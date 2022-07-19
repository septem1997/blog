import MyIcon from '../../../general/MyIcon'
import {motion} from 'framer-motion'
import styled from 'styled-components'
const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  top: 0;
  background: black;
  z-index: 2;
`
const RainGrid = styled.div`
  position: absolute;
  width: 50%;
  left: 30%;
  height: 50%;
  z-index: 1;
  .raindrop{
    position: absolute;
    bottom: 0;
    font-size: 10%;
    color: currentColor;
  }
`
const Cloud = styled(motion.div)`
  position: absolute;
  left: 18%;
  top: 0;
  font-size: 80%;
  z-index: 3;
`
const ThunderBox = styled(motion.div)`
  position: absolute;
  left: 28%;
  top: 30%;
  font-size: 50%;
  z-index: 4;
  color: black;
`
const ThunderRainIcon = ()=>{
  return <>
    <Cloud
      style={{
        scaleY:'0.9'
      }}
      animate={{
        translateY:['0%','5%','0%']
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay:0
      }}
    >
      <ThunderBox
        animate={{
          opacity:[0,0,1,0,1,0,0]
        }}
        transition={{
          repeat:Infinity,
          duration:4,
          times:[0,0.4,0.45,0.5,0.55,0.6,1]
        }}
      >
        <MyIcon name={'icon-thunderbolt-fill'} />
      </ThunderBox>
      <MyIcon name={'icon-cloud'} />
    </Cloud>
    <Mask />
    <RainGrid>
      {Array.from(new Array(9).keys()).map(i =>
        <motion.div
          style={{
            left:(i%3)*33.33+'%',
            scaleX:0.85
          }}
          animate={{
            translateY:['0%','1000%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay:0.5*(i/3),
            repeatDelay:0
          }}
          className={'raindrop'} key={i}>
          <MyIcon name={'icon-drip-full'} />
        </motion.div>
      )}
    </RainGrid>
  </>
}

export default ThunderRainIcon
