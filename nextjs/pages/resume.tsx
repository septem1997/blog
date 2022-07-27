import type { NextPage } from 'next'
import { Scrollbars } from 'react-custom-scrollbars';
import ResumePaper from '../components/resume/ResumePaper'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react'
import styled from 'styled-components'
import PrintIcon from '../components/resume/PrintIcon'
import { motion } from 'framer-motion'
import DownloadIcon from '../components/resume/DownloadIcon'

const DynamicStripe = dynamic(() => import('../components/about/StripeGradient'), {
  ssr: false,
})

const FloatingButton = styled(motion.div)`
  @media only screen and (max-width: 768px){
    display: none; 
  }
  position: fixed;
  top: 50%;
  right: 0;
  width: 128px;
  background: #f5ab2b;
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: translateX(54px);
  transition: transform ease 200ms;
  height: 58px;
  border-radius: 29px 0 0 29px;
  padding: 6px;
  &:hover{
    transform: translateX(0px);
  }
  .icon{
    border-radius: 50%;
    background: white;
    width: 48px;
    height: 48px;
    overflow: hidden;
  }
  .text{
    color: white;
    margin-left: 14px;
    font-size: 18px;
  }
`
const Resume: NextPage = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Scrollbars
      autoHide={true}
      universal={true}>
      <div style={{position:'sticky',left:0,top:0,zIndex:-1}}>
        <Head>
          <title>简历</title>
        </Head>
        <DynamicStripe
          style={{zIndex:-1,position:'absolute',left:0,top:0,width:'100vw',height:'100vh'}}
          colors={["#1976D2", "#03A9F4", "#2196F3"]} />
      </div>
      <FloatingButton whileHover={'hover'} onClick={handlePrint}>
        <div className={'icon'}>
          <PrintIcon />
        </div>
        <div className={'text'}>
          打印
        </div>
      </FloatingButton>
      <FloatingButton style={{top:'calc(50% + 68px)',background:'#cd570d'}} whileHover={'hover'} onClick={handlePrint}>
        <div className={'icon'}>
          <DownloadIcon />
        </div>
        <div className={'text'}>
          下载
        </div>
      </FloatingButton>
      <div ref={componentRef} style={{zIndex:3}}>
        <ResumePaper />
      </div>
    </Scrollbars >
  )
}

export default Resume
