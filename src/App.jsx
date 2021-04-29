import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context/auth';
import theme from './styles/themes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
