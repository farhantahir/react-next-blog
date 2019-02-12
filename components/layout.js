import Head from 'next/head'

import Header from './header'
import Footer from './footer'
import MobileMenu from './mobileMenu'

const Layout = props => {
    return <div>
        <Head>
            <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/static/css/pace.css" rel="stylesheet" />
            <link href="/static/css/ionicons.min.css" rel="stylesheet" />
            <link href="/static/css/custom.css" rel="stylesheet" />
        </Head>
        <Header />
        <div className="content-body">
            {props.children}
        </div>
        <Footer />
        <MobileMenu />
    </div>
}

export default Layout