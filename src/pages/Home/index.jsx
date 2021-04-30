import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import Table from '../../components/Table';

const Home = () => {
  const { logOut } = useAuth();
  const [contacts, setContact] = useState([]);
  const history = useHistory();

  const handleLogout = () => {
    logOut();
  };

  const handleRedirect = () => {
    history.push('create');
  };

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const response = await api.get('/contacts');
    setContact(response.data);
  };
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>Bem vindo ao</S.Header>
        <S.MyAgenda>MyAgenda!</S.MyAgenda>
        <Table contacts={contacts} />
        <S.ButtonsWrapper>
          <Button onClick={handleLogout} variant="outlined">
            Deslogar
          </Button>
          <Button onClick={handleRedirect} variant="filled">
            Adicionar contato
          </Button>
        </S.ButtonsWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;
