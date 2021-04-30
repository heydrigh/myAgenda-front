import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../schemas/LoginSchema';
import Button from '../../components/Button';

import { useAuth } from '../../context/auth';
import * as S from './styles';

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(LoginSchema)
  });
  const { logIn } = useAuth();

  const onSubmit = (data) => {
    logIn(data);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Login</S.Title>
        <Input
          error={errors.email ? errors.email.message : ''}
          name="email"
          refs={register}
          title="E-mail"
          placeholder="Digite seu email"
        />
        <Input
          error={errors.password ? errors.password.message : ''}
          name="password"
          refs={register}
          title="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <Button type="submit" variant="filled">
          Logar
        </Button>

        <S.SignUp>
          <Link to="register">Increver-se</Link>
          <FiLogIn size={18} color="#6B6B6B" />
        </S.SignUp>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
