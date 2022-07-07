import {Variants} from "framer-motion";

const barbaVars = {
    NavigationVars: {
        initial: {
            top: '100vh',
            scale: 0.8
        },
        slideUp: {
            top: '0',
            transition: {
                delay: 0.25,
                duration: 0.4
            }
        },
        scaleUp: {
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        },
        scaleDown: {
            scale: 0.8,
            transformPerspective: '6em',
            rotateX: '1deg',
            transition: {
                delay: 0,
                duration: 0.5
            }
        },
        hidden: {
            opacity: 0,
            translateY: '100vh',
            transition: {
                delay: 0.5,
                duration: 0.4
            }
        }
    } as Variants
}
export default barbaVars
