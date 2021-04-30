import React from 'react';
import * as S from './styles';

const Button = ({ children, onClick, variant, ...rest }) => {
  return (
    <S.StyledButton variant={variant} onClick={onClick} {...rest}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
