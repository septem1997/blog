import { motion, TargetAndTransition, useAnimation, Variants } from 'framer-motion'
import styles from './style.module.scss'
import styled from 'styled-components'
import { useBlogNavigation } from '../../../lib/blogNavigation'

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
    onMouseOut={() => {
      animate.set('initial')
      animate.stop()
    }}
    onMouseOver={() => animate.start('slide')}
    className={styles.navBox}>
    {[0, 1, 2].map(i =>
      <motion.div
        custom={i}
        key={i}
        variants={vars} initial={'initial'} animate={animate} />)}
  </div>
}

export default NavButton
