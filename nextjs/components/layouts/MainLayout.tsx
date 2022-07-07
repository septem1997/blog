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

function MainLayout({children}: LayoutProps) {
    const startIndex = 0;
    const [exitBefore, setExitBefore] = useState(true);
    const router = useRouter()
    const [showMenu,setShowMenu] = useState(false)
    const controls = useAnimation()
    useEffect(()=>{
        if (showMenu){
            controls.start({
                scale:0.8,
                borderRadius:'10px'
            })
        }else{
            controls.start({
                scale:1,
                borderRadius:'0px'
            })
        }
    },[controls, showMenu])
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
            <MenuNavigator onClick={()=>setShowMenu(!showMenu)} className="fixed right-0 top-0" />
        </div>
    );
}

export default MainLayout
