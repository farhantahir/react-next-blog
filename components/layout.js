import Head from 'next/head';
import Container from '@material-ui/core/Container';
import  Dividers from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


import Header from './header';
import Footer from './footer';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '30px'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.container}>
      <Head>
        <title>Farhan Tahir - Full Stack JS Developer</title>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/a11y-dark.min.css' rel='stylesheet'/>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/languages/javascript.min.js'></script>
        <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
      </Head>
      <Header />
      <Dividers />
      <div>{children}</div>
      <Footer />
    </Container>
  );
};

export default Layout;
