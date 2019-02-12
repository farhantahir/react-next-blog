import Layout from '../components/layout'

export default () => {
    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-12">
                    <h1 className="page-title">About Me</h1>
                    <article className="post">
                        <div className="entry-content clearfix">
                            <figure className="img-responsive-center">
                                <img className="img-responsive img-circle" width="300" height="300" src="/static/img/farhantahir.jpg" alt="Farhan Tahir" />
                            </figure>


                            <p className="text-center">I am a Full Stack Developer a wearer of many hats, Code-Holic, Self-Learner, JS Enthusiastic and Open Source veteran.</p>
                            <p className="text-center">In 2014 I got interested in development by learning PHP and MySQL. I am a self-taught web developer, learnt about Laravel Framework and had been using it for developing and managing large scale applications. I always had the urge to learn new technologies. So, back in 2017, I learnt JavaScript by himself and fell in love with it. For this purpose I took many courses in JS, React, Redux, ES6 and modern cutting-edge technologies around JavaScript.
The unique thing in him is that he is a self-taught person and always keep himself ready to take new challenges.</p>
                            <p className="text-center">Currently, I'm working as Senior Javascript Developer (React.js) @ Softpyramid.</p>
                            <div className="height-40px"></div>
                            <h2 className="title text-center">Drop me a line</h2>
                            <ul className="social">
                                <li className="twitter"><a href="https://github.com/farhantahir"><span className="ion-social-github"></span></a></li>
                                <li className="twitter"><a href="https://twitter.com/farhantahir891"><span className="ion-social-twitter"></span></a></li>
                                <li className="twitter"><a href="https://www.linkedin.com/in/mfarhantahir/"><span className="ion-social-linkedin"></span></a></li>
                                <li className="twitter"><a href="https://stackoverflow.com/users/4770835/farhan-tahir"><span className="ion-link"></span></a></li>
                                <li className="twitter"><a href="mailto:mf.tahir@outlook.com"><span className="ion-at"></span></a></li>
                            </ul>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </Layout>
}