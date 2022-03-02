import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'sans-serif';
}

a {
  color: initial;
  text-decoration: none;
}

/* SWAL */
.swal2-styled.swal2-confirm{
  margin: 16px 0 0 16px;
  width: 105px !important;
  font-weight: 400;
  background-color: #341f96 !important;
}
.swal2-styled.swal2-cancel{
  margin: 16px 0 0 0;
  width: 105px !important;
  font-weight: 400;
  background-color: #808080 !important;
}
.swal2-container{
  z-index: 99999;
}
.swal2-popup{
  z-index: 99999 !important;
}
.swal-overlay{
    z-index: 99999 !important;
}

/* Modal */
.MuiTypography-root.MuiTypography-h6.MuiDialogTitle-root {
  background: #341f96 !important;
}
.MuiDialogContent-root {
  overflow: auto;
  padding: 7px 14px;
}
.MuiDialogActions-root.MuiDialogActions-spacing button {
  margin-left: 12px;
  padding: 8px 20px;
}

/* Tooltip */
.MuiTooltip-popper {
  & div.MuiTooltip-tooltip {
  background: #f2f2f2;
  color: #222222;
  box-shadow: 1px 0.5px 2px 1px #706e6e4d;
  }
  & div.MuiTooltip-tooltip > div {
    margin-bottom: 10px;
  }
  & span.MuiTooltip-arrow {
  color: #c6c6c6;
  }
}

/* Scroolbar */
::-webkit-scrollbar {
  width: 8px;
  height: 12px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 2px 2px 2px #d1d8e0;
  background: #fff;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #bdc3c7cf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a6aaad;
}

`;
