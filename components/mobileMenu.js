const mobileMenu = () => {
    return <div className="overlay overlay-hugeinc">
        <button type="button" className="overlay-close"><span className="ion-ios-close-empty"></span></button>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="full-width.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>
}

export default mobileMenu