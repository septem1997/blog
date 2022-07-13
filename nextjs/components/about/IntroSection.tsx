
import dynamic from 'next/dynamic'
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TypeIt from 'typeit-react'
const DynamicStripe = dynamic(() => import('./StripeGradient'), {
  ssr: false,
})
const TypeText = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
`
const MyTypeIt = styled(TypeIt)`
  color:black;
  z-index:1;
  font-size: 58px;
  @media screen and (max-width: 420px) {
    font-size: 38px;
  }
`
const  IntroSection = ()=>{
  return <div>
    <DynamicStripe
      style={{zIndex:-1,position:'absolute',left:0,top:0,width:'100vw',height:'100vh'}}
      colors={["#c9a5eb", "#afc0f7", "#8ed3ee", "#5ea1ee"]} />
    <TypeText>
      <MyTypeIt
        options={{ loop: true }}
        getBeforeInit={(instance:any) => {
          instance.type("你好哇，我是Septem1997").pause(500)
          .type("<br>").pause(100).type('要不要向下滚动试试呢?')
            .pause(2000).delete(11).type('绅士的代码，应该像女人的裙子一样，越短越好。').pause(500)
          return instance;
        }}
      />
    </TypeText>
  </div>
}

export default IntroSection
