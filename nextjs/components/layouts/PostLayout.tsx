import { LayoutProps } from 'next/dist/lib/app-layout'
import MainLayout from './MainLayout'
import styled from 'styled-components'
import Link from 'next/link'

const PostWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: white;

  .list {
    width: 240px;
    background: #f5f7fc;
  }

  .content {
    flex: 1;
  }
`
const PostLayout = ({ children }: LayoutProps) => {
  return <PostWrap>
      <div className={'list'}>
        列表
        <div>
          <Link href={'/post/456'}>
            456
          </Link>
        </div>

        <div>

          <Link href={'/post/asd'}>
            asd
          </Link>
        </div>
      </div>

      <div className={'content'}>
        {children}
      </div>
    </PostWrap>
}
export default PostLayout
