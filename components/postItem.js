const postItem = ({ post }) => {
    return <article className="post post-1">
        <header className="entry-header">
            <h1 className="entry-title">
                <a href={post.url}>{post.title}</a>
            </h1>
            <div className="entry-meta">
                <span className="post-category"><a href="#">{post.category}</a></span>

                <span className="post-date"><a href="#"><time className="entry-date">{post.date}</time></a></span>

                <span className="post-author"><a href="/about">{post.author}</a></span>

            </div>
        </header>
        <hr />
    </article>
}

export default postItem