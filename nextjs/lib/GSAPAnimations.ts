import gsap from "gsap";
import TweenVars = gsap.TweenVars;

const GSAPAnimations = {
    playPageEnterAnimation(pageNode:HTMLElement){
        return gsap.timeline().fromTo(pageNode, {
            scale: 0.8,
            rotateX:'0deg',
            zIndex:11,
            top:'80vh',
            transformOrigin: 'bottom',
            borderRadius:'1em',
        },{
            scale: 0.8,
            rotateX:'0deg',
            top:'-10vh',
            delay:0.25,
            duration:0.5
        }).to(pageNode,{
            scale: 0.9,
            top:'0vh',
            rotateX:'10deg',
            duration:0.25,
            borderRadius:'1em',
        }).to(pageNode,{
            scale: 1,
            rotateX:'0deg',
            duration:0.25,
            borderRadius:'0em',
        }).to(pageNode,{
            transformOrigin: 'center',
            duration:0,
        })
    },
    playScaleDown(node:HTMLElement,vars:TweenVars){
        return gsap.timeline().to(node,{
            scale:0.8,
            borderRadius: '1em',
            duration:0.25,
            ...vars
        }).to(node,{
            opacity:0.25
        })
    },
    playScaleUp(node:HTMLElement,vars?:TweenVars){
        return gsap.to(node,{
            opacity:1,
            scale:1,
            top:0,
            borderRadius: '0em',
            duration:0.25,
            ...vars
        })
    },
    playPageLeaveAnimation(node:HTMLElement){
        gsap.timeline().fromTo(node, {
            scale: 1,
            rotateX: '0deg',
            opacity:1,
            zIndex:10,
            top:'0vh',
            transformOrigin: 'bottom',
        },{
            borderRadius:'1em',
            scale: 1,
            rotateX: '10deg',
            duration:0.25
        }).to(node,{
            scale: 0.8,
            opacity:0.5,
            rotateX: '0deg',
            duration:0.2
        }).to(node,{
            opacity:0,
            duration:0.2
        })
    }
}
export default GSAPAnimations
