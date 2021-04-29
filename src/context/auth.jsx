import React, { useCallback, useContext, useState, createContext } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
export const authContext = createContext();

function AuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@MyAgenda:token');
    const user = localStorage.getItem('@MyAgenda:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setIsAuth(true);

      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const logOut = useCallback(() => {
    localStorage.removeItem('@MyAgenda:token');
    localStorage.removeItem('@MyAgenda:user');

    setIsAuth(false);
  }, []);

  const logIn = useCallback(async ({ email, password }, isChecked) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      });

      const token = response.data.token.token;
      const user = response.data.user;

      localStorage.setItem('@MyAgenda:user', JSON.stringify(user));

      if (isChecked) {
        localStorage.setItem('@MyAgenda:token', token);
      }

      setData({ token, user });

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setIsAuth(true);
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao tentar logar, verifique seu email e senha'
      );
      setError(error.message);
    }
  }, []);

  return (
    <authContext.Provider
      value={{ isAuth, setIsAuth, logIn, logOut, error, user: data.user }}
    >
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);
  const { isAuth, logIn, logOut, error, user } = context;
  return { isAuth, logIn, logOut, error, user };
}

export default AuthContext;

export { AuthContext, useAuth };
