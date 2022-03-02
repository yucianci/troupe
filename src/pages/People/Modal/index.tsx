import React, { useCallback, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';
import validation from './validation';
import TextField from '../../../components/TextField';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/Auth';
import Dialog from '../../../components/Dialog';
import { IPeople } from '../schema';
import { IModal } from '../../../interfaces';
import { Wrapper } from '../styles';
import { id } from '../../../utils/randomId';

const Modal: React.FC<IModal> = ({ data, hide, refresh }) => {
  const { modalData, schema } = data;
  const methods = useForm<IPeople>({
    resolver: yupResolver(validation),
  });
  const { setLoading } = useAuth();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(modalData);
  }, [modalData, reset]);

  const onSubmit = useCallback(
    async (dataSubmit) => {
      setLoading(true);
      const newData = {
        ...dataSubmit,
        id: id(),
        endereco: {
          cep: dataSubmit.cep,
          rua: dataSubmit.rua,
          numero: dataSubmit.numero,
          bairro: dataSubmit.bairro,
          cidade: dataSubmit.cidade,
        },
      };
      try {
        switch (newData.action) {
          case 'include':
            await api.post(`/${schema.id}`, newData);
            toast.success('Registro efetuado com sucesso');
            break;
          case 'edit':
            await api.put(`/${schema.id}/${newData.id}`, newData);
            toast.success('Registro alterado com sucesso');
            break;
          default:
            toast.error('Erro ao efetuar cadastro');
            break;
        }
        setLoading(false);
        refresh();
        hide();
      } catch (err: any) {
        setLoading(false);
        toast.error(err.response.data.errors[0].message);
      }
    },
    [schema.id]
  );

  return (
    <Dialog
      id={schema.id}
      name={schema.name}
      hide={hide}
      action={modalData.action}
      methods={methods}
      handleSubmit={handleSubmit(onSubmit)}
      width="lg"
    >
      <Wrapper container spacing={1}>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            name="nome"
            label="Nome"
            tip={{ text: 'Nome completo', example: 'Fulano da Silva' }}
            autoFocus={modalData.action !== 'edit'}
            required
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            name="cpf"
            label="CPF"
            tip={{
              text: 'Cadastro de Pessoa física',
              example: '111.222.333-44',
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            name="email"
            label="Email"
            tip={{ text: 'Endereço eletrônico', example: 'fulano@email.com' }}
            required
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            name="cep"
            label="CEP"
            tip={{
              text: 'Código de Endereçamento Postal',
              example: '11222-333',
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <TextField
            name="rua"
            label="Rua"
            tip={{
              text: 'Rua do endereço',
              example: 'Rua Fulano da Silva',
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <TextField
            name="numero"
            label="Número"
            tip={{ text: 'Número do endereço', example: '001' }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            name="bairro"
            label="Bairro"
            tip={{ text: 'Bairro do endereço', example: 'Centro' }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            name="cidade"
            label="Cidade"
            tip={{ text: 'Cidade do endereço', example: 'Curitiba' }}
            required
          />
        </Grid>
      </Wrapper>
    </Dialog>
  );
};

export default Modal;
