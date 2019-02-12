import Link from 'next/link'

const header = () => {
    return <div className="container">
        <header id="site-header">
            <div className="row">
                <div className="col-md-4 col-sm-5 col-xs-8">
                    <div className="logo">
                        <h1><a href="index.html"><b>Farhan Tahir</b></a></h1>
                    </div>
                </div>
                <div className="col-md-8 col-sm-7 col-xs-4">
                    <nav className="main-nav" role="navigation">
                        <div className="navbar-header">
                            <button type="button" id="trigger-overlay" className="navbar-toggle">
                                <span className="ion-navicon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="cl-effect-11">
                                    <Link href="/"><a data-hover="Home">Home</a></Link>
                                </li>
                                <li className="cl-effect-11">
                                    <Link href="/blog"><a data-hover="Blog">Blog</a></Link>
                                </li>
                                <li className="cl-effect-11">
                                    <Link href="/about"><a data-hover="About">About</a></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    </div>
}

export default header