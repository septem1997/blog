import styled from 'styled-components'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useBlogNavigation } from '../../lib/blogNavigation'

const Wrap =  styled(motion.div)`
  min-width: 240px;
  text-align: center;
  padding: 12px 0;
  letter-spacing: 4px;
  position: fixed;
  left: 5px;
  bottom: 5px;
  cursor: pointer;
  z-index: 20;
`
const YellowStripe = styled(motion.div)`
  background: #f7f820;
  transform: rotate(5deg);
  position: absolute;
  width: 100%;
  height: calc(100% - 24px);
  z-index: -1;
  border-radius: 4px;
`
const BlackStripe = styled(motion.div)`
  z-index: 2;
  color: white;
  background: black;
  padding: 2px 0;
  font-size: 24px;
  border-radius: 4px;
`
const NavTitle = ()=>{
  const vars = {
    hover(name:string) {
      return {
        rotate: name==='yellow'?['5deg','10deg','5deg']:['0deg','-5deg','0deg'],
        transition:{
          duration:0.5,
          times:[0,0.75,1]
        }
      }
    },
  } as Variants
  const blogNavigation = useBlogNavigation()
  return (
    <Wrap
      onClick={()=>{
        if (!blogNavigation.visible){
          blogNavigation.setVisible(true)
        }
      }}
      animate={{
        opacity:blogNavigation.visible?0:1
      }}
      whileHover={'hover'}
    >
      <YellowStripe
        variants={vars}
        custom={'yellow'}
      />
      <BlackStripe
        variants={vars}
        custom={'black'}
      >
        {blogNavigation.pageTitle}
      </BlackStripe>
    </Wrap>
  )
}

export default NavTitle
