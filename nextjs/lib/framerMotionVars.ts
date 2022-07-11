import {Variant, Variants} from "framer-motion";
import {BlogNavigationProp} from "./blogNavigation";

const framerMotionVars = {
    NavigationVars: {
        initial: {
            top: '100vh',
            scale: 1,
            opacity: 0,
            transformPerspective: '100vh',
            rotateX: '0deg',
            transformOrigin: 'center bottom',
        },
        cardAnimate(params:{
            animationName: string,
            props:BlogNavigationProp,
            index:number,
            route:string
        }){
            const topInList = params.index*10+'vh'
            const routeInList = params.route===params.props.path
            switch (params.animationName){
                case 'slideUp':{
                    return routeInList?{
                        top: [topInList,topInList],
                        zIndex:10+params.index,
                        opacity:[0,1],
                        transition:{
                            transition:0.25,
                            delay:0.25*(params.index+1),
                        }
                    }:{
                        top: topInList,
                        zIndex:10+params.index,
                        transition:{
                            transition:0.25,
                            delay:0.25*(params.index+1),
                        }
                    }
                }
            }
        },
        cardExit(params:{
            animationName: string,
            props:BlogNavigationProp,
            index:number,
            route:string,
            checkedPath:string
        }){
            const topInList = params.index*10+'vh'
            const routeInList = params.route===params.props.path
            const pathInList = params.checkedPath===params.props.path
            if (pathInList){
                return {
                    zIndex:[19,19,19,19,19],
                    opacity:[1,1,1,1,0],
                    scale: [0.8,0.8, 1, 1,1],
                    rotateX: ['0deg','0deg', '10deg', '0deg','0deg'],
                    top: [topInList, '0vh', '0vh', '0vh','0vh'],
                    transition: {
                        duration: 0.7,
                        times:[0,2/7,4/7,5/7,1]
                    },
                }
            }else{
                if (routeInList){
                    return {
                        opacity:0,
                        transition:{
                            duration:0.1,
                        }
                    }
                }else{
                    return {
                        zIndex: -1,
                        top:[topInList,'100vh'],
                        transition:{
                            duration:0.25,
                        }
                    }
                }
            }
        },
        pageEnter: (params: {
            animationName: string,
            list:BlogNavigationProp[],
            route:string
        }):Variant => {
            const index = params.list.findIndex( n =>n.path===params.route)
            const topInList = index*10+'vh'
            switch (params.animationName) {
                case "fadeIn":{
                    return {
                        opacity:[0,1],
                        top: [0,0],
                        scale: [1,1],
                        borderRadius: '0px',
                        transition: {
                            delay:0.4,
                            duration:0,
                        },
                    }
                }
                case "scaleDown":
                    return {
                        zIndex:10+index,
                        top:['0vh',topInList],
                        opacity:[1,1],
                        scale: [1,0.8],
                        borderRadius: ['0px','10px'],
                        transformOrigin: 'center center',
                        transition: {
                            duration: 0.25
                        }
                    }
                case "scaleUp":
                    return {
                        top: 0,
                        opacity: 1,
                        scale: 1,
                        borderRadius: '0px',
                        transition: {
                            duration: 0.25
                        },
                        transitionEnd:{
                            transformOrigin: 'center center',
                            transformPerspective: '0',
                        },
                    }
                case 'slideEnter':
                    return {
                        transitionTimingFunction: 'linear',
                        transformPerspective: ['100vh','100vh','100vh','100vh'],
                        opacity: [0, 1, 1, 1],
                        scale: [0.8, 0.8, 1, 1],
                        borderRadius:['10px','10px','10px','0px'],
                        rotateX: ['0deg', '0deg', '10deg', '0deg'],
                        top: ['50vh', '20vh', '10vh', '0vh'],
                        transformOrigin: 'center bottom',
                        transition: {
                            delay: 0.5,
                            duration: 1
                        },
                        transitionEnd:{
                            transformOrigin: 'center center',
                            transformPerspective: '0',
                        }
                    }
            }
            throw new Error('找不到对应动画')
        },
        pageExit: (params) => {
            if (params.checkedPath!==''){
                return {
                    top:'100vh',
                    transition:{
                        duration:0.25,
                    }
                }
            }else{
                return {
                    opacity: [1, 1, 1, 0],
                    scale: [1, 0.9, 0.8, 0.8],
                    borderRadius:['0px','10px','10px','10px'],
                    transformPerspective: ['100vh','100vh','100vh','100vh'],
                    rotateX: ['0edg', '10deg', '0deg', '0deg'],
                    top: ['0vh', '0vh', '0vh', '50vh'],
                    transformOrigin: 'center center',
                    transition: {
                        duration: 1
                    }
                }
            }
        }
    } as Variants
}
export default framerMotionVars
