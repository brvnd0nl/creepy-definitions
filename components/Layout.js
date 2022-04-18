import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Header from './Header'

const Layout = ({children, pagina}) => {
    return(
        <>
            <Head>
                <title>Creepy Definitions</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <Script src="https://kit.fontawesome.com/4aa328b7bd.js" crossOrigin='anonymous'></Script>
            </Head>
            <Header pagina={pagina} />
            {children}
        </>
    );
};

export default Layout;