import styled, { css, keyframes } from 'styled-components';

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

export const LogoutButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-start;
    background: none;
    color: ${theme.colors.darkGrey};
  `}
`;

export const Placeholder = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.grey};
    margin: 1.6rem 0;
    text-align: center;
  `}
`;

export const ContentWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    padding: 2.8rem;
    border-radius: 8px;
    width: 52rem;
    box-shadow: 2px 4px 14px 1px rgba(0, 0, 0, 0.55);
    animation: ${appearFromLeft} 1s;
  `}
`;

export const ButtonsWrapper = styled.main`
  display: flex;
  width: 90%;
  justify-content: space-between;
  button + button {
    margin-left: 1.6rem;
  }
`;

export const Header = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    font-size: 2.6rem;
    margin-top: -2.6rem;
  `}
`;

export const MyAgenda = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.tertiaryColor};
    font-size: 2.6rem;
  `}
`;
