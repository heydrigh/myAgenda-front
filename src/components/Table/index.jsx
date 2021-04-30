import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

const Table = ({ contacts }) => {
  const history = useHistory();

  const handleDetails = (contactId) => {
    history.push(`/details/${contactId}`);
  };
  return (
    <S.Wrapper>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {contacts &&
          contacts.map((contact) => (
            <tr onClick={() => handleDetails(contact.id)} key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.lastname}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
      </tbody>
    </S.Wrapper>
  );
};

export default Table;
