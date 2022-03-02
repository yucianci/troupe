import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import FullPageLoader from '../components/FullPageLoader';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';

import People from '../pages/People';

const Private: React.FC = ({ children }) => {
  const { user, loading } = useAuth();

  if (user) {
    return (
      <Main>
        {children}
        {loading && <FullPageLoader />}
      </Main>
    );
  }

  return <Navigate to="/" />;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {user && (
        <Route
          path="/clientes"
          element={
            <Private>
              <People />
            </Private>
          }
        />
      )}

      <Route
        path="*"
        element={
          <Private>
            <div>Página não econtrada</div>
          </Private>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
