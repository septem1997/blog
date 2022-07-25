import Home from '../pages'
import Gallery from '../pages/gallery'
import { proxy, subscribe, useSnapshot } from 'valtio'
import IntroSection from '../components/about/IntroSection'
import PreviewResume from '../components/resume/PreviewResume'

declare type BlogNavigationProp = {
  isMainPage:boolean,
  name: string;
  path: string;
  children: any
}
const BlogNavigationList: BlogNavigationProp[] = [
  {
    isMainPage:false,
    name: '碎笔',
    path: '/post',
    children: Home,
  }, {
    isMainPage:false,
    name: '相册',
    path: '/gallery',
    children: Gallery,
  },{
    isMainPage:true,
    name: '简历',
    path: '/resume',
    children: PreviewResume,
  }, {
    isMainPage:true,
    name: '关于',
    path: '/about',
    children: IntroSection,
  },
]
const navState = proxy({
  visible: false,
  // 维护一个冗余的route，便于和其他state在同一个tick里触发
  route: '',
  checkedPath: '',
  pageTitle: '',
})
const unsubscribe = subscribe(navState, () => {
  navState.pageTitle = BlogNavigationList.find(n => navState.route === n.path)?.name||''
},
)
const setCheckedPath = function(checkedPath: string) {
  navState.checkedPath = checkedPath
}
const setVisible = function(visible: boolean) {
  navState.visible = visible
}
const setRoute = function(route: string) {
  navState.route = route
}

const useBlogNavigation = () => {
  const snap = useSnapshot(navState)
  return {
    BlogNavigationList: BlogNavigationList,
    visible: snap.visible,
    route: snap.route,
    checkedPath: snap.checkedPath,
    pageTitle: snap.pageTitle,
    setCheckedPath: setCheckedPath,
    setRoute: setRoute,
    setVisible: setVisible,
  }
}

export {
  useBlogNavigation,
}
export type { BlogNavigationProp }

