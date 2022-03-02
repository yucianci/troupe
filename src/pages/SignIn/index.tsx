/* eslint-disable no-new */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Button, Link as LinkMUI, Grid, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../hooks/Auth';
import TextField from '../../components/TextField';
import { ILogin } from '../../interfaces';
import {
  Main,
  Container,
  Logo,
  Text,
  Body,
  ForgotPassword,
  Box,
  ButtonLoader,
  Brand,
} from './styles';
import TextFieldPassword from '../../components/TextField/Password';
import api from '../../services/api';

const SignIn: React.FC = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.get('usuarios');

    const found = data.find(
      (user: any) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!found) {
      new Error('erro');
    }

    setUser(found);

    localStorage.setItem('@troupe:token', found.token);
    localStorage.setItem(
      '@troupe:user',
      JSON.stringify({ email: found.email })
    );
    api.defaults.headers.common.authorization = `Bearer ${found.token}`;
  }, []);

  const methods = useForm<ILogin>({
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email('Endereço de e-mail inválido')
          .required('O endereço de e-mail é obrigatório'),
        password: Yup.string()
          .required('A senha é obrigatória')
          .min(4, 'A senha precisa conter no mínimo 4 caracteres'),
      })
    ),
    defaultValues: { email: '', password: '' },
  });
  const { handleSubmit } = methods;

  const onSubmit = useCallback(
    (values: ILogin) => {
      setLoading(true);
      signIn(values)
        .then(() => {
          navigate('/clientes');
        })
        .catch(() => {
          setLoading(false);
          toast.error(
            'Ocorreu um erro ao fazer login, por favor verifique suas credenciais.'
          );
        });
    },
    [signIn, navigate]
  );

  return (
    <Main container paddingLeft={{ sm: 10, md: 10 }}>
      <Container height={{ sm: '70%', md: '70%' }}>
        <Logo>
          Troupe
          <Text>Desafio de Frontend em React JS</Text>
        </Logo>

        <Body>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField label="Email" name="email" />
              <TextFieldPassword
                onKeyUp={(e: any) => {
                  if (e.key === 'Enter') {
                    handleSubmit(onSubmit);
                  }
                }}
                name="password"
                label="Senha"
                margin="normal"
              />

              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                >
                  Entrar
                </Button>
                {loading && <ButtonLoader size={24} />}
              </Box>
            </form>
          </FormProvider>
        </Body>

        <Brand>
          <div>Por: Yuri Fuzifaru Cianci</div>
        </Brand>
      </Container>
    </Main>
  );
};

export default SignIn;
