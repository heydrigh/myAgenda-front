import styled, { css } from 'styled-components';
import { Tooltip } from '@material-ui/core';

export const Wrapper = styled.div`
  width: 100%;
`;
export const InputWrapper = styled.div`
  ${({ theme }) => css`
    span + & {
      margin-top: 8px;
    }

    background: #fff;
    border-radius: 8px;
    padding: 0;
    width: 100%;
    border: 1px solid ${theme.colors.darkGrey};
    color: #666360;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: ${theme.colors.fail};
      `}

    ${(props) =>
      props.isFocused &&
      css`
        color: ${theme.colors.primaryColor};
        border-color: ${theme.colors.darkGrey};
      `}

  ${(props) =>
      props.isFilled &&
      css`
        color: ${theme.colors.primaryColor};
      `}


    input {
      flex: 1;
      width: 100%;
      padding: 0 1rem;
      font-size: 1.6rem;
      background: transparent;
      padding: 0 4px;
      height: 40px;
      border: 0;
      color: ${theme.colors.darkGrey};

      &::placeholder {
        color: #666360;
      }
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: 1.4rem;
    margin-bottom: 6px;
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    height: 20px;
    margin-left: 16px;

    svg {
      margin: 0;
    }

    span {
      background: ${theme.colors.white};
      color: ${theme.colors.fail};

      &::before {
        border-color: ${theme.colors.fail} transparent;
      }
    }
  `}
`;

export const StyledToolTip = styled(Tooltip)`
  && {
    align-items: center;
    p {
    }
  }
`;

export const FeedbackWrapper = styled.div`
  width: 3rem;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ErrorTip = styled.p`
  font-size: 0.9rem;
  margin: 2px;
`;
