interface IUser {
  id: string;
  token: string;
  email: string;
  password: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ILogin {
  email: string;
  password: string;
}

interface IReport {
  perPage: number;
  count: number;
  currentPage: number;
}

interface IPage {
  lastPage: number;
  page: number;
}

interface IFilter {
  order: string;
  isType: boolean;
  search?: string;
}

interface IHeader {
  headerData?: any;
  include?: () => void;
  setSearch?: any;
  hiddenPagination?: boolean;
}

interface ITableHeader {
  id?: string;
  name: string;
  ordered?: boolean;
  smaller?: boolean;
}

interface ITableData {
  filters: IFilter;
  pages?: IPage;
  tableHeadData: ITableHeader[];
  tableBodyData?: JSX.Element[];
}

interface ITable {
  tableData: ITableData;
  onChangeFilter?: any;
  onChangePagination?: any;
  colgroup?: any;
  hasFilters?: boolean;
}

type IMain = IHeader & ITable;

interface ISchema {
  id: string;
  name: string;
  placeholder: string;
  limit: number;
}

interface IActionButton {
  view?: () => void;
  edit?: () => void;
  deleted?: () => void;
}

interface IModal {
  data: any;
  hide: () => void;
  refresh: () => void;
}

export type {
  IUser,
  IAuthState,
  ILogin,
  IReport,
  IMain,
  IPage,
  IFilter,
  ISchema,
  IActionButton,
  IModal,
};
