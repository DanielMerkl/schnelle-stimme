import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

export const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
});
