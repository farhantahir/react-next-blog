import React from 'react';
import { Grid, Link, Typography, makeStyles, Tooltip } from '@material-ui/core';
import {
  Linkedin,
  Twitter,
  GithubBox,
  StackOverflow,
  FileAccount
} from 'mdi-material-ui';

const useStyles = makeStyles(() => ({
  profileIcon: {
    marginLeft: '10px'
  }
}));

const header = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={4}>
        <Typography component='div' as='h5' variant='h5'>
          <Link href='/' color='inherit' underline='none'>
            Farhan Tahir
          </Link>
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Grid container justify='flex-end'>
          <Grid item>
            <Tooltip title='LinkedIn'>
              <Link
                className={classes.profileIcon}
                href='https://www.linkedin.com/in/mfarhantahir/'
              >
                <Linkedin />
              </Link>
            </Tooltip>
            <Tooltip title='Twitter'>
              <Link
                className={classes.profileIcon}
                href='https://www.twitter.com/mfarhantahir891'
              >
                <Twitter />
              </Link>
            </Tooltip>
            <Tooltip title='Github'>
              <Link
                className={classes.profileIcon}
                href='https://www.github.com/farhantahir'
              >
                <GithubBox />
              </Link>
            </Tooltip>
            <Tooltip title='Stackoverflow'>
              <Link
                className={classes.profileIcon}
                href='https://stackoverflow.com/users/4770835/farhan-tahir'
              >
                <StackOverflow />
              </Link>
            </Tooltip>
            <Tooltip title='Download Resume'>
              <Link
                className={classes.profileIcon}
                target='_blank'
                href='https://drive.google.com/file/d/1z0ObwopD0-4Z-So4Dh-ero0qClGMko_B/view?usp=sharing'
              >
                <FileAccount />
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default header;
