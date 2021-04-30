import React, { useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Zoom } from '@material-ui/core';
import * as S from './styles';

const Input = ({ title, containerStyle, error, refs, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.Wrapper style={containerStyle}>
      <S.Title>{title}</S.Title>
      <S.InputWrapper isErrored={!!error} isFocused={isFocused}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={refs}
          name={name}
          {...rest}
        />
        {error && (
          <S.StyledToolTip
            TransitionComponent={Zoom}
            placement={'top'}
            arrow
            title={<S.ErrorTip>{error}</S.ErrorTip>}
          >
            <S.FeedbackWrapper>
              <FiAlertCircle color="#ff4040" size={20} />
            </S.FeedbackWrapper>
          </S.StyledToolTip>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Input;
