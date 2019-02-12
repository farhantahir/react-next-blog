import Layout from '../components/layout'
import Aside from '../components/aside'


export default () => {
    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-8">
                    <article className="post post-1">
                        <header className="entry-header">
                            <h1 className="entry-title">Adaptive Vs. Responsive Layouts And Optimal Text Readability</h1>
                            <div className="entry-meta">
                                <span className="post-category"><a href="#">Web Design</a></span>

                                <span className="post-date"><a href="#"><time className="entry-date" datetime="2012-11-09T23:15:57+00:00">February 2, 2013</time></a></span>

                                <span className="post-author"><a href="#">Albert Einstein</a></span>

                                <span className="comments-link"><a href="#">4 Comments</a></span>
                            </div>
                        </header>
                        <div className="entry-content clearfix">
                            <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                            <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                            <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                            <p>Responsive web design offers us a way forward, finally allowing us to design for the ebb and flow of things. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                        </div>
                    </article>
                </main>
                <Aside/>
            </div>
        </div>
    </Layout>
}