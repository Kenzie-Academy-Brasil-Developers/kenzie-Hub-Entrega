import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
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
    padding: 33px 15px 20px 15px;
    background-color: var(--Grey-3);
    border-radius: 3px;

    select {
      height: 38px;
      width: 100%;
      border-radius: 3px;
      padding: 0px 13px;
      background-color: var(--Grey-2);
      border: solid 1px var(--Grey-2);
      margin-bottom: 20px;
      color: var(--Grey-0);
    }

    label {
      color: var(--Grey-0);
      text-align: start;
      font-family: var(--Inter);
      font-size: 10px;
      font-weight: 400;
      margin-bottom: 15px;
    }

    p {
      color: var(--Negative);
      position: relative;
      bottom: 15px;
      font-family: var(--Inter);
      font-size: 12px;
      font-weight: 400;
      text-align: start;
    }
  }
`;

export const H1 = styled.h1`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: var(--Grey-0);
  margin-bottom: 17px;
`;

export const Span = styled.span`
  font-family: var(--Inter);
  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  color: var(--Grey-1);
  margin-bottom: 22px;
`;

export const Headers = styled.header`
  width: 100%;
  max-width: 370px;
  display: flex;
  justify-content: space-between;
  background-color: var(--Grey-4);
  align-items: center;
  margin-bottom: 31px;

  a {
    height: 32px;
    width: 79px;
    background-color: var(--Grey-3);
    border-radius: 4px;
    padding: 0px 16px;
    cursor: pointer;
    color: #ffff;
    align-items: center;
    justify-content: center;
    display: flex;

    :hover {
      border: solid 1px var(--Grey-3);
    }
  }
`;
