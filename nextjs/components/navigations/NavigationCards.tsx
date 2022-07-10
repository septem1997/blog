import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m, useAnimation, AnimationControls, useAnimationControls, Variants,
} from "framer-motion";
import {Transition, TransitionGroup} from 'react-transition-group'
import {BlogNavigationProp, useBlogNavigation} from "../../lib/blogNavigation";
import styled from "styled-components";
import {useSnapshot} from "valtio";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import gsap from "gsap";
import FramerMotionVars from "../../lib/framerMotionVars";

const Card = styled(m.div)`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
`
const CardTitle = styled.div`
  height: 28px;
  line-height: 28px;
  color: white;
  position: absolute;
  left: -64px;
  width: 64px;
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
const Mask = styled(m.div)`
  background: rgb(14,14,14);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index:10
`

const NavigationCards = function () {
    const navigation = useBlogNavigation();
    const router = useRouter()
    const [animationName,setAnimationName] = useState('slideUp')
    const vars: Variants = FramerMotionVars.NavigationVars
    const [checkedPath,setCheckedPath] = useState('')
    useEffect(()=>{
        if (!navigation.visible){
            setCheckedPath('')
        }
    },[navigation.visible])
    const pushRoute = (index: number, path: string) => {
        if (path===router.route){
            navigation.setVisible(false)
            return
        }
        setCheckedPath(path)
        router.push(path)
    }
    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {navigation.visible&&checkedPath!==''&&<Mask
                    initial={{
                        opacity:1
                    }}
                    animate={{
                        opacity:1,
                        transition:{
                            duration:0,
                        }
                    }}
                    exit={{
                        opacity:0,
                        transition:{
                            duration:0,
                            delay:1
                        }
                    }}
                >

                </Mask>}
                {navigation.visible&&navigation.BlogNavigationList
                    .map((props, index) =>
                        <CardBox
                            onClick={() => pushRoute(index, props.path)}
                            key={props.name}
                            initial={{
                                zIndex: 10 + index,
                                top: 100 + (index * 10) + 'vh'
                            }}
                            custom={{
                                animationName:animationName,
                                route:router.route,
                                props:props,
                                index:index,
                                checkedPath:checkedPath
                            }}
                            variants={vars}
                            animate={'cardAnimate'}
                            exit={'cardExit'}
                        >
                            <CardTitle className="card-title">
                                {props.name}
                            </CardTitle>
                            <Card>
                                {props.children()}
                            </Card>
                        </CardBox>
                    )}
            </AnimatePresence>
        </LazyMotion>
    )
}

export default NavigationCards
