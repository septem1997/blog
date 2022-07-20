import styled from 'styled-components'
import { motion, MotionValue, ScrollMotionValues, useInView, useMotionValue, useViewportScroll } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
const CareerHead = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100vw;
  text-align: center;
`
const HeadTitle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size:48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  height: calc(300vh - 100px);
  width: 100%;
  background: #f1efed;
  position: relative;
  border-top: 1px solid black;
`
const CareerBlock = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 300px);
  border-top: 1px solid black;
  background:white;
  position: absolute;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;;
  grid-template-rows: 100px auto;
  justify-items: center;
  align-items: center;
  font-size: 20px;
  .content{
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 28px;
    font-size: 16px;
  }
  .skills{
    align-items: center;
    img{
      width: 82px;
      height: 82px;
    }
  }
  .skills,.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100px 32px auto;
    .job{
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .skills{
      display: none;
    }
    .content{
      padding: 0 12px;
      font-size: 14px;
    }
  }
`
const BlockWrap = styled.div`
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  overflow: hidden;
`
const useScrollTop = (index:number,y:number,screenHeight:number)=>{
  const finalY = useMotionValue(index*100)
  const blockHeight = screenHeight - 400
  const min = screenHeight+index*blockHeight
  const max = min+blockHeight
  if (y<min){
    finalY.set(screenHeight-100-(3-index)*100)
  }else if (y>=min&&y<=max){
    const diff = y-min
    finalY.set(screenHeight-100-(3-index)*100 - diff)
  }else if (y > max){
    finalY.set(index*100)
  }
  return finalY
}
const CareerSection = ({pageY}:{pageY:MotionValue<number>})=>{
  const [y,setY] = useState(0)
  const windowSize = useWindowSize()
  const TitleSize = useMotionValue('48px')
  const TitleHeight = useMotionValue(100)
  useEffect(()=>{
    pageY.onChange((y)=>{
      const screenHeight = windowSize.height
      setY(y)
      const limit = 2*screenHeight - 400
      let percent = 1
      if (y<screenHeight){
        percent = 1
      }else if (y>=screenHeight&&y<=limit){
        percent = 1-(y-screenHeight)/(screenHeight - 400)
      }else{
        percent = 0
      }
      TitleSize.set(48+96*percent+'px')
      TitleHeight.set(100+percent*(screenHeight-400))
    })
  },[TitleHeight, TitleSize, pageY, windowSize.height])
  const blockScroll1 = useScrollTop(0,y,windowSize.height)
  const blockScroll2 = useScrollTop(1,y,windowSize.height)
  const blockScroll3 = useScrollTop(2,y,windowSize.height)
  return<Container>
    <CareerHead>
      <HeadTitle style={{fontSize:TitleSize,height:TitleHeight}}>
        CAREER
      </HeadTitle>
    </CareerHead>
    <BlockWrap>
      <CareerBlock style={{top:blockScroll1}} >
        <div className={'time'}>
          2017.07 - 2018.06
        </div>
        <div className={'company-name'}>
          小笋科技(深圳)有限公司
        </div>
        <div className={'job'}>
          全栈开发工程师
        </div>
        <div className={'content'}>
          <div>
            岗位职责：负责公司共享单车小程序、微信公众号和商家运营推广平台的开发
          </div>
          <ul>
            <li>基于WebSocket开发了客服系统(web端和小程序端)，可发送图片、语音和位置，具有聊天记录本地缓存和线上同步等功能</li>
            <li>利用JAVA反射和注解实现了前端html代码自动生成，减少此类重复繁琐的开发工作，让团队更专注于其他特殊需求</li>
            <li>基于POI和JAVA反射技术实现了excel表格导出自动化工具，市场部人员无需了解sql知识即可根据自己需求导出表格数据，极大减少繁杂多样的sql查询需求工作</li>
          </ul>
        </div>
        <motion.div className={'skills'}>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{opacity:0}}
            src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/mysql.png'} />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{opacity:0}}
            src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/miniapp.png'} />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{opacity:0}}
            src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/java.png'} />
        </motion.div>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll2}} >
        <div className={'time'}>
          2018.07 - 2019.02
        </div>
        <div className={'company-name'}>
          珠海金刚科技有限公司
        </div>
        <div className={'job'}>
          全栈开发工程师
        </div>
        <div className={'content'}>
          <div>
            岗位职责：主导赌场账房系统的前端开发，并负责数据报表统计导出相关后端业务
          </div>
          <ul>
            <li>以非侵入式方式重写ajax请求，添加了拦截器，复用代码，提高接口调用开发效率</li>
            <li>完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本</li>
            <li>改进前端框架，独立编写了国际化多语言模块，使得公司产品可面向海外用户</li>
            <li>改进数据报表导出功能，利用webSocket技术分离了数据报表导出等耗时操作</li>
          </ul>
        </div>
        <motion.div className={'skills'}>
          这里放些技术栈的logo，可以再加些动效
        </motion.div>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll3}} >
        <div className={'time'}>
          2019.03 - 2020.04<br/>2021.07 - 2022.05
        </div>
        <div className={'company-name'}>
          珠海新海通电子商务有限公司
        </div>
        <div className={'job'}>
          Web前端工程师
        </div>
        <div className={'content'}>
          这里写项目经历
        </div>
        <motion.div className={'skills'}>
          这里放些技术栈的logo，可以再加些动效
        </motion.div>
      </CareerBlock>
    </BlockWrap>
  </Container>
}
export default CareerSection
