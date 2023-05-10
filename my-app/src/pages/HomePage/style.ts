import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 550px;
  margin-bottom: 50px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    max-width: 1268px;
    max-height: 521px;
  }

  h1 {
    color: var(--color-grey10);
    margin-bottom: 20px;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
export const Div = styled.div`
  .filtro {
    display: none;
    justify-content: center;

    width: 100%;

    @media (max-width: 980px) {
      display: flex;
    }
  }

  .filtros {
    width: 230px;

    margin-bottom: 72px;
  }
`;
export const Main = styled.main`
  position: relative;

  display: flex;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 100px;

  .fecha {
    display: none;
  }

  .teste {
    display: flex;
  }

  #id {
    display: flex;
  }

  #t {
    display: none;
  }

  h3 {
    color: rgb(69, 41, 230);
    font-family: Lexend, sans-serif;
    font-size: 25px;
	margin:0 auto;
	text-align: center;
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 310px;
  position: relative;
  flex-direction: column;
  margin-left: 30px;
  h2 {
    margin-bottom: 15px;
  }
  ul {
    margin-bottom: 39px;
  }
  li {
    margin-left: 10px;
  }
  button {
    width: 125px;
    height: 37px;
    padding: 0;
    margin-right: 26px;
    margin-top: 16px;
  }
  .btn {
    border: none;
    background-color: white;
    cursor: pointer;
    display: flex;
    height: 20px;
    width: 160px;
    margin-bottom: 5px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #868e96;
    :hover {
      color: var(--color-grey2);
    }
  }
  .filtros {
    margin: 0 auto;
    padding: 30px;
    display: none;
    justify-content: center;
    align-items: center;
  }
  .divFechar {
    display: none;
    margin-top: 1250px;
  }
  @media (max-width: 980px) {
    display: none;
    border-top: 2px solid var(--color-grey6);
    position: fixed;
    z-index: 2;
    background-color: white;
    top: 50px;
    right: 0;
    max-width: 100%;
    left: 0;
    margin: 0 auto;
    margin-top: 31px;
    overflow: auto;
    max-height: 90%;
    ul {
      margin-left: 15px;
    }
    li {
      margin-left: 25px;
    }
    .divFechar {
      display: flex;
      margin-top: 1150px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      h2 {
        margin: 0;
        margin-left: 15px;
      }
      button {
        width: 50px;
        border: none;
        background-color: white;
        color: #adb5bd;
        font-family: "Lexend";
        font-size: 25px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }
    }
    .filtros {
      margin: 0 auto;
      margin-bottom: 40px;
      width: 270px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 30px;

  margin: 0 100px;

  @media (max-width: 980px) {
    flex-wrap: nowrap;
    overflow-x: scroll;

    width: 100%;
  }

  @media (max-width: 510px) {
    margin: 0 20px;
  }
`;

export const Pagination = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  div {
    display: flex;
  }
  span {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #868e96;
    margin-left: 10px;
  }
  .page {
    color: var(--color-grey2);
  }
  button {
    margin-left: 30px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    border: none;
    background-color: white;
    color: var(--color-brand2);
    cursor: pointer;
  }
  @media (max-width: 980px) {
    flex-direction: column;

    button {
      margin-top: 30px;
    }
  }
`;
