import MyIcon from '../../../general/MyIcon'
import {motion} from 'framer-motion'
const SunIcon = ()=>{
  return <motion.div
    className={'flex items-center justify-center w-full h-full'}
    animate={{
      scale: [0.9, 1.2, 1.2, 1.2, 0.9],
      rotate: [0, 0, 90, 90, 0],
    }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
  >
    <MyIcon name={'icon-sun'} />
  </motion.div>
}

export default SunIcon
