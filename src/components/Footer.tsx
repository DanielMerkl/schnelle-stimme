import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../utils/routes';

export const Footer: FC = () => (
  <Wrapper>
    <GridWrapper>
      <FooterLink to={routes.imprint}>Impressum</FooterLink>
      <FooterLink to={routes.privacy}>Datenschutzrichtlinien</FooterLink>
      <FooterLink to={routes.terms}>Nutzungsbedingungen</FooterLink>
      <Typography color="textSecondary">Copyright © 2020</Typography>
    </GridWrapper>
  </Wrapper>
);

const Wrapper = styled.footer`
  background-color: #f5f5f5;
  padding: 8px 16px;
`;

const GridWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, auto);
  justify-items: center;
  align-items: center;
  @media (max-width: 620px) {
    max-width: 400px;
    grid-template-columns: auto auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: auto auto;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  &:hover {
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.87);
  }
`;
