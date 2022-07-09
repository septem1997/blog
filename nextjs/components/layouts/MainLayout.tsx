import {LayoutProps} from "next/dist/lib/app-layout";
import {useEffect, useRef, useState} from "react";
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m,
    useAnimation,
    useAnimationControls,
    Variants
} from "framer-motion";
import {useRouter} from "next/router";
import MenuNavigator from "../navigations/MenuNavigator";
import BarbaVars from "../../lib/framerMotionVars";
import NavigationCards from "../navigations/NavigationCards";
import {useBlogNavigation} from "../../lib/blogNavigation";

const usePrevState = function (value:any){
    const preRef = useRef()
    useEffect(()=>{
        preRef.current = value
    },[value])
    return preRef.current
}

function MainLayout({children}: LayoutProps) {
    const [exitBefore, setExitBefore] = useState(true);
    const router = useRouter()
    const navigation = useBlogNavigation();
    const preVisible = usePrevState(navigation.visible)
    const preRoute = usePrevState(router.route)
    const [enterAnimation, setEnterAnimation] = useState('slideEnter')
    const vars: Variants = BarbaVars.NavigationVars
    useEffect(()=>{
        if (navigation.visible) {
            navigation.setVisible(false)
        }
    },[router.route])
    useEffect(() => {
        const routeChange = router.route !== preRoute
        const animations:any = {
            '000':'slideEnter',
            '001':'slideEnter',
            '010':'scaleUp',
            '011':'',
            '100':'scaleDown',
            '101':'',
            '110':'scaleDown',
            '111':'scaleUp',
        }
        const key = [navigation.visible,!!preVisible,routeChange].map(Number).join('')
        console.log('animation key',key)
        setEnterAnimation(animations[key])
    }, [navigation.visible,router.route]);
    return (
        <div className="layout-wrap">
            <LazyMotion features={domAnimation}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={!exitBefore}>
                    <m.div
                        key={router.route}
                        custom={{
                            animationName:enterAnimation,
                            route:router.route,
                            list:navigation.BlogNavigationList
                        }}
                        variants={vars}
                        initial="initial"
                        animate={'pageEnter'}
                        exit={'pageExit'}
                        className="page-wrap"
                    >
                        {children}
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
            <NavigationCards/>
            <MenuNavigator/>
        </div>
    );
}

export default MainLayout
