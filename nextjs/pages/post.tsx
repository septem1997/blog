import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'
import Link from 'next/link'
import Head from 'next/head'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

const PostWrap = styled(Scrollbars)`
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  position: relative;
  overflow: auto;
  font-family: 微软雅黑,serif;
  .header{
    position: sticky;
    top: 0;
    left: 0;
    background: #95addb;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .img-wrap{
      height: auto;
      width: 900px;
      position: relative;
    }
    img{
      height: auto;
      width: 100%;
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
    min-height: calc(100% - 270px);
    .contents{
      position: relative;
      background: white;
      display: block;
      width: 900px;
      margin: 24px auto;
      border-radius: 5px 5px 0 0;
      padding: 12px;
      .bg{
        background: #FCFCFC;
      }
      .post-row{
        height: 32px;
        display: flex;
        align-items: center;
        width: 100%;
        &:hover{
          .title{
            text-decoration:underline;
          }
        }
        .title{
          font-size: 15px;
          color: #444444;
          flex: 1;
        }
        .date{
          font-size: 12px;
          color: #9b9b9b;
          width: 122px;
        }
      }
    }
  }
`

const Post = (props:any) => {
  const {data} = useQuery(["list"])
  return (
    <PostWrap
      autoHide
      universal={true}
    >
      <Head>
        <title>碎笔</title>
      </Head>
      <div className={'header'}>
        <div className={'img-wrap'}>
          <img src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/light.jpg'}/>
        </div>
      </div>
      <div className={'body'}>
        <div className={'contents'}>
          {data.data.map((item:any,index:number) =>
            <Link key={item.title} href={`/post/${item.title}`}>

              <div className={'post-row ' + (index%2===0?'bg':'')}>
                <div className={'title'}>
                  {item.title}
                </div>
                <div className={'date'}>
                  {item.createTime.slice(0,10)} &nbsp;({item.viewNum})
                </div>
              </div>

            </Link>
          )}
        </div>
      </div>
    </PostWrap>
  );
}
export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["list"],()=>{
    return fetch('http://127.0.0.1:4080/article/list').then((res)=>{
      return res.json()
    })
  })
  return {
    props: {
      dehydrateState:dehydrate(queryClient)
    },
  }
}

export default Post
