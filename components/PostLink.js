import React from 'react';
import NextLink from 'next/link';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  postLink: {
    margin: '20px 0',
    cursor: 'pointer'
  },
  postTitle: {
    '&:hover': {
      fontWeight: 600
    }
  },
  postDate: {
    fontSize: '1rem'
  }
}));

const PostLink = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.postLink}>
        <Grid item md={12}>
          <NextLink href={`/post?p=${post.url}`} as={`/post/${post.url}`}>
            <Typography as='h5' variant='h5'>
              <Link
                component='div'
                underline='none'
                color='primary'
                className={classes.postTitle}
              >
                <Grid container>
                  <Grid item md={2}>
                    <Typography
                      as='span'
                      color='textSecondary'
                      className={classes.postDate}
                    >
                      {post.date}
                    </Typography>
                  </Grid>
                  <Grid item md={10}>
                    {post.title}
                  </Grid>
                </Grid>
              </Link>
            </Typography>
          </NextLink>
        </Grid>
      </Grid>
    </>
  );
};

export default PostLink;
