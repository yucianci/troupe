import * as Yup from 'yup';

const validation = Yup.object().shape({
  nome: Yup.string()
    .required('Campo obrigatório')
    .min(3, 'A descrição precisa conter no mínimo 3 caracteres')
    .max(250, 'A descrição precisa conter no máximo 250 caracteres'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Email inválido')
    .min(3, 'A descrição precisa conter no mínimo 3 caracteres')
    .max(250, 'A descrição precisa conter no máximo 250 caracteres'),
  cpf: Yup.string().required('Campo obrigatório'),
  cep: Yup.string().required('Campo obrigatório'),
  rua: Yup.string().required('Campo obrigatório'),
  numero: Yup.string().required('Campo obrigatório'),
  bairro: Yup.string().required('Campo obrigatório'),
  cidade: Yup.string().required('Campo obrigatório'),
});

export default validation;
