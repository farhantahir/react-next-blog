import Layout from '../components/layout'
import Aside from '../components/aside'
import PostItem from '../components/postItem'

import { getPosts } from '../lib/content'

export default () => {
    const posts = getPosts();
    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-9">
                    { posts.map(post => <PostItem post={post} key={post.url}/>) }
                </main>
                <Aside/>
            </div>
        </div>
    </Layout>
}