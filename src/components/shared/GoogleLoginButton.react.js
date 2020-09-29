// @flow strict

import React from 'react';
import type {Node} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

import gLogo from 'assets/google/g-logo.png';

const useStyles = makeStyles({
  root: {
    background: 'none',
    backgroundColor: 'white',
    color: '#797877',
    lineHeight: 1,
    border: '1px solid #797877',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'start',
  },
});

type Props = {
  onClick: (e: SyntheticMouseEvent<>) => mixed,
  className?: string,
};

function GoogleLoginButton(props: Props): Node {
  const classes = useStyles();
  return (
    <button className={clsx(classes.root, props.className)} onClick={props.onClick}>
      <img className={classes.logo} src={gLogo} alt="Google Logo" />
      <span className={classes.text}>Continua con Google</span>
    </button>
  );
}

export default GoogleLoginButton;
