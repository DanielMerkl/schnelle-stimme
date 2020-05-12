import React, { FC } from 'react';
import { Typography, useTheme } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  text: string;
  numberOfVotes: number;
  totalNumberOfVotes: number;
}

export const ChoiceResult: FC<Props> = ({
  text,
  numberOfVotes,
  totalNumberOfVotes,
}) => {
  const theme = useTheme();

  const percentage =
    (totalNumberOfVotes === 0 ? 0 : numberOfVotes / totalNumberOfVotes) * 100;
  const percentageString = percentage.toFixed(2).replace('.', ',');

  return (
    <Wrapper>
      <Typography noWrap>{text}</Typography>
      <PercentageDisplay>{percentageString} %</PercentageDisplay>
      <Typography>({numberOfVotes})</Typography>
      <OuterBar backgroundColor={theme.palette.primary.main}>
        <InnerBar
          data-testid="inner-bar"
          percentage={percentage}
          backgroundColor={theme.palette.primary.main}
        />
      </OuterBar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 65px auto; // 65px is the approximated width needed to display "100,00 %"
`;

const PercentageDisplay = styled(Typography)`
  justify-self: end;
`;

interface OuterBarProps {
  backgroundColor: string;
}

const OuterBar = styled.div<OuterBarProps>`
  grid-column: span 3;
  border: ${(props) => props.backgroundColor} solid 1px;
  border-radius: 1rem;
  height: 1rem;
`;

interface InnerBarProps {
  percentage: number;
  backgroundColor: string;
}

const InnerBar = styled.div<InnerBarProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1rem;
  height: 100%;
  width: ${(props) => props.percentage}%;
  transition: width 500ms ease-in-out;
`;
