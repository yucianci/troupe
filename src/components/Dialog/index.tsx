/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import Button from '../Button';
import { handleCancel } from '../Swal';

interface Props {
  id: string;
  name?: string;
  hide: () => void;
  action: string | undefined;
  width?: false | 'sm' | 'xs' | 'md' | 'lg' | 'xl' | undefined;
  methods?: any;
  handleSubmit?: any;
  fixedName?: string;
}

const ModalDialog: React.FC<Props> = ({
  id,
  name,
  hide,
  action,
  methods,
  handleSubmit,
  width,
  children,
  fixedName,
}) => {
  const title = () => {
    if (fixedName) {
      return fixedName;
    }
    return action === 'include'
      ? `Cadastrar ${name}`
      : action === 'edit'
      ? `Alterar ${name}`
      : action === 'view'
      ? `Visualizar ${name}`
      : `${name}`;
  };
  return (
    <Dialog
      open={action !== undefined}
      aria-labelledby="form-dialog-title"
      maxWidth={width}
      fullWidth
    >
      <DialogTitle id={id}>{title()}</DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            {action !== 'view' && (
              <>
                <Button
                  defaultColor
                  type="button"
                  onClick={() => handleCancel(hide)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Gravar</Button>
              </>
            )}
            {action === 'view' && (
              <Button type="button" onClick={hide}>
                Retornar
              </Button>
            )}
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default ModalDialog;
