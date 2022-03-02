import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { toast } from 'react-toastify';

async function searchCEP(
  text: string | undefined,
  setValue: UseFormSetValue<FieldValues>,
  cities: any,
  index?: string
): Promise<void> {
  if (text !== undefined && text !== null) {
    const cep = text.replace(/[^0-9]/g, '');

    if (cep.length === 8) {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((dataCep) => {
          setValue('cidade', dataCep.cidade);
          setValue('bairro', dataCep.bairro);
        })
        .catch(() => toast.error('CEP não encontrado'));
    } else {
      toast.error('O CEP deve conter 8 dígitos');
    }
  }
}

export default searchCEP;
