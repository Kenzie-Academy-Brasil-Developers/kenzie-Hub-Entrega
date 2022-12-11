import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Article = styled.article`
  width: 100%;

  span {
    font-family: var(--Inter);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: var(--Grey-1);
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    width: 55%;
  }
`;

export const ContDiv = styled.div`
  height: 131px;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: var(--Grey-4);
  border: solid 1px var(--Grey-3);

  @media (min-width: 900px) {
    justify-content: center;
  }
`;

export const H3 = styled.h3`
  font-family: var(--Inter);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: var(--Grey-0);
  margin-bottom: 20px;
  padding: 0 12px;
`;

export const H4 = styled.h4`
  font-family: var(--Inter);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 0 12px;
  color: var(--Grey-0);
`;

export const H2 = styled.h2`
  font-family: var(--Inter);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: var(--Grey-0);
  margin-bottom: 10px;
`;

export const Headers = styled.header`
  width: 100%;
  height: 72px;
  justify-content: space-between;
  padding: 0 13px;
  display: flex;
  align-items: center;

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

  @media (min-width: 900px) {
    width: 55%;
  }
`;

export const ContTechnology = styled.section`
  width: 100%;
  margin-top: 25px;
  border: solid 1px var(--Grey-4);
  padding: 0 12px;
  display: flex;
  flex-direction: column;

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  }

  h3 {
    font-family: var(--Inter);
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    color: var(--Grey-0);
  }

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  img {
    cursor: pointer;
    display: none;

    @media (min-width: 900px) {
      display: flex;
    }
  }

  button {
    height: 32px;
    width: 32px;
    border-radius: 4px;
    background-color: var(--Grey-3);
    border: solid 1px var(--Grey-3);
    color: var(--Grey-0);
    cursor: pointer;
  }

  ul {
    width: 100%;
    padding: 22px 8px;
    display: flex;
    flex-direction: column;
    background-color: var(--Grey-3);
    border-radius: 4px;
    max-height: 500px;
    overflow: auto;
  }

  li {
    height: 49px;
    width: 100%;
    border-radius: 4px;
    padding: 12px;
    justify-content: space-between;
    display: flex;
    background-color: var(--Grey-4);
    align-items: center;
    margin-bottom: 16px;

    :hover {
      background-color: var(--Grey-2);
    }
  }

  h2 {
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    color: var(--Grey-0);
  }

  h5 {
    font-family: var(--Inter);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: var(--Grey-1);
    cursor: pointer;
    @media (min-width: 900px) {
      margin-right: 25px;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    width: 55%;
    margin-top: 19px;
  }
`;
