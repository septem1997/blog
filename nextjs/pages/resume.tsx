import type { NextPage } from 'next'
import { Scrollbars } from 'react-custom-scrollbars';
import ResumePaper from '../components/resume/ResumePaper'
import dynamic from 'next/dynamic'
const DynamicStripe = dynamic(() => import('../components/about/StripeGradient'), {
  ssr: false,
})
const Resume: NextPage = () => {
  return (
    <Scrollbars
      universal={true}>
      <div style={{position:'sticky',left:0,top:0,zIndex:-1}}>
        <DynamicStripe
          style={{zIndex:-1,position:'absolute',left:0,top:0,width:'100vw',height:'100vh'}}
          colors={["#1976D2", "#03A9F4", "#2196F3"]} />
      </div>
      <div style={{zIndex:3}}>
        <ResumePaper />
      </div>
    </Scrollbars >
  )
}

export default Resume
