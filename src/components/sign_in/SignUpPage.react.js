// @flow strict

import React from 'react';
import type {Node} from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Typography, TextField} from '@material-ui/core';
import Button from 'components/shared/Button.react';
import TextLink from 'components/shared/TextLink.react';

import logo from 'assets/logo/logo.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  logo: {
    maxWidth: 150,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginTop: '20px',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '1rem 0 1rem 0',
  },
});

const initialState = {
  name: '',
  email: '',
  password: '',
};

function SignUpPage(): Node {
  const classes = useStyles();
  const [state, setState] = useState(initialState);

  function handleChange(event) {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setState((prevState) => ({...prevState, [name]: value}));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center" color="primary">
        FOOD WORKS
      </Typography>
      <img src={logo} alt="Food Works Logo" className={classes.logo}></img>
      <Typography variant="h6" align="center" color="primary">
        ¡Salva comida ya y combate el desperdicio!
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          name="name"
          label="Nombre"
          color="primary"
          value={state.name}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Correo electrónico"
          color="primary"
          value={state.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="password"
          label="Contraseña"
          type="password"
          color="primary"
          value={state.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
        <Button className={classes.button} onClick={handleSubmit}>
          Registrarme
        </Button>
      </form>
      <TextLink to="/login" className={classes.link}>
        Ya Tengo Cuenta
      </TextLink>
      <TextLink to="/sign-in" className={classes.link}>
        Más opciones
      </TextLink>
    </div>
  );
}

export default SignUpPage;
