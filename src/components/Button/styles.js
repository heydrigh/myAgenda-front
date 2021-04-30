import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    && {
      text-transform: none;
      font-size: 1.2rem;
      padding: 0.6rem 0.5rem;
      min-width: 16rem;
      border-radius: 8px;
      height: 40px;
      width: 100%;
      height: 4rem;

      transition: 0.4s ease;

      ${({ variant }) =>
        variant === 'filled'
          ? css`
              background: ${theme.colors.backgroundColor};
              color: ${theme.colors.grey};
              &:hover {
                background: ${theme.colors.primaryColor};
                color: ${theme.colors.white};
              }
            `
          : variant === 'outlined'
          ? css`
              background: ${theme.colors.white};
              color: ${theme.colors.grey};
              border-color: ${theme.colors.backgroundColor};
              &:hover {
                background: ${theme.colors.backgroundColor};
                color: ${theme.colors.grey};
              }
            `
          : css`
              background-color: ${theme.colors.fail};
              color: ${theme.colors.white};
              &&:hover {
                background-color: ${theme.colors.lightFail};
              }
            `}
    }
  `}
`;
