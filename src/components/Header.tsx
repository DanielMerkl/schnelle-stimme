import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { routes } from '../utils/routes';
import { makeStyles } from '@material-ui/core/styles';

export const Header = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleHomeIconClick = () => {
    history.push(routes.home);
  };

  const handleTitleClick = () => {
    history.push(routes.home);
  };

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <IconButton color="inherit" onClick={handleHomeIconClick}>
        <HomeOutlined />
      </IconButton>
      <Toolbar className={styles.toolBar}>
        <Typography variant="h6" onClick={handleTitleClick}>
          Schnelle Stimme
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  appBar: {
    padding: '0px 8px',
    display: 'grid',
    gridTemplateColumns: '48px 1fr 48px',
  },
  toolBar: {
    margin: 'auto',
  },
});
