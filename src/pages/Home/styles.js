import styled, { css } from 'styled-components';

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
  `}
`;

export const ButtonsWrapper = styled.main`
  display: flex;
  width: 80%;
  justify-content: space-between;
  button + button {
    margin-left: 1.6rem;
  }
`;

export const Header = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    font-size: 2.6rem;
  `}
`;

export const MyAgenda = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.tertiaryColor};
    font-size: 2.6rem;
  `}
`;
