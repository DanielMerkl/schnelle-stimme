import React, { FC, useEffect } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../utils/routes';
import { Firebase } from '../Firebase';

export const Header: FC = () => {
  const history = useHistory();

  useEffect(() => {
    console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    console.log('process.env.REACT_APP_STAGE: ', process.env.REACT_APP_STAGE);
    Firebase.auth()
      .signInAnonymously()
      .then((user) => {
        console.log('user: ', user);
      });
  }, []);

  const handleHomeIconClick = () => {
    history.push(routes.home);
  };

  const handleTitleClick = () => {
    history.push(routes.home);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar variant="dense">
        <IconButton color="inherit" onClick={handleHomeIconClick}>
          <HomeOutlined />
        </IconButton>
        <StyledTypography variant="h6" onClick={handleTitleClick}>
          Schnelle Stimme (Stage: {process.env.REACT_APP_STAGE})
        </StyledTypography>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)`
  display: grid;
  grid-template-columns: 48px 1fr 48px;
`;

const StyledTypography = styled(Typography)`
  cursor: pointer;
  margin: auto;
`;
