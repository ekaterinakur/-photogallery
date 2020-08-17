import React, { useState } from 'react';

import Header from './../components/Header';
import { Container } from '@material-ui/core';
import useStyles from './../styles';

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <main>
        <Container maxWidth='md' className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
}
