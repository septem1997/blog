import '../assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import MainLayout from "../components/layouts/MainLayout";
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

// todo 修改全局滚动条
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps, router}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
