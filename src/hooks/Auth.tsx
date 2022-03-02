/* eslint-disable no-new */
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../interfaces';

interface AuthContextData {
  sort?: string;
  setSort?: any;
  user?: IUser;
  setUser?: any;
  signOut(): void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(localStorage.getItem('@troupe:user'));
  const [sort, setSort] = useState('');

  const signOut = useCallback(() => {
    localStorage.removeItem('@troupe:token');
    localStorage.removeItem('@troupe:user');
    navigate('/');
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ sort, setSort, user, setUser, signOut, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
