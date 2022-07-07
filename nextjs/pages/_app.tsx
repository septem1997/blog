import '../assets/styles/globals.css'
import type {AppProps} from 'next/app'
import MainLayout from "../components/layouts/MainLayout";



function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp
