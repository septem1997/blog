import {Variant, Variants} from "framer-motion";
import {NextRouter} from "next/router";
import {BlogNavigationProp} from "./blogNavigation";

const framerMotionVars = {
    NavigationVars: {
        initial: {
            top: '50',
            scale: 1,
            opacity: 1,
            transformPerspective: '100vh',
            rotateX: '0deg',
            transformOrigin: 'bottom',
        },
        fadeIn: {
            opacity: 1,
            top: '0vh',
            scale: 1,
        },
        pageEnter: (params: {
            animationName: string,
            list:BlogNavigationProp[],
            route:string
        }):Variant => {
            const topInList = params.list.findIndex( n =>n.path===params.route)*10+'vh'
            switch (params.animationName) {
                case "scaleDown":
                    return {
                        top:['0vh',topInList],
                        scale: [1,0.8],
                        borderRadius: ['0em','1em'],
                    }
                case "scaleUp":
                    return {
                        top: 0,
                        opacity: 1,
                        scale: 1,
                        borderRadius: '0px',
                    }
                case 'slideEnter':
                    return {
                        transitionTimingFunction: 'linear',
                        translateZ: ['-1px', '0px'],
                        transformPerspective: '100vh',
                        opacity: [0, 1, 1, 1],
                        scale: [0.8, 0.8, 1, 1],
                        rotateX: ['0deg', '0deg', '10deg', '0deg'],
                        top: ['50vh', '20vh', '10vh', '0vh'],
                        transformOrigin: 'bottom',
                        transition: {
                            delay: 0.5,
                            duration: 1
                        },
                        transitionEnd:{
                            transformOrigin: 'center',
                        }
                    }
            }
            throw new Error('找不到对应动画')
        },
        pageExit: (params) => {
            return {
                translateZ: ['0px', '-1px'],
                opacity: [1, 1, 1, 0],
                scale: [1, 0.9, 0.8, 0.8],
                rotateX: ['0edg', '10deg', '0deg', '0deg'],
                top: ['0vh', '0vh', '0vh', '50vh'],
                transformOrigin: 'center',
                transition: {
                    duration: 1
                }
            }
        }
    } as Variants
}
export default framerMotionVars
