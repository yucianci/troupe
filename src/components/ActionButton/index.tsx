import React from 'react';
import { IconButton, ListItemText, Menu, Tooltip, Zoom } from '@mui/material';
import { Delete, Edit, Menu as MenuIcon, Search } from '@mui/icons-material';
import { Icon, MenuList, MenuButton } from './styles';
import { IActionButton } from '../../interfaces';

const ActionButton: React.FC<IActionButton> = ({
  children,
  view,
  edit,
  deleted,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip
        TransitionComponent={Zoom}
        title="Clique para exibir as ações"
        placement="left"
        arrow
      >
        <IconButton onClick={handleClick} style={{ padding: 0 }}>
          <MenuIcon />
        </IconButton>
      </Tooltip>

      <MenuList
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        elevation={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {view && (
          <MenuButton
            onClick={() => {
              view();
              setAnchorEl(null);
            }}
          >
            <Icon>
              <Search />
            </Icon>
            <ListItemText primary="Visualizar" />
          </MenuButton>
        )}

        {edit && (
          <MenuButton
            onClick={() => {
              edit();
              setAnchorEl(null);
            }}
          >
            <Icon>
              <Edit />
            </Icon>
            <ListItemText primary="Editar" />
          </MenuButton>
        )}

        {deleted && (
          <MenuButton
            onClick={() => {
              deleted();
              setAnchorEl(null);
            }}
          >
            <Icon>
              <Delete />
            </Icon>
            <ListItemText primary="Excluir" />
          </MenuButton>
        )}
        {children}
      </MenuList>
    </>
  );
};

export default ActionButton;
