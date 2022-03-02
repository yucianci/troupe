import styled from 'styled-components';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';

export const Icon = styled(ListItemIcon)`
  & > svg {
    color: #212121;
    margin-right: 16px;
  }
`;

export const MenuList = styled(Menu)`
  & > .MuiPaper-root > .MuiList-root {
    padding: 0;
  }
`;

export const MenuButton = styled(MenuItem)`
  padding: 10px 18px;
  border-bottom: 1px solid #cbcbcb81;
`;
