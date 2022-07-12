import Home from '../pages'
import About from '../pages/about'
import Gallery from '../pages/gallery'
import { proxy, subscribe, useSnapshot } from 'valtio'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import IntroSection from '../components/about/IntroSection'

declare type BlogNavigationProp = {
  name: string;
  path: string;
  children: any
}
const BlogNavigationList: BlogNavigationProp[] = [
  {
    name: '首页',
    path: '/',
    children: Home,
  }, {
    name: '相册',
    path: '/gallery',
    children: Gallery,
  }, {
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
    if (navState.route === '/about') {
      navState.pageTitle = '关于'
    } else {
      navState.pageTitle = '首页'
    }
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

