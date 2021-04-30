import React from 'react';
import * as S from './styles';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Register = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Title>Registrar</S.Title>
        <Input title="Nome" type="text" placeholder="Digite seu nome" />
        <Input title="email" type="email" placeholder="Digite seu email" />
        <Input title="senha" type="password" placeholder="Digite sua senha" />
        <S.Button>Registrar</S.Button>
        <S.Back>
          <AiOutlineArrowLeft size={18} color="#6B6B6B" />
          <Link to="/">Voltar</Link>
        </S.Back>
      </S.Form>
    </S.Wrapper>
  );
};

export default Register;
