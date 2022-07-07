import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m, useAnimation, AnimationControls,
} from "framer-motion";
import {BlogNavigationProp, useBlogNavigation} from "../../lib/blogNavigation";
import styled from "styled-components";
import {useSnapshot} from "valtio";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

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
const CardBox = styled(m.div)`
  position: absolute;
  cursor: pointer;
  top: 100vh;
  &:hover {
    .card-title {
      color: #0070f3;
    }
  }
`
const NavigationCardItem = (props: BlogNavigationProp & {
    index: number;
    checkedPath: string;
    onCheckedPath: Function
}) => {
    const boxControl = useAnimation()
    const router = useRouter()
    useEffect(() => {
        boxControl.start({
            top: props.index * 10 + 'vh',
            transition: {
                duration: router.route === props.path ? 0 : 0.25,
                delay: 0.4 + props.index * 0.25
            }
        })
    }, [router.route])
    useEffect(() => {
        if (props.checkedPath !== '' && props.checkedPath !== props.path) {
            boxControl.start({
                top: (100 + props.index * 10) + 'vh',
                transition: {
                    duration: 0.25,
                }
            })
        }
    }, [props.checkedPath])
    return (
        <CardBox
            onClick={() => {
                props.onCheckedPath(props.path, boxControl)
            }}
            style={{zIndex: 10 + props.index}}
            key={props.name}
            initial={{
                scale:0.8,
                top: (100 + props.index * 10) + 'vh'
            }}
            animate={boxControl}
            exit={router.route === props.path ? {
                opacity: 0,
                transition: {
                    duration: 0,
                }
            } : {
                top: (100 + props.index * 10) + 'vh',
                transition: {
                    duration: 0.25,
                }
            }}
        >
            <CardTitle className="card-title">
                {props.name}
            </CardTitle>
            <Card>
                {props.children()}
            </Card>
        </CardBox>
    )
}

const NavigationCards = function ({onCardClick}: { onCardClick: Function }) {
    const navigation = useBlogNavigation();
    const visibleState = useSnapshot(navigation.visibleState)
    const [checkedPath, setCheckedPath] = useState('')
    const router = useRouter()
    return (
        <>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {visibleState.visible && navigation.BlogNavigationList.map((item, index) =>
                        <NavigationCardItem
                            onCheckedPath={async (path: string,
                                                  boxCon: AnimationControls
                            ) => {
                                if (router.route === path) {
                                    navigation.setVisible(false)
                                } else {
                                    setCheckedPath(path)
                                    await boxCon.start({
                                        zIndex: 20,
                                        scale: 0.9,
                                        top: 0,
                                        rotateX: '-1deg',
                                        transition: {
                                            duration: 1
                                        }
                                    })
                                    await boxCon.start({
                                        zIndex: 20,
                                        scale: 1,
                                        top: 0,
                                        rotateX: '0deg',
                                        transition: {
                                            duration: 1
                                        }
                                    })
                                    onCardClick(path)
                                }
                            }}
                            checkedPath={checkedPath} key={item.name} name={item.name} path={item.path} index={index}>
                            {item.children}
                        </NavigationCardItem>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </>
    )
}

export default NavigationCards
