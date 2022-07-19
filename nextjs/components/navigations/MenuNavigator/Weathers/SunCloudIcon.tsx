import MyIcon from '../../../general/MyIcon'
import {motion} from 'framer-motion'
import styled from 'styled-components'
const IconBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .cloud{
    position: absolute;
    bottom: 12%;
    right: 8%;
    stroke: black;
    stroke-width: 64px;
    font-size: 0.8em;
  }
  .sun{
    position: absolute;
    top: 12%;
    left: 20%;
    font-size: 0.6em;
  }
`
const SunCloudIcon = ()=>{
  return <IconBox
  >
    <motion.span
      animate={{
        translateY:['0%','8%','0%'],
        rotate:['0deg','180deg'],
        transition:{
          ease:'linear',
          repeatDelay:0,
          duration:4,
          repeat: Infinity,
        }
      }}
      className={'sun'}>
      <MyIcon name={'icon-sun'} />
    </motion.span>
    <motion.span className={'cloud'}
      animate={{
        translateX:['125%','0%','0%','-175%'],
        transition:{
          times:[0,0.2,0.80,1],
          duration:10,
          repeat: Infinity,
          repeatDelay:0
        }
      }}
    >
      <MyIcon name={'icon-cloud'} />
    </motion.span>
  </IconBox>
}

export default SunCloudIcon
