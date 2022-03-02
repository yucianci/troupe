import {
  Toolbar,
  Card,
  Typography,
  Avatar,
  ListItemIcon,
  CardActions,
} from '@mui/material';
import styled from 'styled-components';

export const Navbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  width: 300;
  text-align: center;
`;

export const Wrapper = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Icon = styled(Avatar)`
  width: 64px;
  height: 64px;
  font-size: 48px;
`;

export const CardFooter = styled(CardActions)`
  display: flex;
  justify-content: center;
  & p div div {
    justify-content: center;
  }
`;

export const Item = styled(ListItemIcon)`
  color: #7e7e7e;
`;
