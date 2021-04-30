import styled, { css, keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

export const Header = styled.header`
  margin-bottom: -1.2rem;
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;

    a {
      margin-top: 0.6rem;
      color: ${theme.colors.darkGrey};
      font-size: 1.8rem;
      svg {
        vertical-align: middle;
      }
    }
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
    width: 38rem;
    box-shadow: 2px 4px 14px 1px rgba(0, 0, 0, 0.55);
    div + div {
      margin-top: 1.6rem;
    }
    animation: ${appearFromRight} 1s;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  button + button {
    margin-left: 1.4rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 4rem;
  `}
`;
