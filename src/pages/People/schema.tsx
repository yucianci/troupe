import { ISchema } from '../../interfaces';

const schema: ISchema = {
  id: 'clientes',
  name: 'Cliente',
  placeholder: 'Buscar por nome, cpf, email ou cidade',
  limit: 20,
};

const tableHeadData = [
  {
    name: 'Nome',
    id: 'nome',
    ordered: true,
  },
  {
    name: 'CPF',
    id: 'cpf',
    ordered: true,
  },
  {
    name: 'Email',
    id: 'email',
    ordered: true,
  },
  {
    name: 'Cidade',
    id: 'cidade',
    ordered: true,
  },
  {
    name: 'Ações',
    id: 'action',
    smaller: true,
  },
];

interface IAddress {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
}

interface IPeople {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  endereco: IAddress;
  action: 'include' | 'edit' | 'view';
}

const defPeople: IPeople = {
  id: '',
  nome: '',
  cpf: '',
  email: '',
  endereco: { cep: '', rua: '', numero: '', bairro: '', cidade: '' },
  action: 'include',
};

export type { IPeople };
export { tableHeadData, schema, defPeople };
