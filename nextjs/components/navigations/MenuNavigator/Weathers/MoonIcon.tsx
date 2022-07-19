import MyIcon from '../../../general/MyIcon'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

const MoonIcon = () => {
  const transition = {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay:1
  }
  const animate = {
    scale: [0.8, 1.4,0.8]
  }
  const starStyle:CSSProperties={
    position: 'absolute',
    fontSize:'25%'
  }
  return <>
    <MyIcon
      style={{
        position:'absolute',
        left:'5%',
        bottom:'5%',
        fontSize:'90%'
      }}
      name={'icon-moon'} />
    <motion.span
      style={{
        ...starStyle,
        right:'10%',
        bottom:'40%'
      }}
      animate={animate}
      transition={transition}
    >
        <MyIcon name={'icon-sijiaoxing'} />
    </motion.span>

    <motion.span
      style={{
        ...starStyle,
        right:'40%',
        top:'10%'
      }}
      animate={animate}
      transition={{
        ...transition,
        delay:0.5
      }}
    >
        <MyIcon name={'icon-sijiaoxing'} />
    </motion.span>
  </>
}

export default MoonIcon
