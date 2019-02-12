import { withRouter } from 'next/router'

import Layout from '../components/layout'
import Aside from '../components/aside'
import Link from 'next/link'

import { getPost } from '../lib/content'

const post = props => {
    const p = props.router.query.p
    const post = getPost(p)
    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-8">
                    <article className="post post-1">
                        <header className="entry-header">
                            <h1 className="entry-title">{post.title}</h1>
                            <div className="entry-meta">
                                <span className="post-category"><a href="#">{post.category}</a></span>

                                <span className="post-date"><time className="entry-date">February 2, 2013</time></span>

                                <span className="post-author"><Link href="/about"><a>{post.author}</a></Link></span>
                            </div>
                        </header>
                        <div  className="entry-content clearfix" dangerouslySetInnerHTML={{ __html: post.bodyHtml }}></div>
                    </article>
                </main>
                <Aside/>
            </div>
        </div>
    </Layout>
}

export default withRouter(post)