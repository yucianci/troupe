import styled, { css } from 'styled-components';

interface IMain {
  tooltip?: { text: string; example: string };
  toLeft?: 1 | 2 | null;
}

interface IIcon {
  toLeft?: 1 | 2 | null;
}

export const Main = styled.div<IMain>`
  position: relative;
  height: 61px;
  &::after {
    content: '?';
    text-align: center;
    font-size: 15px;
    border: 1px solid #72727288;
    border-radius: 100%;
    line-height: 20px;
    position: absolute;
    color: #727272;
    font-weight: bold;
    opacity: 0;
    ${(props) => {
      switch (props.toLeft) {
        case 1:
          return css`
            right: 40px;
          `;
        case 2:
          return css`
            right: 65px;
          `;
        default:
          return css`
            right: 10px;
          `;
      }
    }}
    bottom: 24.5px;
    width: 0;
    height: 20px;
    transition: all 0.5s;
  }
  &:hover::after {
    width: 20px;
    ${(props) =>
      props.tooltip
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0;
          `}
  }
`;

export const Icon = styled.div<IIcon>`
  position: absolute;
  cursor: default;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: 16.5px;
  ${(props) => {
    switch (props.toLeft) {
      case 1:
        return css`
          right: 40px;
        `;
      case 2:
        return css`
          right: 65px;
        `;
      default:
        return css`
          right: 10px;
        `;
    }
  }}
  opacity: 0;
  z-index: 1;
`;

export const Text = styled.div`
  background: #e8e8e8;
  border: 1px solid #d1d1d1;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  & ~ p {
    text-align: center;
  }
  & ~ em {
    display: block;
    text-align: center;
    margin: 8px 0 2px;
    color: #6e6e6e;
  }
`;
