/* eslint-disable no-nested-ternary */
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Grid,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/Auth';
import { IMain } from '../../interfaces';
import logReport from '../../utils/logReport';
import Button from '../Button';
import TextFieldTableSearch from '../TextField/Search';
import {
  Main,
  MainHeader,
  ContainerHeader,
  ToolsHeader,
  ReportHeader,
  MainTable,
  HeaderTable,
  TableCellHeader,
  TableCellTitle,
  OrderIcon,
  UnfoldmoreIcon,
  Footer,
} from './styles';

const MainPage: React.FC<IMain> = ({
  headerData,
  setSearch,
  include,
  tableData,
  onChangeFilter,
  onChangePagination,
  hiddenPagination,
  colgroup,
  children,
}) => {
  const [searchText, setSearchText] = useState('');
  const { schema, reports } = headerData;
  const { tableHeadData, tableBodyData, filters, pages } = tableData;
  const { setSort } = useAuth();
  return (
    <Main>
      {schema && reports && (
        <MainHeader>
          <ContainerHeader>
            {schema.name}
            <ReportHeader>
              {!hiddenPagination && logReport(reports)}
            </ReportHeader>
          </ContainerHeader>

          {include && (
            <ToolsHeader>
              <Grid>
                <TextFieldTableSearch
                  placeholder={schema.placeholder}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      setSearch((f: any) => ({ ...f, search: searchText }));
                    }
                  }}
                  onClick={() =>
                    setSearch((f: any) => ({ ...f, search: searchText }))
                  }
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </Grid>
              <Button
                type="button"
                onClick={() => {
                  include();
                }}
              >
                incluir
              </Button>
            </ToolsHeader>
          )}
        </MainHeader>
      )}
      <TableContainer component={Paper}>
        <MainTable>
          <Table size="small" aria-label="a dense table">
            <HeaderTable>
              {tableHeadData.map((data) => (
                <TableCellHeader
                  key={data.id}
                  ordered={data.ordered}
                  smaller={data.smaller}
                  onClick={() => {
                    if (onChangeFilter && data.ordered) {
                      onChangeFilter(data.id || '', !filters?.isType);
                      setSort(data.id);
                    }
                  }}
                >
                  {data.ordered ? (
                    <TableCellTitle>
                      {data.name}
                      <OrderIcon>
                        {data.id === filters?.order ? (
                          filters?.isType ? (
                            <KeyboardArrowDown />
                          ) : (
                            <KeyboardArrowUp />
                          )
                        ) : (
                          <UnfoldmoreIcon />
                        )}
                      </OrderIcon>
                    </TableCellTitle>
                  ) : (
                    <TableCellTitle>{data.name}</TableCellTitle>
                  )}
                </TableCellHeader>
              ))}
            </HeaderTable>
            {colgroup}
            <TableBody>{tableBodyData}</TableBody>
          </Table>
          {pages?.lastPage && (
            <Footer>
              <Pagination
                count={pages?.lastPage}
                size="medium"
                color="primary"
                defaultPage={pages?.page}
                onChange={(event, value) => onChangePagination(value)}
              />
            </Footer>
          )}
        </MainTable>
      </TableContainer>
      {children}
    </Main>
  );
};

export default MainPage;
