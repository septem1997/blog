import '../assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import MainLayout from "../components/layouts/MainLayout";
import { ReactElement, ReactNode,useState } from 'react'
import { NextPage } from 'next'
import {QueryClientProvider,Hydrate,QueryClient} from "@tanstack/react-query"
// todo 修改全局滚动条
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps, router}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
  const [queryClient] = useState(()=>new QueryClient())
  console.log("pageProps.dehydrateState",pageProps.dehydrateState)
  return (<QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydrateState}>
      {getLayout(<Component {...pageProps} />)}
    </Hydrate>
  </QueryClientProvider>)
}

export default MyApp
