import { LayoutProps } from 'next/dist/lib/app-layout'
import Link from 'next/link'
import { NextRouter } from 'next/router'

const Post = ({children}: LayoutProps)=>{
  return <div>
    zzz
    {children}
  </div>
}
export default Post
