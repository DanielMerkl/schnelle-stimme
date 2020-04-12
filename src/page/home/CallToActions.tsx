import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { CallToAction } from './CallToAction';

export const CallToActions: FC = () => {
  const [topic, setTopic] = useState('');
  const [code, setCode] = useState('');

  const handleTopicChange = (updatedTopic: string) => {
    setTopic(updatedTopic);
  };

  const handleCreateClick = () => {
    // TODO: implementieren
  };

  const handleCodeChange = (updatedCode: string) => {
    if (!Number.isNaN(Number(updatedCode)) && updatedCode.length <= 5) {
      setCode(updatedCode);
    }
  };

  const handleJoinClick = () => {
    // TODO implementieren
  };

  return (
    <Wrapper>
      <CallToAction
        headline="Erstelle eine neue Umfrage"
        inputLabel="Thema / Frage"
        inputValue={topic}
        onChange={handleTopicChange}
        buttonText="erstellen"
        onClick={handleCreateClick}
      />
      <CallToAction
        headline="Trete einer Umfrage bei"
        inputValue={code}
        inputLabel="5-stelliger Code"
        onChange={handleCodeChange}
        buttonText="beitreten"
        onClick={handleJoinClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
