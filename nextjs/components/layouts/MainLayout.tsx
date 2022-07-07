import {LayoutProps} from "next/dist/lib/app-layout";
import {useEffect, useState} from "react";
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
import BarbaVars from "../../lib/barbaVars";
import NavigationCards from "../navigations/NavigationCards";
import {useBlogNavigation} from "../../lib/blogNavigation";
import {useSnapshot} from "valtio";

function MainLayout({children}: LayoutProps) {
    const startIndex = 0;
    const [exitBefore, setExitBefore] = useState(true);
    const router = useRouter()
    const navigation = useBlogNavigation();
    const visibleState = useSnapshot(navigation.visibleState)
    const setNavigationVisible = navigation.setVisible
    const controls = useAnimation()
    useEffect(()=>{
        setNavigationVisible(false)
    },[router.route])
    useEffect(()=>{
        const index = navigation.BlogNavigationList
            .findIndex(n => router.route===n.path)
        if (visibleState.visible){
            controls.start({
                top:index*10+'vh',
                scale:0.8,
                borderRadius:'10px',
                zIndex:10+index,
                transition:{
                    duration:0.4
                }
            })
        }else{
            controls.start({
                top:0,
                scale:1,
                borderRadius:'0px',
                transition:{
                    duration:0.4
                }
            })
        }
    },[controls, visibleState.visible,router.route])
    const vars: Variants = BarbaVars.NavigationVars
    return (
        <div className="layout-wrap">
            <LazyMotion features={domAnimation}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={!exitBefore}>
                    <m.div
                        key={router.route}
                        animate={controls}
                        className="page-control-wrap"
                    >
                        <m.div
                            variants={vars}
                            initial="initial"
                            animate={['slideUp','scaleUp']}
                            exit={['scaleDown', 'hidden']}
                            className="page-wrap"
                        >
                            {children}
                        </m.div>
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
            <NavigationCards/>
            <MenuNavigator onClick={()=>setNavigationVisible(!visibleState.visible)} className="fixed right-0 top-0 z-20" />
        </div>
    );
}

export default MainLayout
