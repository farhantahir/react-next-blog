import Layout from '../components/layout'
import Aside from '../components/aside'
import PostItem from '../components/postItem'
import { getLatestsPosts } from '../lib/content'


export default () => {
    const posts = getLatestsPosts();
    return <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Hi there :) </h1>
                    <p>I am Farhan Tahir a Full Stack Developer, Wearer of many hats, Code-Holic, Self-Learner, JS Enthusiastic and Open Source veteran.</p>
                    <p>I'm always up for learning new technologies and the best way to learn and is to write about it. Thus, here I write about what I have learned.</p>
                </div>
            </div>
            <hr />
            <br />
            <div className="row">
                <main className="col-md-9">
                    <h2>My Latest Posts</h2>
                    { posts.map(post => <PostItem post={post} key={post.url} />) }
                </main>
                <Aside/>
            </div>
        </div>
    </Layout>
}