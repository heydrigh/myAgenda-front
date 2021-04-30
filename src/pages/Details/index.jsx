import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Input from '../../components/Input';
import EditSchema from '../../schemas/EditSchema';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

const Details = () => {
  const [contactDetails, setContactDetail] = useState({});
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(EditSchema)
  });
  const { params } = useRouteMatch();
  const history = useHistory();

  const handleEdit = async (data) => {
    try {
      await api.put(`contacts/${params.id}`, data);
      toast.success('Contato editado com sucesso');
      history.push('/home');
    } catch (error) {
      console.log(error.message);
      toast.error('Ocorreu um erro ao tentar editar este contato');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`contacts/${params.id}`);
      toast.success('Usuário deletado com sucesso');
      history.push('/home');
    } catch (error) {
      console.log(error.message);
      toast.error('Ocorreu um erro ao tentar deletar este contato');
    }
  };

  const getContactDetail = useCallback(async () => {
    try {
      const response = await api.get(`/contacts/${params.id}`);
      setContactDetail(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [params.id]);

  useEffect(() => {
    getContactDetail();
  }, [getContactDetail]);

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleEdit)}>
        <S.Header>
          <Link to="/home">
            <AiOutlineLeft size={22} color="#6B6B6B" /> voltar
          </Link>
          <S.Title>Detalhes</S.Title>
        </S.Header>

        <Input
          error={errors.name ? errors.name.message : ''}
          name="name"
          refs={register}
          title="Nome"
          defaultValue={contactDetails.name}
        />
        <Input
          error={errors.lastname ? errors.lastname.message : ''}
          name="lastname"
          refs={register}
          title="Sobrenome"
          defaultValue={contactDetails.lastname}
        />
        <Input
          error={errors.email ? errors.email.message : ''}
          name="email"
          refs={register}
          title="E-mail"
          defaultValue={contactDetails.email}
        />
        <Input
          error={errors.phone ? errors.phone.message : ''}
          name="phone"
          refs={register}
          title="Telefone"
          defaultValue={contactDetails.phone}
        />
        <Input
          error={errors.birthday ? errors.birthday.message : ''}
          name="birthday"
          refs={register}
          title="Data de nascimento"
          defaultValue={contactDetails.birthday}
        />
        <Input
          error={errors.address ? errors.address.message : ''}
          name="address"
          refs={register}
          title="endereço"
          defaultValue={contactDetails.address}
        />
        <S.ButtonsWrapper>
          <Button onClick={handleDelete} variant="delete">
            Apagar contato
          </Button>
          <Button type="submit" variant="filled">
            Salvar mudanças
          </Button>
        </S.ButtonsWrapper>
      </S.Form>
    </S.Wrapper>
  );
};

export default Details;
