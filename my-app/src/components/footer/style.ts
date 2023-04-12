import styled from "styled-components";

export const ContainerF = styled.footer`
  width: 100%;
  div {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey0);
    align-items: center;
    figure{
      margin-left: 50px;
      margin-right: 50px;
    }
    
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    font-family: 'Lexend';
    height: 25px;
    background-color: var(--color-grey1);
    color: white;
    padding-top: 10px;
    margin-right: 50px;
    text-decoration: none;
    :hover {
      color: white;
    }
  }
  @media (max-width:768px){
    div{
      flex-direction: column;
      height: 300px;
      img{
        margin-top: 45px;
      }
      a{
        margin: 0;
        margin-bottom: 20px;
        margin-top: 45px;
      }
    }
  }
`;