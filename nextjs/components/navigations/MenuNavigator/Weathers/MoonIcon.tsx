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
    scale: [0.9, 1.2,0.9]
  }
  const starStyle:CSSProperties={
    position: 'absolute',
    fontSize:'25%'
  }
  return <span
    style={{
      position: 'relative',

    }}
  >
    <MyIcon
      style={{
        position:'absolute',
        left:'-0.6em',
        bottom:'-0.6em',
        fontSize:'90%'
      }}
      name={'icon-moon'} />
    <motion.span
      style={{
        ...starStyle,
        left:'0em',
        bottom:'1em'
      }}
      animate={animate}
      transition={transition}
    >
        <MyIcon name={'icon-sijiaoxing'} />
    </motion.span>

    <motion.span
      style={{
        ...starStyle,
        left:'1em',
        bottom:0
      }}
      animate={animate}
      transition={{
        ...transition,
        delay:0.5
      }}
    >
        <MyIcon name={'icon-sijiaoxing'} />
    </motion.span>
  </span>
}

export default MoonIcon
