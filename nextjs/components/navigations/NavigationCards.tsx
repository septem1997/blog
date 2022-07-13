import {
  LazyMotion,
  AnimatePresence,
  domAnimation,
  m, useAnimation, useAnimationControls, Variants,
} from 'framer-motion'
import { BlogNavigationProp, useBlogNavigation } from '../../lib/blogNavigation'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import FramerMotionVars from '../../lib/framerMotionVars'

const Card = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
  transform: translate3d(0, 0, 0);
  box-shadow: 0px -2px 10px rgba(33,33,33,0.3);
`
const CardTitle = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  left: -32px;
  width: 20px;
`
const CardBox = styled(m.div)`
  position: absolute;
  cursor: pointer;
  top: 100vh;
  transform-origin: center;
  transform: perspective(100em) scale(0.8);

  &:hover {
    .card-title {
      color: #0070f3;
    }
  }
`

const NavigationCards = function() {
  const navigation = useBlogNavigation()
  const router = useRouter()
  const [animationName, setAnimationName] = useState('slideUp')
  const vars: Variants = FramerMotionVars.NavigationVars
  const setCheckedPath = navigation.setCheckedPath
  const pushRoute = async (index: number, path: string) => {
    if (path === navigation.route) {
      navigation.setVisible(false)
      return
    }
    setCheckedPath(path)
  }
  useEffect(() => {
    if (navigation.checkedPath === '') {
      return
    }
    navigation.setVisible(false)
    navigation.setRoute(navigation.checkedPath)
    router.push(navigation.checkedPath).then(() => {
      setCheckedPath('')
    })
  }, [navigation.checkedPath])
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {navigation.visible && navigation.BlogNavigationList
          .map((props, index) =>
            <CardBox
              onClick={() => pushRoute(index, props.path)}
              key={props.name}
              initial={{
                transformPerspective: '100vh',
                scale: 0.8,
                zIndex: 10 + index,
                top: 100 + (index * 10) + 'vh',
              }}
              custom={{
                animationName: animationName,
                route: navigation.route,
                props: props,
                index: index,
                checkedPath: navigation.checkedPath,
              }}
              variants={vars}
              animate={'cardAnimate'}
              exit={'cardExit'}
            >
              <CardTitle className='card-title'>
                {props.name}
              </CardTitle>
              <Card>
                {props.children()}
              </Card>
            </CardBox>,
          )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default NavigationCards
