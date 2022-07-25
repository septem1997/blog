import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'
import Head from 'next/head'
const ContentWrap = styled(Scrollbars)`
  background: #e6e6e6;
  position: relative;
  overflow: auto;
  font-family: 微软雅黑,serif;
  .main{
    padding: 36px;
    width: 900px;
    margin: 36px auto;
    background: white;
    p{
      margin-top: 16px;
    }
    h1{
      font-size: 28px;
      margin-bottom: 24px;
    }
    .time{
      text-align: right;
      margin-top: 24px;
      color: #999999;
      font-size: 14px;
    }
  }
`
const PostByTitle = (props:any)=>{
  return <ContentWrap
    autoHide
    universal={true}
  >

    <Head>
      <title>{props.json.data.title}</title>
    </Head>
    <div className={'main'}>
      <h1>
        {props.json.data.title}
      </h1>
      <div dangerouslySetInnerHTML={{__html:props.json.data.content}}>
      </div>
      <div className={'time'}>
        发表于 {props.json.data.createTime}
      </div>
    </div>
  </ContentWrap>
}
export async function getServerSideProps(context:any) {
  const title = context.params.title
  const res = await fetch('http://localhost:8888/api/article/detail?title='+title)
  const json = await res.json()
  return {
    props: {
      json
    },
  }
}
export default PostByTitle
