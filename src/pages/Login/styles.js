import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 49px 12px;
  flex-direction: column;
  text-align: center;

  form {
    width: 100%;
    max-width: 370px;
    flex-direction: column;
    display: flex;
    padding: 33px 15px;
    background-color: var(--Grey-3);
    border-radius: 3px;
  }
`;

export const Span = styled.span`
  font-family: var(--Inter);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  color: var(--Grey-1);
  margin: 27px 0 17px 0;
`;

export const H1 = styled.h1`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: var(--Grey-0);
  margin-bottom: 17px;
`;

export const Headers = styled.header`
  width: 100%;
  max-width: 370px;
  display: flex;
  background-color: var(--Grey-4);
  align-items: center;
  justify-content: center;
  margin-bottom: 31px;
`;

export const BtnRegister = styled.a`
  height: 38px;
  width: 100%;
  border-radius: 4px;
  padding: 0px 22px;
  background-color: var(--Grey-1);
  border: solid 1px var(--Grey-1);
  color: var(--Grey-0);
  cursor: pointer;
  text-decoration: none;
`;
