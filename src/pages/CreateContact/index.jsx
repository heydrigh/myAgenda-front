import React from 'react';
import * as S from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Input from '../../components/Input';
import CreateSchema from '../../schemas/CreateSchema';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

const CreateContact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(CreateSchema)
  });

  const history = useHistory();

  const handleEdit = async (data) => {
    try {
      await api.post(`contacts`, data);
      toast.success('Contato criado com sucesso');
      history.push('/home');
    } catch (error) {
      console.log(error.message);
      toast.error('Ocorreu um erro ao tentar editar este contato');
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleEdit)}>
        <S.Header>
          <Link to="/home">
            <AiOutlineLeft size={22} color="#6B6B6B" /> voltar
          </Link>
          <S.Title>Adicionar</S.Title>
        </S.Header>

        <Input
          error={errors.name ? errors.name.message : ''}
          name="name"
          refs={register}
          title="Nome"
        />
        <Input
          error={errors.lastname ? errors.lastname.message : ''}
          name="lastname"
          refs={register}
          title="Sobrenome"
        />
        <Input
          error={errors.email ? errors.email.message : ''}
          name="email"
          refs={register}
          title="E-mail"
        />
        <Input
          error={errors.phone ? errors.phone.message : ''}
          name="phone"
          refs={register}
          title="Telefone"
        />
        <Input
          error={errors.birthday ? errors.birthday.message : ''}
          name="birthday"
          refs={register}
          title="Data de nascimento"
        />
        <Input
          error={errors.address ? errors.address.message : ''}
          name="address"
          refs={register}
          title="endereço"
        />
        <S.ButtonsWrapper>
          <Button type="submit" variant="filled">
            Salvar contato
          </Button>
        </S.ButtonsWrapper>
      </S.Form>
    </S.Wrapper>
  );
};

export default CreateContact;
