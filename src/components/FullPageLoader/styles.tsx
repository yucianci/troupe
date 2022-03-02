import styled from 'styled-components';

export const FullPageLoader = styled.div`
  display: flex;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: #000000b2;
`;

export const Loader = styled.div`
  position: relative;
`;

export const Tea = styled.svg`
  width: 60px;
  height: 60px;
  --cup: white;
  & #teabag {
    transform-origin: top center;
    transform: rotate(3deg);
    animation: swing 2s infinite;
  }
  & #steamL {
    stroke-dasharray: 13;
    stroke-dashoffset: 13;
    animation: steamLarge 2s infinite;
  }
  & #steamR {
    stroke-dasharray: 9;
    stroke-dashoffset: 9;
    animation: steamSmall 2s infinite;
  }
  @-moz-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-webkit-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-o-keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @keyframes swing {
    50% {
      transform: rotate(-3deg);
    }
  }
  @-moz-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-webkit-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-o-keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
  }
  @-moz-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @-webkit-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @-o-keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
  @keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  color: white;
  font-size: 13px;
  top: 85%;
  right: 2%;
`;

export const Dots = styled.div`
  transform: translateY(5.5px) translateX(61px);
  & .line {
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 100%;
    background-color: white;
    margin-right: 1px;
  }
  & .line:nth-last-child(3) {
    animation: dots 0.6s 0.1s linear infinite;
  }
  & .line:nth-last-child(2) {
    animation: dots 0.6s 0.2s linear infinite;
  }
  & .line:nth-last-child(1) {
    animation: dots 0.6s 0.3s linear infinite;
  }
  @keyframes dots {
    0% {
      filter: brightness(0.9);
    }
    50% {
      filter: brightness(0.5);
    }
    100% {
      filter: brightness(0.8);
    }
  }
`;
