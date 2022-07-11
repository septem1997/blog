import '../assets/styles/globals.scss'
import type {AppProps} from 'next/app'
import MainLayout from "../components/layouts/MainLayout";

// todo 修改全局滚动条

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp
