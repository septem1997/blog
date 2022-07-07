import Home from "../pages";
import About from "../pages/about";
import Gallery from "../pages/gallery";
import {NextPage} from "next";
import {proxy} from "valtio";

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
const visibleState = proxy({ visible: false })
const setVisible = function (visible: boolean) {
    visibleState.visible = visible
}

const useBlogNavigation = () => {
    return {
        BlogNavigationList:BlogNavigationList,
        visibleState:visibleState,
        setVisible:setVisible
    }
}

export {
    useBlogNavigation
}
export type { BlogNavigationProp };

