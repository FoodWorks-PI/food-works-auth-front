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
  NwPassword: '',
  cPassword: '',
};

function ForgotPasswordChange(): Node {
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
        Cambia tu contraseña
      </Typography>
      <Typography variant="h9" gutterBottom align="center" color="primary">
        Ingresa una nueva contraseña
      </Typography>
      <form onSubmit={handleSubmit} classname={classes.form}>
        <TextField
          name="NwPassword"
          label="Nueva contraseña"
          color="primary"
          value={state.NwPassword}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          name="cPassword"
          label="Confirmar contraseña"
          color="primary"
          value={state.cPassword}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button className={classes.button} onClick={handleSubmit}>
          Actualizar
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordChange;
