import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m, useAnimation,
} from "framer-motion";
import {BlogNavigationProp, useBlogNavigation} from "../../lib/blogNavigation";
import styled from "styled-components";
import {useSnapshot} from "valtio";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Card = styled.div`
  border: 10px;
  border-radius: 10px;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  transform: scale(0.8);
  transform-origin: 0 0 0
`

const ListWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`
const CardTitle = styled.div`
  height: 28px;
  line-height: 28px;
  color: white;
  position: absolute;
  left: -64px;
`
const NavigationCardItem = (props: BlogNavigationProp & {
    index: number
}) => {
    const control = useAnimation()
    const router = useRouter()
    useEffect(() => {
        control.start({
            top: 10+props.index * 10 + 'vh',
            transition: {
                duration: router.route===props.path?0:0.25,
                delay: 0.4+props.index * 0.25
            }
        })
    },[router])
    return (
        <m.div
            style={{
                position: "absolute",
                left: '10vw',
                zIndex:10+props.index
            }}
            key={props.name}
            initial={{
                top: (100+props.index * 10) + 'vh'
            }}
            animate={control}
            exit={router.route===props.path?{
                opacity:0,
                transition: {
                    duration: 0,
                }
            }:{
                top: (100+props.index * 10) + 'vh',
                transition: {
                    duration: 0.25,
                }
            }}
        >
            <CardTitle>
                {props.name}
            </CardTitle>
            <Card>
                {props.children()}
            </Card>
        </m.div>
    )
}

const NavigationCards = function () {
    const navigation = useBlogNavigation();
    const visibleState = useSnapshot(navigation.visibleState)
    return <ListWrapper>
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {visibleState.visible && navigation.BlogNavigationList.map((item, index) =>
                    <NavigationCardItem key={item.name} name={item.name} path={item.path} index={index}>
                        {item.children}
                    </NavigationCardItem>
                )}
            </AnimatePresence>
        </LazyMotion>
    </ListWrapper>
}

export default NavigationCards
