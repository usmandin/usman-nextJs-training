import Head from 'next/head'
import Header from '../header/header'
import Intro from '../Intro/Intro'

export default function Layout ({
    title = 'Home Page',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header/>

            <div className="container">
                <Intro>The React Framework for Production</Intro>
            </div>
        </div>
    )
}