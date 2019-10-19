import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  Avatar,
  Link
} from '@material-ui/core';

import Layout from '../components/layout';
import PostLink from '../components/PostLink';

import { getLatestsPosts } from '../lib/content';

const useStyles = makeStyles(() => ({
  intro: {
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  avatar: {
    height: '200px',
    width: '200px',
    marginBottom: '20px'
  },
  introDesc: {
    marginTop: '30px',
    lineHeight: '30px'
  },
  postsSection: {
    marginTop: '30px',
    marginBottom: '30px'
  }
}));

const MainPage = () => {
  const classes = useStyles();
  const posts = getLatestsPosts();

  return (
    <Layout>
      <Grid container>
        <Grid item className={classes.intro}>
          <Grid container justify='center' alignItems='center'>
            <Avatar className={classes.avatar} src='/static/myimage.jpg' />
          </Grid>
          <Typography component='div' variant='h5' align='center'>
            Full Stack Developer, CodHolic, Self-Learner, Speaker, Trainer and
            JS Enthusiastic.
          </Typography>
          <Typography component='div' variant='body1'>
            <div className={classes.introDesc}>
              Hi there, I'm Farhan, a Full Stack developer with 5 years of
              extensive front & back-end experience. I'm from Pakistan. I'm a
              self learner and self starter, back in 2014 I started learning
              PHP/MYSQL and at that time Laravel was new and hot, learned it by
              myself. Worked on many projects in Laravel and LAMP stack for US,
              UK based clients. Then back in 2017, I fall in love with JS.
              Started taking courses, from many famous authors. Learned all about React, Redux, Node,
              Express MongoDB in short all the cutting edge technologies around
              JS. Today, I'm not only working in JS, I'm sharing my knowledge by
              conducting trainings and by giving talks at local meetups.
            </div>
          </Typography>
          <Typography component='div' variant='body1'>
            <div className={classes.introDesc}>
              I have experience of working with large teams spread around the
              world and small startups to help them grow into succesful
              businesses. Now I'm working at SoftPyramid, Paksitan as a
              dedicated Senior React Developer for{' '}
              <Link href='https://www.kw.com/kw/'>Keller Williams</Link>(a
              real-estate giant in US).
            </div>
          </Typography>

          <Typography component='div' variant='body1'>
            <div className={classes.introDesc}>
              In case you want to get in touch with me, drop me a line{' '}
              <Link href='mailto:mf.tahir@outlook.com'>here</Link>
            </div>
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item md={12}>
          <Typography component='div'
            className={classes.postsSection}
            align='center'
            as='h4'
            variant='h4'
          >
            My Ramblings
          </Typography>
          {posts.map((post, i) => (
            <PostLink key={i} post={post} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default MainPage;
