import React, {
  FC,
  useState,
  KeyboardEvent,
  ChangeEvent,
  useRef,
  SetStateAction,
  Dispatch,
} from 'react';
import {
  Button,
  ClickAwayListener,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import styled from 'styled-components';

import { isEnterKey } from '../../utils/function/isEnterKey';
import { isEscapeKey } from '../../utils/function/isEscapeKey';
import { Choice } from '../../types/interface/Choice';

interface Props {
  choices: Array<Choice>;
  setChoices: Dispatch<SetStateAction<Array<Choice>>>;
}

export const AddAdditionalChoiceInput: FC<Props> = ({
  choices,
  setChoices,
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [choiceText, setChoiceText] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(' ');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddAdditionalChoiceButtonClick = () => {
    setIsTyping(true);
  };

  const handleClickAway = () => {
    setIsTyping(false);
    setChoiceText('');
    setError(false);
    setHelperText(' ');
  };

  const handleChoiceTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setHelperText(' ');
    setChoiceText(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isEnterKey(event)) {
      submit();
    }
    if (isEscapeKey(event)) {
      handleClickAway();
    }
  };

  const handleAddIconButtonClick = () => {
    submit();
    inputRef.current?.focus();
  };

  const submit = () => {
    if (choiceText.length === 0) {
      setError(true);
      setHelperText('Bitte eine Antwort eingeben.');
    } else if (choices.some((choice) => choice.text === choiceText)) {
      setError(true);
      setHelperText('Diese Antwort existiert bereits.');
    } else {
      const additionalChoice: Choice = {
        id: Date.now().toString(),
        text: choiceText.trim(),
      };
      setChoices((prevState) => [...prevState, additionalChoice]);
      setChoiceText('');
      scrollDownAfterSubmit();
    }
  };

  const scrollDownAfterSubmit = () => {
    const textFieldHeight = 56;
    const gridGap = 16;
    window.scrollBy({
      top: textFieldHeight + gridGap,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <ClickAwayListener onClickAway={handleClickAway}>
        {isTyping ? (
          <TextFieldIconButtonWrapper>
            <TextField
              id="additional-choice"
              label="zusätzliche Antwort"
              inputRef={inputRef}
              variant="outlined"
              fullWidth
              autoFocus
              InputLabelProps={{ shrink: true }}
              value={choiceText}
              error={error}
              helperText={helperText}
              onChange={handleChoiceTextChange}
              onKeyDown={handleKeyDown}
            />
            <StyledAddIconButton
              aria-label="hinzufügen"
              onClick={handleAddIconButtonClick}
            >
              <Add />
            </StyledAddIconButton>
          </TextFieldIconButtonWrapper>
        ) : (
          <StyledButton
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
            onClick={handleAddAdditionalChoiceButtonClick}
            disableRipple
          >
            <StyledAddIcon />
            zusätzliche Antwort
          </StyledButton>
        )}
      </ClickAwayListener>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 78px;
`;

const StyledAddIcon = styled(Add)`
  margin-right: 0.5rem;
`;

const StyledAddIconButton = styled(IconButton)`
  height: 56px;
`;

const TextFieldIconButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
`;

const StyledButton = styled(Button)`
  height: 56px;
`;
