/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import api from '../../services/api';

export function handleDelete(
  id: string,
  route: string,
  handleSearch: () => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  Swal.fire({
    title: 'Deseja realmente excluir?',
    icon: 'question',
    showCancelButton: true,
    showCloseButton: true,
    reverseButtons: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  }).then(async (result) => {
    if (result.value) {
      setLoading(true);
      await api
        .delete(`${route}/${id}`)
        .then(() => {
          handleSearch();
          toast.success('Registro excluído com sucesso');
        })
        .catch(() => {
          toast.error('Ocorreu um erro ao excluir o registro');
        })
        .finally(() => setLoading(false));
    }
  });
}

export function handleCancel(closeModal: () => void) {
  Swal.fire({
    title: 'Deseja realmente cancelar?',
    icon: 'question',
    showCancelButton: true,
    showCloseButton: true,
    reverseButtons: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  }).then((result) => {
    if (result.value) {
      closeModal();
    }
  });
}
