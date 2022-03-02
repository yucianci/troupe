import { IReport } from '../interfaces';

function logReport(report: IReport) {
  if (report.count > 0) {
    const { currentPage, perPage, count } = report;
    return `Exibindo de
  ${
    currentPage === 1
      ? `1 até ${count < perPage ? count : perPage}`
      : `${currentPage * 20 - 19} até ${
          perPage * currentPage > count ? count : perPage * currentPage
        }`
  }
  de um total de ${count} ${count <= 1 ? 'registro.' : 'registros.'}`;
  }
  return 'Não há registros no momento.';
}

export default logReport;
