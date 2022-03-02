import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Popover,
  Tooltip,
  Zoom,
  CardContent,
  CardActions,
  ListItemIcon,
  ListItem,
} from '@mui/material';
import { AccountCircle, ExitToApp, VpnKey } from '@mui/icons-material';
import {
  Navbar,
  Main,
  StyledCard,
  Wrapper,
  Icon,
  Item,
  CardFooter,
} from './styles';
import { useAuth } from '../../../hooks/Auth';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showUserCard, setShowUserCard] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Navbar>
        <Main>Challenge Troupe</Main>

        <Main>
          <IconButton
            aria-label="account of current user"
            color="primary"
            size="medium"
            onClick={signOut}
          >
            <Tooltip
              TransitionComponent={Zoom}
              arrow
              title="Sair"
              placement="bottom"
            >
              <ExitToApp />
            </Tooltip>
          </IconButton>
        </Main>
      </Navbar>
    </AppBar>
  );
};

export default Header;
