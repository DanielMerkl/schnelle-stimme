import React, { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../utils/routes';

export const Header: FC = () => {
  const history = useHistory();

  let stageInfo = '';
  if (process.env.REACT_APP_STAGE !== 'production') {
    stageInfo = ' (dev)';
  }

  const handleHomeIconClick = () => {
    history.push(routes.home);
  };

  const handleTitleClick = () => {
    history.push(routes.home);
  };

  return (
    <AppBar position="static">
      <StyledToolbar variant="dense">
        <IconButton
          color="inherit"
          onClick={handleHomeIconClick}
          data-testid="home-button"
        >
          <HomeOutlined />
        </IconButton>
        <StyledTypography variant="h6" onClick={handleTitleClick}>
          Schnelle Stimme{stageInfo}
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
