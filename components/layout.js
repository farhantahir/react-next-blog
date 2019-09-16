import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import MobileMenu from "./mobileMenu";

const Layout = props => {
  return (
    <div>
      <Head>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/css/pace.css" rel="stylesheet" />
        <link href="/static/css/ionicons.min.css" rel="stylesheet" />
        <link href="/static/css/custom.css" rel="stylesheet" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/default.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"></script>
      </Head>
      <Header />
      <div className="content-body">{props.children}</div>
      <Footer />
      <MobileMenu />
    </div>
  );
};

export default Layout;
