import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    height: 131px;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: var(--Grey-4);
    border: solid 1px var(--Grey-3);

    span {
      font-family: var(--Inter);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--Grey-1);
    }

    @media (min-width: 900px) {
      justify-content: center;
    }
  }
`;

export const Article = styled.article`
  width: 100%;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    width: 55%;
  }
`;

export const ContArticle = styled.article`
  width: 100%;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 55%;
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
