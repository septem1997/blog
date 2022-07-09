import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m, useAnimation, AnimationControls, useAnimationControls,
} from "framer-motion";
import {Transition, TransitionGroup} from 'react-transition-group'
import {BlogNavigationProp, useBlogNavigation} from "../../lib/blogNavigation";
import styled from "styled-components";
import {useSnapshot} from "valtio";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import gsap from "gsap";

const Card = styled(m.div)`
  border: 10px;
  border-radius: 10px;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`
const CardTitle = styled.div`
  height: 28px;
  line-height: 28px;
  color: white;
  position: absolute;
  left: -64px;
  width: 64px;
`
const CardBox = styled.div`
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

const NavigationCards = function () {
    const navigation = useBlogNavigation();
    const router = useRouter()
    const [lock, setLock] = useState(false)
    useEffect(()=>{
        setLock(false)
    },[navigation.visible])
    const pushRoute = (index: number, path: string) => {
        setLock(true)
        for (let i = 0; i < navigation.BlogNavigationList.length; i++) {
            const target = '#card' + i
            if (i === index) {
                gsap.timeline().fromTo(target, {
                    zIndex: 19,
                    scale: 0.8,
                }, {
                    scale: 0.9,
                    top:'0vh',
                    rotateX:'10deg',
                    duration:0.25,
                    borderRadius:'1em',
                }).to(target,{
                    scale: 1,
                    rotateX:'0deg',
                    duration:0.25,
                    borderRadius:'0em',
                }).to(target,{
                    opacity: 0,
                    duration:0.1,
                })
            } else {
                gsap.to(target, {
                    top: 100 + index * 10 + 'vh',
                    duration: 0.25,
                })
            }
        }
        router.push(path)
        // navigation.setVisible(false)
    }
    const cardEnter = (card: HTMLElement, index: number) => {
        const props = navigation.BlogNavigationList[index]
        const inList = router.route === props.path
        if (inList) {
            gsap.fromTo(card, {
                opacity: 0,
                top: index * 10 + 'vh',
            }, {
                delay: 0.25,
                opacity: 1,
                duration: 0.25,
            })
        } else {
            gsap.to(card, {
                top: index * 10 + 'vh',
                duration: 0.25,
                delay: 0.25 + index * 0.1
            })
        }
    }
    const cardLeave = (card: HTMLElement, index: number) => {
        if (lock) {
            return
        }
        const props = navigation.BlogNavigationList[index]
        const inList = router.route === props.path
        if (inList) {
            gsap.to(card, {
                opacity: 0,
                duration: 0.25
            })
        } else {
            gsap.to(card, {
                top: 80 + index * 10 + 'vh',
                duration: 0.25,
            })
        }
    }
    return (
        <TransitionGroup>{navigation.visible && navigation.BlogNavigationList
            .map((props, index) =>
                <Transition
                    timeout={600}
                    onEnter={(card: HTMLElement) => cardEnter(card, index)}
                    onExit={(card: HTMLElement) => cardLeave(card, index)}
                    key={props.path}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                >
                    <CardBox
                        onClick={() => pushRoute(index, props.path)}
                        key={props.name}
                        id={'card' + index}
                        style={{
                            zIndex: 10 + index,
                            top: 100 + (index * 10) + 'vh'
                        }}
                    >
                        <CardTitle className="card-title">
                            {props.name}
                        </CardTitle>
                        <Card>
                            {props.children()}
                        </Card>
                    </CardBox>
                </Transition>
            )}</TransitionGroup>
    )
}

export default NavigationCards
