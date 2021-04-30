import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { BiLogOut } from 'react-icons/bi';
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
    try {
      const response = await api.get('/contacts');
      setContact(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.LogoutButton onClick={handleLogout}>
          <BiLogOut size={20} color="#606060" /> Logout
        </S.LogoutButton>
        <S.Header>Bem vindo ao:</S.Header>
        <S.MyAgenda>MyAgenda!</S.MyAgenda>
        {contacts.length < 1 ? (
          <S.Placeholder>
            Você ainda não possui contatos salvos. Clique em adicionar contato.
          </S.Placeholder>
        ) : (
          <Table contacts={contacts} />
        )}

        <S.ButtonsWrapper>
          <Button onClick={handleRedirect} variant="filled">
            Adicionar contato
          </Button>
        </S.ButtonsWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;
