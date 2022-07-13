import styled from 'styled-components'
import { useRef } from 'react'
import useMouse from '@react-hook/mouse-position'
import Link from 'next/link'
const SectionBox = styled.div`
  height: 50vh;
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    position: absolute;
    left: 40%;
  }
`
const FootSection = ()=>{
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  });
  return <SectionBox ref={ref}>
    <a href={'https://github.com/septem1997'}>
      访问Github
    </a>
    <Link href={'/resume'}>
      查看纸质简历
    </Link>
  </SectionBox>
}

export default FootSection
