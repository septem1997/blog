import MyIcon from '../../../general/MyIcon'
import {motion} from 'framer-motion'
import styled from 'styled-components'
const IconBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .cloud{
    position: absolute;
    bottom: 5%;
    right: 15%;
    stroke: black;
    stroke-width: 64px;
    font-size: 0.8em;
  }
  .moon{
    position: absolute;
    top: 10%;
    left: 15%;
    font-size: 0.8em;
  }
`
const MoonCloudIcon = ()=>{
  return <IconBox
  >
    <motion.span
      animate={{
        translateY:['0%','10%','0%'],
        transition:{
          duration:4,
          repeat: Infinity,
        }
      }}
      className={'moon'}>
      <MyIcon name={'icon-moon'} />
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

export default MoonCloudIcon
