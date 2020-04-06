import React, { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { routes } from '../utils/routes';

export const Header: FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleHomeIconClick = () => {
    history.push(routes.home);
  };

  const handleTitleClick = () => {
    history.push(routes.home);
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={styles.toolBar} variant="dense">
        <IconButton color="inherit" onClick={handleHomeIconClick}>
          <HomeOutlined />
        </IconButton>
        <Typography
          className={styles.typography}
          variant="h6"
          onClick={handleTitleClick}
        >
          Schnelle Stimme
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  toolBar: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr 48px',
  },
  typography: {
    cursor: 'pointer',
    margin: 'auto',
  },
});
