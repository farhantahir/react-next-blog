import Link from 'next/link'

const postItem = ({ post }) => {
    return <article className="post post-1">
        <header className="entry-header">
            <h1 className="entry-title">
               <Link href={`/post?p=${post.url}`} as={`/post/${post.url}`}><a>{post.title}</a></Link>
            </h1>
            <div className="entry-meta">
                <span className="post-category"><a href="#">{post.category}</a></span>

                <span className="post-date"><time className="entry-date">{post.date}</time></span>

                <span className="post-author"><Link href="/about"><a>{post.author}</a></Link></span>

            </div>
        </header>
        <hr />
    </article>
}

export default postItem