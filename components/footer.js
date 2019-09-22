import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    marginTop: '50px',
    marginBottom: '50px'
  }
});

const footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item>
        <Typography as='span' variant='caption'>2019 @farhantahir891</Typography>
      </Grid>
    </Grid>
  );
};

export default footer;
