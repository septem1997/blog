import { motion, TargetAndTransition, useAnimation, Variants } from 'framer-motion'
import styles from './style.module.scss'
import styled from 'styled-components'
import { useBlogNavigation } from '../../../lib/blogNavigation'
import MyIcon from '../../general/MyIcon'

const NavButton = () => {
  const vars = {
    initial: {
      translateY: ['0em'],
    },
    slide(index: number) {
      return {
        translateY: ['1em', '0em'],
        transition:{
          delay: index * 0.1,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }
      }
    },
  } as Variants
  const blogNavigation = useBlogNavigation()
  const animate = useAnimation()
  return <div
    onClick={()=>{
      blogNavigation.setVisible(!blogNavigation.visible)
    }}
    onMouseLeave={() => {
      animate.set('initial')
      animate.stop()
    }}
    onMouseEnter={() => animate.start('slide')}
    className={styles.navBox}>
    {!blogNavigation.visible?[0, 1, 2].map(i =>
      <motion.div
        custom={i}
        key={i}
        variants={vars} initial={'initial'} animate={animate} />):
      <MyIcon name={'icon-close'} />
    }
  </div>
}

export default NavButton
