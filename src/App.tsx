import React, { FC } from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

export const App: FC = () => (
  <AppWrapper>
    <Header />
    <Content />
    <Footer />
  </AppWrapper>
);

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
