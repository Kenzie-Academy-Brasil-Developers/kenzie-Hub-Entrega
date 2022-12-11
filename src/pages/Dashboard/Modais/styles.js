import styled from "styled-components";

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  background-color: var(--Grey-2);
  height: 50px;
  border: solid 1px var(--Grey-2);
  h3 {
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    color: var(--Grey-0);
  }

  button {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: var(--Grey-1);
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-2);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 24px 20px 30px 20px;
  background-color: var(--Grey-3);
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  input {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 16px;
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-0);
    color: var(--Grey-0);
    margin-bottom: 20px;
  }

  label {
    color: var(--Grey-0);
    font-family: var(--Inter);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 17px;
  }

  select {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 16px;
    background-color: var(--Grey-2);
    border: solid 1px var(--Grey-0);
    color: var(--Grey-0);
    margin-bottom: 16px;
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
`;

export const Button = styled.button`
  height: 39px;
  width: 100%;
  border-radius: 4px;
  padding: 0px 22px;
  color: var(--Grey-0);
  background-color: var(--Color-primary);
  cursor: pointer;
  border: solid 1px var(--Color-primary);
`;

export const ButtonEdit = styled.button`
  height: 39px;
  width: 64%;
  border-radius: 4px;
  padding: 0px 22px;
  background-color: var(--Color-primary-Negative);
  color: var(--Grey-0);
  border: solid 1px var(--Color-primary-Negative);
  cursor: pointer;

  :hover {
    background-color: var(--Color-primary);
    border: solid 1px var(--Color-primary);
  }
`;

export const ButtonExcluir = styled.button`
  height: 39px;
  width: 30%;
  border-radius: 4px;
  align-items: center;
  background-color: var(--Grey-1);
  color: var(--Grey-0);
  border: solid 1px var(--Grey-1);
  cursor: pointer;
`;
