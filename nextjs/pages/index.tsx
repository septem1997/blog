import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import styled from 'styled-components'
const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  .list{
    display: flex;
    flex-direction: column;
  }
`
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Page>
        <div className={'list'}>

        </div>
        <div className={'content'}>

        </div>
      </Page>
    </div>
  )
}

export default Home
