// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  image: {
    height: 500,
    width: 500
  }
});

function SplashScreen(props) {
  const classes = props.classes;
  if (props.active) {
    return (
      <div className={classes.root} >
        <Typography type="title">
          { props.title }
        </Typography>
        <Typography type="subheading">
          { props.subtitle }
        </Typography>
        <img src="http://lorempixel.com/400/200/city/1/" className={classes.image} />
        { props.guestLoginButton }
        { props.loginButton }

      </div>
    );
  }

  return null;

}

SplashScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SplashScreen);
