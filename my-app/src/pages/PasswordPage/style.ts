import styled from "styled-components";

export const Container = styled.div`       
    display: flex;
    justify-content: center;
    width: 100%;
    height: 550px;
    position: relative;
    margin-bottom: 50px;
    flex-direction: column;
    
    align-items: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    img{
        position: absolute;
        z-index: -1;
        width: 100%;
        max-width: 1268px;
        max-height: 521px;
  
    }
    h1{
        color: var(--color-grey10);
        margin-bottom: 20px;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }
    
`

export const Main = styled.main`       
    display: flex;
    margin-top: 200px;
    width: 100%;
    position: relative;
    margin-bottom: 100px;
    justify-content: center;
    h2{
        font-family: Lexend, sans-serif;
        font-weight: 600;
        font-size: 28px;
    }
    .none{
        display: none;
    }
    .hide{
        display: none;
    }
    .appear{
        display: flex;
        height: 48px;
        padding: 0px 1.5rem;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        color: rgb(255, 255, 255);
        border-radius: 4px;
        background: rgb(98, 0, 227);
        border: 1px solid rgb(98, 0, 227);
        cursor: pointer;
        transition: all 0.3s ease 0s;
        align-items: center;
        margin-top: 40px;
    }
    .div{
        border: 1px solid black;
        padding: 40px;
        border-radius: 10px;
    }
    div{
        display: flex;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label{
        font-size: 1.5rem;
        margin-bottom: 20px;
        text-align: center;
    }
    input{
        margin-bottom: 40px;
    }
`

export const Div = styled.div`       
    .filtro{
      width: 100%;
      display: none;
      justify-content: center;
      @media (max-width:980px){
        display: flex;
      }
    }
    .filtros{
      width: 230px;
      margin-bottom: 72px;
    }
`