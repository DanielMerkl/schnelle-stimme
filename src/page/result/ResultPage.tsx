import React, { FC, useContext, useMemo } from 'react';
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { ResultContext } from '../../context/ResultContext';
import { ChoiceId } from '../../types/type/ChoiceId';
import { useAnswerCount } from './useAnswerCount';
import { ChoiceResult } from './ChoiceResult';
import { routes } from '../../utils/routes';
import { InvitationCode } from '../../components/InvitationCode';

export const ResultPage: FC = () => {
  const { result } = useContext(ResultContext);

  const answerCount: Map<ChoiceId, number> = useAnswerCount(result);
  const totalNumberOfVotes: number = useMemo(() => {
    let total = 0;
    answerCount.forEach((numberOfVotes) => {
      total += numberOfVotes;
    });
    return total;
  }, [answerCount]);

  if (result === null) {
    return <Redirect to={routes.home} />;
  }

  return (
    <Wrapper>
      <Typography variant="h4">{result.topic}</Typography>
      {result.description && <Typography>{result.description}</Typography>}
      {result.choices.map((choice) => (
        <ChoiceResult
          key={choice.id}
          text={choice.text}
          numberOfVotes={answerCount.get(choice.id) ?? 0}
          totalNumberOfVotes={totalNumberOfVotes}
        />
      ))}
      <Typography>Anzahl der Teilnehmer: {result.answers.length}</Typography>
      <Divider />
      <InvitationCode code={result.invitationCode} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: fit-content;
  justify-content: center;
  padding: 3rem 1rem 5rem 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(min-content, 600px);
`;
