import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

export const App: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <AppWrapper>
      <Header />
      <Content />
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
