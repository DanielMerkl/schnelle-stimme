import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { PollContext } from '../../context/PollContext';
import { AnswerContent } from '../../types/type/AnswerContent';
import { UserContext } from '../../context/UserContext';
import { Api } from '../../utils/Api';
import { SnackbarContext } from '../../context/SnackbarContext';
import { ResultContext } from '../../context/ResultContext';
import { SubmitVoteButton } from './SubmitVoteButton';
import { useIsValidAnswer } from './useIsValidAnswer';
import { useIsMounted } from '../../utils/hook/useIsMounted';
import { ChoiceSelection } from './ChoiceSelection';
import { routes } from '../../utils/routes';
import { AlreadyParticipatedDialog } from './AlreadyParticipatedDialog';
import { Answer } from '../../types/interface/Answer';

export type SetAnswerType = Dispatch<SetStateAction<AnswerContent | null>>;

export const PollPage: FC = () => {
  const { poll, setPoll } = useContext(PollContext);
  const { user } = useContext(UserContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const { openResultPage } = useContext(ResultContext);

  const [answer, setAnswer] = useState<AnswerContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isValidAnswer = useIsValidAnswer(answer, poll?.type);
  const isMounted = useIsMounted();

  const hasAlreadySubmittedVote: boolean = useMemo((): boolean => {
    if (poll === null || user === null) {
      return false;
    }

    return poll.answers.some((answer) => {
      return answer.userId === user.uid;
    });
  }, [poll, user]);

  const handleSubmitButtonClick = async () => {
    if (user === null || poll === null || answer === null) return;

    setIsLoading(true);
    try {
      const newAnswer: Answer = {
        userId: user.uid,
        content: answer,
      };
      await Api.submitAnswer(poll.id, newAnswer);
      const updatedAnswers = [...poll.answers, newAnswer];
      setPoll({ ...poll, answers: updatedAnswers });
      openResultPage(poll.id);
    } catch (e) {
      showSnackbar(e);
    }
    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  if (poll === null) {
    return <Redirect to={routes.home} />;
  }

  if (hasAlreadySubmittedVote) {
    return (
      <AlreadyParticipatedDialog onClick={() => openResultPage(poll.id)} />
    );
  }

  return (
    <Wrapper>
      <Typography variant="h4">{poll.topic}</Typography>
      <Typography variant="body1">{poll.description}</Typography>
      <ChoiceSelection
        pollType={poll.type}
        choices={poll.choices}
        answer={answer}
        setAnswer={setAnswer}
      />
      <SubmitVoteButton
        disabled={!isValidAnswer || isLoading}
        isLoading={isLoading}
        onClick={handleSubmitButtonClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: fit-content;
  padding: 3rem 1.5rem 8rem 1.5rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(min-content, 500px);
  justify-content: center;
`;
