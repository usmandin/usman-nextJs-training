import Head from 'next/head'
import Header from '../header/header'
import Intro from '../intro/intro'

export default function Layout ({children,title}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header/>
            
            {children}

        </>
    )
}