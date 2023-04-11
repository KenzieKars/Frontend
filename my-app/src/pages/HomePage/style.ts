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
        max-width: 1268px;
        max-height: 521px;
        min-width: 1268px;
        min-height: 521px;
    }
    h1{
        color: var(--color-grey10);
        margin-bottom: 20px;
    }
`
export const Main = styled.main`       
    display: flex;
    justify-content: flex-start;
    width: 100%;
    position: relative;
    margin-bottom: 100px;
    
`

export const Aside = styled.aside`       
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 310px;
    position: relative;
    flex-direction: column;
    margin-left: 30px;
    h2{
        margin-bottom: 15px;
    }
    ul{
        margin-bottom: 39px;
    }
    li{
        margin-left: 10px;
    }
    button{
        width: 125px;
        height: 37px;
        padding: 0;
        margin-right: 26px;
    }
    .btn{
        border: none;
        background-color: white;
        cursor: pointer;
        display: flex;
        height: 20px;
        width: 160px;
        margin-bottom: 5px;
        
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: #868E96;
    }
    
`
export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`
export const Pagination = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    span{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #868E96;
        margin-left: 10px;

    }
    .page{
        color: var(--color-grey2);
    }
    button{
        margin-left: 30px;
        font-family: 'Lexend';
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
        
    }
`


















export const ProductContainer = styled.section`
  width: 312px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    background-color: var(--color-grey7);
    border: 2px solid var(--color-grey7);
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      transform: scale(1);
      position: absolute;
      transition: 0.4s;
      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
    label {
      top: 5px;
      left: 5px;
      position: absolute;
      padding: 0 0.5rem;
      font-family: "Inter";
      font-style: normal;
      font-size: 14px;
      text-align: center;
      color: #ffffff;
      background: ${(props) => props.color};
    }
    :hover {
      border: 2px solid var(--color-brand1);
    }
  }
  .product-title {
    color: var(--color-grey1);
  }
  .product-description {
    width: 95%;
    height: 5rem;
    overflow: auto;
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: justify;
      color: var(--color-grey2);
      word-break: break-all;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;

    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const ProductOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  .owner-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 150px;
    color: var(--color-whiteFixed);
  }
  .owner-name {
    color: var(--color-grey2);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .product-details {
    display: flex;
    gap: 10px;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem 0.5rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      border-radius: 5px;
      background-color: var(--color-brand4);
      color: var(--color-brand1);
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .product-price {
    font-family: "Lexend", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey1);
  }
`;