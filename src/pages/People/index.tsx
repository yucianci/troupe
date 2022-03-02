import React, { useEffect, useMemo, useState } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { toast } from 'react-toastify';
import { IFilter, IPage, IReport } from '../../interfaces';
import api from '../../services/api';
import { useAuth } from '../../hooks/Auth';
import { defFilter, defPage, defReport } from '../../data';
import { handleDelete } from '../../components/Swal';
import { defPeople, IPeople, schema, tableHeadData } from './schema';
import { ActionTableCell } from './styles';
import ActionButton from '../../components/ActionButton';
import PageContent from '../../components/PageContent';
import Modal from './Modal';

const People: React.FC = () => {
  const [filters, setFilters] = useState<IFilter>(defFilter);
  const [pages, setPages] = useState<IPage>(defPage);
  const [reports, setReports] = useState<IReport>(defReport);
  const [data, setData] = useState<IPeople[]>([]);
  const [modalData, setModalData] = useState<IPeople>({} as IPeople);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const { setLoading, sort } = useAuth();

  const onClickInclude = () => {
    setModalData(defPeople);
    setShow(true);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(
        `${schema.id}?&_page=${pages.page}&_limit=${schema.limit}&_order=${
          filters.isType ? 'asc' : 'desc'
        }&_sort=${sort}&q=${filters.search}`
      )
      .then((response) => {
        const allRegisters = 1 + response.data.length;
        if (allRegisters > 20 && allRegisters % schema.limit === 0) {
          setPages((p) => ({
            ...p,
            lastPage: allRegisters / schema.limit,
          }));
        } else {
          setPages((p) => ({
            ...p,
            lastPage: Number((allRegisters / schema.limit + 1).toFixed()),
          }));
        }
        setReports(() => ({
          count: allRegisters - 1,
          perPage: schema.limit,
          currentPage: pages.page,
        }));
        setData(response.data);
      })
      .catch(() => {
        toast.error('Não foi possível efetuar a consulta');
      })
      .finally(() => setLoading(false));
  }, [pages.page, filters.order, filters.isType, filters.search, refresh]);

  const tableBodyData = useMemo(
    () =>
      data.map((value) => (
        <TableRow key={value.id}>
          <TableCell component="th" scope="row">
            {value.nome}
          </TableCell>
          <TableCell component="th" scope="row">
            {value.cpf}
          </TableCell>
          <TableCell component="th" scope="row">
            {value.email}
          </TableCell>
          <TableCell component="th" scope="row">
            {value.endereco.cidade}
          </TableCell>
          <ActionTableCell>
            <ActionButton
              view={() => {
                setModalData({
                  ...value,
                  action: 'view',
                });
                setShow(true);
              }}
              edit={() => {
                setModalData({
                  ...value,
                  action: 'edit',
                });
                setShow(true);
              }}
              deleted={() => {
                handleDelete(
                  value.id,
                  schema.id,
                  () => setRefresh((bollean) => !bollean),
                  setLoading
                );
              }}
            />
          </ActionTableCell>
        </TableRow>
      )),
    [data]
  );

  return (
    <>
      <PageContent
        headerData={{ schema, reports }}
        setSearch={setFilters}
        include={onClickInclude}
        tableData={{ tableHeadData, tableBodyData, filters, pages }}
        onChangeFilter={(order: string, isType: boolean) =>
          setFilters({ ...filters, order, isType })
        }
        onChangePagination={(pageValue: number) =>
          setPages({ ...pages, page: pageValue })
        }
      />
      {show && (
        <Modal
          data={{ modalData, schema }}
          hide={() => setShow(false)}
          refresh={() => setRefresh((value) => !value)}
        />
      )}
    </>
  );
};

export default People;
