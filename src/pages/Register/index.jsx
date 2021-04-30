import React from 'react';
import * as S from './styles';
import Input from '../../components/Input';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '../../services/api';
import { useForm } from 'react-hook-form';

const Register = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await api.post('/users', data);
      toast.success('Usuário criado com sucesso! Faça já seu login!');
      history.push('/');
    } catch (error) {
      toast.error('Ocorreu algum erro ao tentar criar seu usuário');
      console.log(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Registrar</S.Title>
        <Input
          name="username"
          refs={register}
          title="Nome"
          placeholder="Digite seu nome"
        />
        <Input
          name="email"
          refs={register}
          title="E-mail"
          placeholder="Digite seu email"
        />
        <Input
          name="password"
          refs={register}
          title="Senha"
          type="password"
          placeholder="Digite sua senha"
        />
        <Input
          name="password_confirmation"
          refs={register}
          title="Confirme sua senha"
          type="password"
          placeholder="Repita sua senha"
        />
        <S.Button type="submit">Registrar</S.Button>
        <S.Back>
          <AiOutlineArrowLeft size={18} color="#6B6B6B" />
          <Link to="/">Voltar</Link>
        </S.Back>
      </S.Form>
    </S.Wrapper>
  );
};

export default Register;
