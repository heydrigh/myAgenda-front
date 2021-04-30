import styled, { css } from 'styled-components';

export const Wrapper = styled.table`
  ${({ theme }) => css`
    width: 90%;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-size: 1.4rem;

    margin: 1.6rem 0;
    thead tr {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      text-align: center;
    }

    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid ${theme.colors.lightGrey};
      &:hover {
        background-color: ${theme.colors.lightGreen};
      }
    }
    tbody td {
      border: 1px solid ${theme.colors.lightGrey};
      cursor: pointer;
    }

    tbody tr:nth-of-type(even) {
      background-color: ${theme.colors.lightestGrey};
      &:hover {
        background-color: ${theme.colors.lightGreen};
      }
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid ${theme.colors.tertiaryColor};
    }
  `}
`;
