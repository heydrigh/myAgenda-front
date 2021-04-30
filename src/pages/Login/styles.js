import styled, { css, keyframes } from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.backgroundColor};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 4rem;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    padding: 2.4rem;
    border-radius: 8px;
    width: 34rem;
    box-shadow: 2px 4px 14px 1px rgba(0, 0, 0, 0.55);
    div + div {
      margin-top: 1.6rem;
    }

    button {
      margin-top: 1.6rem;
    }
    animation: ${appearFromLeft} 1s;
  `}
`;

export const Button = styled(MuiButton)`
  ${({ theme }) => css`
    && {
      text-transform: none;
      background: linear-gradient(to right, #b3ffab, #12fff7);
      width: 100%;
      height: 4rem;
      color: ${theme.colors.white};
      align-self: center;
      margin-top: 2.4rem;
      font-size: 1.6rem;
    }
  `}
`;

export const SignUp = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.grey};
      font-size: 1.4rem;
      text-align: center;
    }

    align-self: flex-end;
    margin-top: 1.8rem;
    svg {
      vertical-align: middle;
      margin-left: 0.4rem;
      margin-bottom: 0.4rem;
    }
  `}
`;
