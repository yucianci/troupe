import { UnfoldMore } from '@mui/icons-material';
import { TableCell, TableFooter, TableHead } from '@mui/material';
import styled from 'styled-components';

interface ITableCellHeader {
  ordered?: boolean;
  smaller?: boolean;
}

export const Main = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding: 8px;
`;

/* ESTILOS DO HEADER DA PÁGINA */
export const MainHeader = styled.div`
  background: #fff;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
`;
export const ContainerHeader = styled.div`
  font-size: 1.5rem;
  @media (max-width: 650px) {
    display: grid;
  }
`;
export const ReportHeader = styled.span`
  font-size: 0.9rem;
  padding: 2px 8px;
  @media (max-width: 650px) {
    padding: 0;
  }
`;
export const ToolsHeader = styled.div`
  display: grid;
  grid-template-columns: 90% 8%;
  grid-gap: 2%;
  & > button {
    margin: 8px 0;
    padding: 5px 18px;
  }
  @media (max-width: 1250px) {
    grid-template-columns: 88% 10%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 83% 15%;
  }
  @media (min-width: 1600px) {
    grid-template-columns: 93% 5%;
  }
`;

/* ESTILOS DO TABLE DA PÁGINA */
export const MainTable = styled.div`
  width: 100%;
`;
export const HeaderTable = styled(TableHead)`
  background: #eceff1;
`;
export const TableCellHeader = styled(TableCell)<ITableCellHeader>`
  ${(props) => props.ordered && ` cursor: pointer;`}
  ${(props) => props.smaller && ` width: 0;`}
`;
export const TableCellTitle = styled.div`
  display: flex;
`;
export const OrderIcon = styled.div`
  height: 24px;
  & > svg {
    width: 1.25rem;
  }
`;
export const UnfoldmoreIcon = styled(UnfoldMore)`
  color: #24252588;
`;
export const Footer = styled(TableFooter)`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
