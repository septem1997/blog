import {LayoutProps} from "next/dist/lib/app-layout";
import {useEffect, useRef, useState} from "react";
import {Transition, TransitionGroup} from 'react-transition-group'
import {useRouter} from "next/router";
import MenuNavigator from "../navigations/MenuNavigator";
import NavigationCards from "../navigations/NavigationCards";
import {useBlogNavigation} from "../../lib/blogNavigation";
import {useSnapshot} from "valtio";
import gsap from "gsap";
import GSAPAnimations from "../../lib/GSAPAnimations";

function MainLayout({children}: LayoutProps) {
    const router = useRouter()
    const navigation = useBlogNavigation();
    const visibleState = useSnapshot(navigation.visibleState)
    const setNavigationVisible = navigation.setVisible
    const TIMEOUT = 1.25 * 1000
    const transitionRef = useRef(null)
    const newPageEnter = async (node: HTMLElement) => {
        console.log('newPageEnter',visibleState.visible);
        debugger
        if (visibleState.visible) {
            gsap.timeline().fromTo(node, {
                opacity: 0,
            }, {
                opacity: 0,
                duration: 0.5
            }).to(node,{
                opacity: 1,
                duration:0.1
            })
        } else {
            GSAPAnimations.playPageEnterAnimation(node)
        }
    }
    const oldPageLeave = (node: HTMLElement) => {

        // todo 且在里面
        if (visibleState.visible) {
            gsap.to(node, {
                top:'100vh',
                opacity: 0
            })
        } else {
            GSAPAnimations.playPageLeaveAnimation(node)
        }
    }
    useEffect(() => {
        console.log('route change with nav',visibleState.visible)
        if (visibleState.visible) {
            setNavigationVisible(false)
        }
    }, [router.route])
    useEffect(() => {
        console.log('scale',visibleState.visible)
        if (visibleState.visible){
            const index = navigation.BlogNavigationList
                .findIndex(n => router.route === n.path)
            const page = (transitionRef.current as any).firstChild.firstChild
            if (index >= 0) {
                if (visibleState.visible) {
                    GSAPAnimations.playScaleDown(page, {
                        top: index * 10 + 'vh',
                        zIndex: 10 + index,
                    })
                } else {
                    GSAPAnimations.playScaleUp(page)
                }
            } else {
                // todo 往下隐藏
            }
        }else{

        }
    }, [visibleState.visible])
    return (
        <div
            ref={transitionRef}
            className="layout-wrap">
            <TransitionGroup>
                <Transition
                    timeout={TIMEOUT}
                    onEnter={newPageEnter}
                    onExit={oldPageLeave}
                    key={router.route}
                >
                    <div
                        className={'page-wrap'}
                        data-path={router.route}>
                        {children}
                    </div>
                </Transition>
            </TransitionGroup>
            <NavigationCards/>
            <MenuNavigator onClick={() => setNavigationVisible(!visibleState.visible)}
                           className="fixed right-0 top-0 z-20"/>
        </div>
    );
}

export default MainLayout
