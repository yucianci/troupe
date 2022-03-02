import { IReport, IFilter, IPage } from '../interfaces/index';

const defReport: IReport = {
  perPage: 0,
  count: 0,
  currentPage: 0,
};

const defFilter: IFilter = {
  order: 'created_at',
  isType: false,
  search: '',
};

const defPage: IPage = {
  lastPage: 1,
  page: 1,
};

export { defReport, defFilter, defPage };
