import Home from "../pages";
import About from "../pages/about";
import Gallery from "../pages/gallery";
import {NextPage} from "next";
import {proxy, useSnapshot} from "valtio";
import {useEffect} from "react";
import {useRouter} from "next/router";

declare type BlogNavigationProp = {
    name:string;
    path:string;
    children:any
}
const BlogNavigationList:BlogNavigationProp[] = [
    {
        name:'首页',
        path:'/',
        children:Home
    },{
        name:'关于',
        path:'/about',
        children:About
    },{
        name:'相册',
        path:'/gallery',
        children:Gallery
    }
]
const navState = proxy({
    visible: false,
    // 维护一个冗余的route，便于和其他state在同一个tick里触发
    route:''
})
const setVisible = function (visible: boolean) {
    navState.visible = visible
}
const setRoute = function (route: string) {
    navState.route = route
}

const useBlogNavigation = () => {
    const router = useRouter();
    useEffect(()=>{
        if (navState.route !== router.route){
            console.log('初始化路由',router.route)
            navState.route = router.route
        }
    },[])
    useEffect(()=>{
        if (navState.route !== router.route){
            navState.route = router.route
        }
    },[router.route])
    const snap = useSnapshot(navState)
    return {
        BlogNavigationList:BlogNavigationList,
        visible:snap.visible,
        route:snap.route,
        setRoute:setRoute,
        setVisible:setVisible
    }
}

export {
    useBlogNavigation
}
export type { BlogNavigationProp };

