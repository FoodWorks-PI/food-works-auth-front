// @flow strict

import React from 'react';
import type {Node} from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, TextField} from '@material-ui/core';
import Button from 'components/shared/Button.react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    marginTop: '15px',
  },
});

const initialState = {
  email: '',
};

function ForgotPasswordEmail(): Node {
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
      <Typography variant="h2" gutterBottom align="center" color="primary">
        FOOD WORKS
      </Typography>
      <Typography variant="h6" gutterBottom={true} align="center" color="primary">
        ¿Olvidaste tu contraseña?
      </Typography>
      <Typography variant="h9" gutterBottom align="center" color="primary">
        Ingresa tu correo y enviaremos instrucciones para cambiar tu contraseña
      </Typography>
      <form onSubmit={handleSubmit} classname={classes.form}>
        <TextField
          name="email"
          label="Correo electrónico"
          color="primary"
          value={state.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button className={classes.button} onClick={handleSubmit}>
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordEmail;
