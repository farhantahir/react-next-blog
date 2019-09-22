import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import NextLink from 'next/link';

const useStyles = makeStyles({
  container: {
    paddingTop: '50px'
  },
  title: {
    marginTop: '20px'
  },
  back: {
    display: 'flex',
    justifyItems: 'center',
    cursor: 'pointer'
  }
});

import { getPost } from '../lib/content';

const post = props => {
  const p = props.router.query.p;
  const post = getPost(p);
  const classes = useStyles();
  const html = <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }}></div>;

  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item>
          <NextLink href='/'>
            <Link className={classes.back}>
              <ArrowLeft /> Back{' '}
            </Link>
          </NextLink>
          <Typography
            as='h4'
            variant='h4'
            gutterBottom
            className={classes.title}
          >
            {post.title}
          </Typography>
          <Typography as='h6' variant='h6' gutterBottom>
            {post.date}
          </Typography>
          <Typography component='div' variant='body1' gutterBottom>
            {html}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withRouter(post);
