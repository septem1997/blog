import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

const PostWrap = styled(Scrollbars)`
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  position: relative;
  overflow: auto;
  .header{
    position: sticky;
    top: 0;
    left: 0;
    background: #95addb;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    img{
      height: auto;
      width: 900px;
    }
  }
  .body{
    z-index: 2;
    position: sticky;
    left: 0;
    top: 100px;
    background: rgb(242,242,242);
    display: flex;
    width: 100%;
    min-height: calc(100vh - 270px);
    .contents{
      position: relative;
      background: white;
      display: block;
      width: 900px;
      margin: 24px auto;
      border-radius: 5px 5px 0 0;
      padding: 12px;
    }
  }
`

const Post = () => {
  return <PostWrap
    autoHide
    universal={true}
  >
    <div className={'header'}>
      <img src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/light.jpg'}/>
    </div>
    <div className={'body'}>
      <div className={'contents'}>
        asdasd
      </div>
    </div>
  </PostWrap>
}

export default Post
