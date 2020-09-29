// @flow strict

import React from 'react';
import type {Node} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Typography} from '@material-ui/core';
import FacebookLoginButton from 'components/shared/FacebookLoginButton.react';
import GoogleLoginButton from 'components/shared/GoogleLoginButton.react';
import TextLink from 'components/shared/TextLink.react';

import logo from 'assets/logo/logo.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    width: '70%',
    marginTop: '15px',
  },
  logo: {
    maxWidth: 150,
    margin: '10px 0 10px 0',
  },
  link: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '1rem',
  },
});

function SignInPage(): Node {
  const classes = useStyles();
  function handleFacebookLogin() {
    // TODO: Talk to auth API
  }

  function handleGoogleLogin() {
    // TODO: Talk to auth API
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom align="center" color="primary">
        FOOD WORKS
      </Typography>
      <img src={logo} alt="Food Works Logo" className={classes.logo}></img>
      <Typography variant="h6" gutterBottom={true} align="center" color="primary">
        ¡Salva comida ya y combate el desperdicio!
      </Typography>
      <FacebookLoginButton className={classes.button} onClick={handleFacebookLogin} />
      <GoogleLoginButton className={classes.button} onClick={handleGoogleLogin} />
      <TextLink className={classes.link} to="/">
        Más Opciones
      </TextLink>
    </div>
  );
}

export default SignInPage;
