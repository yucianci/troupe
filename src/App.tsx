import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import AppProvider from './hooks';
import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './globalStyles';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
        <GlobalStyles />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default App;
