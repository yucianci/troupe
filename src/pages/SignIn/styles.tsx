import { Grid, CircularProgress } from '@mui/material';
import styled from 'styled-components';

export const Main = styled(Grid)`
  height: 100vh;
  align-items: center;
  background-image: url(https://wallpapercave.com/wp/wp9389225.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    padding: 0 !important;
    justify-content: center;
  }
`;

export const Container = styled(Grid)`
  width: 32%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 950px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 60%;
  }
  @media (max-width: 550px) {
    width: 70%;
  }
`;

export const Logo = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 100;
`;

export const Body = styled(Grid)`
  width: 100%;
  height: 60%;
  margin: 0;
`;

export const ForgotPassword = styled(Grid)`
  text-align: end;
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 20px;
`;

export const Box = styled(Grid)`
  position: relative;
  padding-top: 20px;
  & > button {
    margin: 40px 0 24px;
    border-radius: 6px;
  }
`;

export const ButtonLoader = styled(CircularProgress)`
  position: absolute;
  color: #5b3972;
  left: 48%;
  top: 55%;
`;

export const Brand = styled(Grid)`
  width: 100%;
  height: 6%;
  margin: 0;
  align-self: flex-end;
  text-align: center;
  font-weight: normal;
  font-size: 0.9rem;
`;
